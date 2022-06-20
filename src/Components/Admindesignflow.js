import React, { useState, useRef,useEffect,useCallback} from 'react';
import styles  from './Adminquestionbank.module.css';
import './Admindesignflow.css'
import {Form,Button,Modal,InputGroup,FormControl,Dropdown, DropdownButton,Accordion} from 'react-bootstrap';
import  axios  from 'axios'
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  getEdgeCenter,
  isEdge,
  getMarkerEnd,
  getSmoothStepPath,
  Background,
  Handle,
  MiniMap,
} from 'react-flow-renderer';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
//reactflow work
const foreignObjectSize = 100;
const initialElements = [
    {
      id: '0',
      type: 'input',
      data: { label: 'Start' },
      position: { x: 350, y: 55 },
    },
    {
      id: '-1',
      type: 'output',
      data: { label: 'End'  },
      position: { x: 350, y: 450 },
    }
  ];
  


export default function DesignFlow() {
  const id = useRef(0);

const getId = () =>{id.current=id.current+1;
  console.log("ID OF NEW NODE IS",`dndnode_${id.current}`);
  return `dndnode_${id.current}`};
  
//logged user
//const logged_user=window.localStorage.getItem('user_Id');
//console.log("user got in flow is",logged_user);
const tempUrl=useRef();
const logged_user=window.localStorage.getItem('user_email');;
const [toast_text,setToastText]=useState();
const selectedImage = useRef();
const [templateName,setTemplateName]=useState();
const navigation = useNavigate();
const handlePageSubmit = useCallback(() => navigation('/Admintemplatemenu', {replace: true}), [navigation]);
const toggleShowA = () => {
  setShowA(!showA);
  sleep(3000);
  
};
  const [showA, setShowA] = useState(false);
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  
  //question data states
  const question=useRef([{node_id:'',question_id:'',stem:'',option:[{id:'',optionText:'',optionWeightage:''}],category:'',isUser:'',stemweightage:''}]);
  const dropdownValues=useRef([{option:[{id:'',optionText:'',optionWeightage:''}]}]);
  const edgeData=useRef([{edge_id:'',source:'',target:'',selectedValue:'',isUser:''}]);
  const [nodeFound,setnodeFound]=useState({node_id:'',question_id:'',stem:'',optionArray:[{id:'',optionText:'',optionWeightage:''}],CategoryName:'',username:'',question_weight:''});
  const [stem,setStem]=useState();
  const [sourcehandlecount,setsourcehandlecount]=useState({sourcecount:1,sourceid:''});
  const updateNodeList=useRef([{old_Question_Id:'',new_Question_Id:''}])
  
  const [optionList,setoptionList]=useState([{id:count,optionText: '',optionWeightage: ''}]);
    const [question_weight,setQuestionWeightage]=useState();
  edgeData.current=edgeData.current.filter(edge=>(!(edge.edge_id=='')));
  question.current=question.current.filter(node=>(!(node.node_id=='')));
  updateNodeList.current=updateNodeList.current.filter(node=>(!(node.old_Question_Id=='')));
 
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dropDownTitle=useRef("A");
   
 const titleArray=useRef([{source_id:0,selectedTitle:"",target_id:0}]);
    var count=1;
    const handleOptionChange = (name,val, index) => 
    {
      const list = [...optionList];
      list[index][name] = val;
      setoptionList(list);
    };
    const handleStemChange=(e)=>{
      setStem(e.target.value);
     }
     const handleRemoveClick = index => 
    {
      const list = [...optionList];
      list.splice(index, 1);
      setoptionList(list);
    };

  // handle click event of the Add button
    const handleAddClick = (id) => 
    {
    count=Math.ceil(Math.random()*99999999);
    //id=count;
    setoptionList([...optionList, {id:count, optionText: '', optionWeightage: '25' }]);
    };
  //reactflow states
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
 
  //data functions
  useEffect(()=>{
   console.log("in useeffect nodefound changed",nodeFound);
   setoptionList(nodeFound.optionArray);
   setStem(nodeFound.stem);
   setQuestionWeightage(nodeFound.question_weight);
    },[nodeFound]);
  const findNode=(nodeid)=>
  {
    
  
    question.current.map((node)=>
    {
      //console.log(" Current Question id",node.node_id);
      if(node.node_id===nodeid)
      {
        
        console.log("node to be copied is ",node);
       const tempnode={node_id:node.node_id,question_id:node.question_id,stem:node.stem,optionArray:node.option,CategoryName:node.category,username:logged_user,question_weight:node.stemweightage}
       setnodeFound(tempnode);
       setQuestionWeightage(nodeFound.question_weight);

       console.log("Weight here is",node.question_weight);
       //console.log("updated node value",nodeFound);
       handleShow();
      }
      else
      {
        console.log("FIND node called error while finding node");
      }
    });
};
const handleCloseUpdateQuestion=()=>{
  setoptionList(nodeFound.optionArray);
  setStem(nodeFound.stem);
  setQuestionWeightage(nodeFound.question_weight);
  handleClose();
}
  const handleSubmitUpdateQuestion=async()=>
  {
    let notchanged1=false,notchanged2=false,notchanged3=false,stemchanged=true,optionschanged=true,weightagechanged=true;
    if(nodeFound.stem===stem){
      notchanged1=true;
      stemchanged=false;
      console.log("stem same");
      //setStem(nodeFound.stem);
    }
    console.log("optinlist is",optionList);
      if(nodeFound.optionArray===optionList){
        console.log("option same");
        
        //setoptionList(nodeFound.optionArray);
        notchanged2=true;
        optionschanged=false;
      }//question weight used in drop stem is dragdrop passed weightage
      if(nodeFound.question_weight===question_weight){
        notchanged3=true;
        weightagechanged=false;
      }
     
      //check weightage here too 
    if(notchanged1==false||notchanged2==false ||notchanged3==false){
      console.log("not change is false something updated optionlist is",optionList);
      nodeFound.stem=stem;
      if(optionList.length<1){nodeFound.optionArray=[{}];}
      else{nodeFound.optionArray=optionList;}
          nodeFound.optionArray=optionList;
          nodeFound.username=logged_user;
      nodeFound.question_weight=question_weight;
  //getusername
  console.log("updated nodefound in handlesubmit is",nodeFound);
  const addques={CategoryName: '',
  stem: '',
  question_weight: 1,
  optionArray:[
          {
            id: 1,
            optionText:'',
            optionWeightage: ''
          }
        ],
  user_id: 0};
  addques.stem=nodeFound.stem;
  addques.question_weight=question_weight;
addques.optionArray=nodeFound.optionArray;

addques.CategoryName=nodeFound.CategoryName;
let isSomethingempty=false;
if(addques.stem.length==0){
  isSomethingempty=true;
}
addques.optionArray.map((option)=>{
if(option.optionText.length==0){
  isSomethingempty=true;
  alert("Kindly input all options");
}
});

if(isSomethingempty==false) {
  if(stemchanged===false || optionschanged===false || weightagechanged===false){
    console.log("noneupdated");
  handleClose();
}
  console.log("adding update question");
  const response = await axios.post(`${process.env.REACT_APP_API_KEY}/add/user/question`, addques).catch((err) => 
{
  //incase of server down
  alert("There was an error while updating .Kindly try again");
});
if (response)  {
  console.log("reponse by post question is",response.data);
  updateNodeList.current.push({old_Question_Id:nodeFound.question_id,new_Question_Id:response.data.question_id});
  console.log("API DONE",nodeFound.question_id);
  //update question in array
  updateQuestion();
  updateNode();
  //change label
  //update question in edges options and ids
  let res=edgeData.current.every((edge)=>
  {
    if(edge.source===nodeFound.node_id)
    {
      return false;
    }
    else if(edge.source===nodeFound.node_id){
      return false;
    }
  });
  if(res===false)
  { 
    console.log("updated node calling");
    updateEdge();
    handleClose();
  }
  else
  {
    console.log("updated question did not had any edges");
    handleClose();
  }
  // yay nodeFound.question_id=response.data.question_id;
}
  //send it to backend ,using temp new id and get updated id and assignit to nodeFound up
  
    }
     } }
  const updateQuestion=()=>
  {
    question.current.map((node)=>
    {
      if(node.node_id===nodeFound.node_id)
      {
        node=nodeFound;
        console.log("question updated");
      }
    });
  }
  const updateEdge=()=>{
    console.log("edges before updation are",edgeData.current);
    edgeData.current=edgeData.current.filter(edge=>((nodeFound.node_id===edge.source)));
    edgeData.current=edgeData.current.filter(edge=>((nodeFound.node_id===edge.target)));
    console.log(" My updated edges are",edgeData.current);
    
  }
  const updateNode=()=>{
    console.log("elements before updation are",elements);
    const nodeArray = [];
    
    elements.map((els) => 
    {
      if (!(isEdge(els))) 
      {
        if(els.id===nodeFound.node_id)
        {
          els.data.label=nodeFound.stem;
          console.log("updated els is ",els);
        }
        else{}
        return nodeArray.push(els);
      }
      if(isEdge(els))
      {  if(els.source===nodeFound.node_id)
        {
          const elem1=elements.filter(edge=>((nodeFound.node_id!==edge.source)));
          const elem2=elem1.filter(edge=>((nodeFound.node_id!==edge.target)));
          setElements(elem2);
          console.log("elemts1 are",elem2);
          let wasFirstQuestion=false;
          elements.map((els) => 
          {
            if(isEdge(els))
            {
              if(els.target==nodeFound.node_id){
                wasFirstQuestion=true;
              }
            }
          });
          if(wasFirstQuestion==true){
           
            sourcehandlecount.sourcecount=1;
            sourcehandlecount.sourceid='';
          }
         // setsourcehandlecount(1);
          //elements.splice(elements.indexOf(els),1);
        }
        if(els.target===nodeFound.node_id)
        {
          const elem1=elements.filter(edge=>((nodeFound.node_id!==edge.source)));
          const elem2=elem1.filter(edge=>((nodeFound.node_id!==edge.target)));
          setElements(elem2);
          console.log("elemts2 are",elem2);
          let wasFirstQuestion=false;
          elements.map((els) => 
          {
            if(isEdge(els))
            {
              if(els.target==nodeFound.node_id){
                wasFirstQuestion=true;
              }
            }
          });
          if(wasFirstQuestion==true){
           
            sourcehandlecount.sourcecount=1;
            sourcehandlecount.sourceid='';
          }
          //setsourcehandlecount(1);
       // elements.splice(elements.indexOf(els),1);
        }
      }
    });
    console.log("all updates els in nodearray are",elements);
    //updateing node data

  }

  const setCurrentOption=(sourceid)=>
  {

    question.current.map((currentNode)=>
    {let exist_edge=false;
      if(currentNode.node_id===sourceid)
      {
        console.log("Node selected is",currentNode,"and source id is",sourceid);
        let tempoptions=[];
    currentNode.option.map((questionOption)=>{
      let optionfound=false;
titleArray.current.map((title)=>{if(title.source_id==sourceid){
if(questionOption.optionText==title.selectedTitle){
  optionfound=true;
}}
});
if(optionfound==false){
  console.log("new option adding",questionOption);
tempoptions.push(questionOption);
}else{
  console.log("option already added",questionOption);
}
    });
    dropdownValues.current=tempoptions;
    console.log("dp options after loop are",dropdownValues.current);
if(tempoptions.length==0){
  exist_edge=false;
}else{ }
if(exist_edge==true){
  
        dropdownValues.current=currentNode.option;
}

       
      }
      else
      {
      }
    });
  }
  const setEdgeData=(id,target,source,selectedOption)=>{
   
   
   
    let existingOption=false;
    titleArray.current.map((titleNode)=>{
      if(titleNode.source_id==source)
      {
        if(titleNode.target_id==target)
        {
          existingOption=true;
          titleNode.selectedTitle=selectedOption;
          console.log("Existing questionoption called option selected is",titleNode.selectedTitle,
          "source is",titleNode.id,"target to be added is",target);
        } 
      }
    });
    if(existingOption==false){
    //  console.log("Found new option seting is ",source,selectedOption);
      titleArray.current.push({source_id:source,selectedTitle:selectedOption,target_id:target})
    }else{}
    //for setting changesd option title to edge
    const tempEdge={edge_id:'',source:'',target:'',selectedValue:'',isUser:''};
    question.current.map((node)=>{
      if(node.node_id===target)
      {
       // console.log("node id ",node.node_id,"questionID",node.question_id," source",source ,"node isuser ",node.isUser);
       if(node.node_id==-1){tempEdge.isUser=false;}else{ 
       tempEdge.isUser=node.isUser;}
      }
    });
    tempEdge.edge_id=id;
    tempEdge.source=source;
    tempEdge.target=target;
    tempEdge.selectedValue=selectedOption;
    
    let isExisting=false;
    
    edgeData.current.map((edge)=>
    {
      if(edge.edge_id===id)
      {
        isExisting=true;
        edge.selectedValue=selectedOption;
      }
    })
    if(isExisting===false)
    {
      if(target==-1){tempEdge.isUser=false;}
      edgeData.current.push(tempEdge);
    }
    else
    {
      console.log("item value changed");
    }
      console.log("edge parameters: id:",id," source id: ",source," target :",target,"selected Option: ",selectedOption);

  }
  const removeQuestion=((questionid)=>
  {
    question.current=question.current.filter(currentQuestion=>(!(currentQuestion.node_id==questionid)));
  });
 //react flow functions
  const onConnect = (params) => {
    console.log("params are",params);
    let isopenended=false,ismade=false;
    if(params.source!=="0"){
      const edgeArray = [];
      const nodeArray = [];
      elements.map((els) => 
      {
        if (isEdge(els)) 
        {
          return edgeArray.push(els);
        }
        else 
        {
          return nodeArray.push(els);
        }
      });
      edgeArray.map((edge)=>{
        if(edge.source==params.source){

question.current.map((currentQuestion)=>{
  if(currentQuestion.node_id==params.source){
    if(currentQuestion.option.length==0){
      isopenended=true;
      ismade=true;
      alert("Open ended question can have only one outgoing edge");
    }
  }
        });
        if(isopenended==false){
          ismade=true;
      setElements((els) => addEdge({ ...params,arrowHeadType:"arrow", type: 'customedge' }, els))}

      }});if(ismade==false){ setElements((els) => addEdge({ ...params,arrowHeadType:"arrow", type: 'customedge' }, els))}
     }
  else{
    if(sourcehandlecount.sourcecount==1) { setElements((els) => addEdge({ ...params,arrowHeadType:"arrow", type: 'customedge' }, els));
    //const temp={};
    sourcehandlecount.sourcecount=2;
    sourcehandlecount.sourceid=params.target;
    //setsourcehandlecount({sourcecount:2,sourceid:params.target});
  console.log("source handle count is",sourcehandlecount);
  }
      else{
alert("There can only be one starting question");}
  }};
  const onElementsRemove = (elementsToRemove) =>
  {
    if(elementsToRemove[0].type== "customedge"){
        if(elementsToRemove[0].source== 0){
          sourcehandlecount.sourcecount=1;
          sourcehandlecount.sourceid='';
        }
      }
      elementsToRemove.map((currentelement)=>{
      
        if(currentelement.type=="customedge"){
         
          titleArray.current.map((title)=>{
           
        if(title.source_id==currentelement.source){
         
          if(title.target_id==currentelement.target){
            
            titleArray.current=titleArray.current.filter((ctitle)=>{
              if(ctitle!==title){return true};
          }
           );
          console.log("titlearra after filter are",titleArray.current);
          }
        }
          });
          console.log("after element removal title are",titleArray.current);
        }
            });
    console.log("element remove called",elementsToRemove);
    //first checking if source edge is deleted then restoring the source edge state
    
    let isStartEnd=false;
    try{ 
      elementsToRemove.map((currentElement)=>{
        if(currentElement.id==sourcehandlecount.sourceid){
          sourcehandlecount.sourcecount=1;
    sourcehandlecount.sourceid='';
          console.log("current element id is",currentElement.id,"sourcecount is",sourcehandlecount.sourcecount);
        }
      if(currentElement.id==='0')
      {
        isStartEnd=true;
        alert("Start node cannot be deleted");
      }
      else if(currentElement.id==='-1')
      {
        isStartEnd=true;
        alert("End node cannot be deleted");
      }
    });
    if(isStartEnd==false)
    {
      elementsToRemove.map((currentElement)=>
      {
       removeQuestion(currentElement.id);
      });
      console.log("questions state after removal are: ",question.current);
      setElements((els) => removeElements(elementsToRemove, els));
    }
  }catch(error){
console.log("error is ",error);
  }
  }
  const checkEdges=(allElements)=>{
    const edgeArray = [];
    const nodeArray = [];
    allElements.map((els) => 
    {
      if (isEdge(els)) 
      {
        return edgeArray.push(els);
      }
      else 
      {
        return nodeArray.push(els);
      }
    });
    console.log("node array lentgh",nodeArray.length,"Edges array lentgh:",edgeArray.length);
   let res=nodeArray.every((node)=>
   {
    let hasSource=false,hasTarget=false;
    edgeArray.map((edge)=>
    {
      
      console.log("node id",node.id,"Source",edge.source,"target",edge.target);
      if(!(node.id==-1))
      {
        if(node.id==edge.source)
        {
          hasSource=true;
        }
      }
      else
      {
        hasSource=true;
      }
     if(!(node.id==0))
     {
      if(node.id==edge.target)
      {
        hasTarget=true;
      }
    }
    else
    {
      hasTarget=true;
    }
   
     
    });
    
    if(hasSource==false || hasTarget==false) 
    {
      return false;
    }
    else{
      //if all nodes have edges 
     // question.current.shift();
      //edgeData.current.shift();
   
      return true;
    }
    
  });
  if(res===false)
  {
    alert("All questions must have edges");
  }
  if(res===true)
  {
    console.log("edge array: ",edgeArray.length,"edgedataarray:",edgeData.current.length);
    if((edgeArray.length)==edgeData.current.length)
    {
      console.log("All eddges have options selected");
      convertEdgesId();
      console.log("All correct call api Edges",JSON.stringify(edgeData.current));
     if(templateName!==undefined){
      if(templateName.length<1 ){
       if(selectedImage.current==undefined){
         alert("Template Name and Image are required")
       }
       else{
         alert("Template Name is required")
       }
     }
     else if(selectedImage.current==undefined){
      alert("Template Image is required")
    }
    else{
      //console.log("edges are without json: ",edgeData.current);
      sendFlow();}}else{
        alert("Template Name is required");
      }
     
    }
    else
    {
      alert("not All eddges have options selected");
      
    }
  }
}
const convertEdgesId=()=>{
  question.current.map((node)=>{
    edgeData.current.map((edge)=>{
      if(edge.source===node.node_id)
      {
        edge.source=node.question_id;
      }
      else if(edge.target===node.node_id)
      {
        edge.target=node.question_id;
      }
    });
  });
  edgeData.current.map((edge)=>{
    updateNodeList.current.map((update_Node)=>{
    if(edge.source==update_Node.old_Question_Id){
      edge.source=update_Node.new_Question_Id;
    }else if(edge.target==update_Node.old_Question_Id){
      edge.target=update_Node.new_Question_Id;
    }
    });
      });
}
useEffect(()=>{
  console.log("toast text is",toast_text);
  if(toast_text!==undefined){
    setShowA(true);}
   },[toast_text]);
const sendFlow=async()=>{
  
 const data_to_send={
  template_Name:templateName,
  template_Image:selectedImage.current,
  
  template_Rules:edgeData.current,
  template_Flow: elements,
 }
  console.log("data sended to api is",data_to_send);
  //setToastText("Successfully stored");
  const response = await axios.post(`${process.env.REACT_APP_API_KEY}/add/template`, data_to_send).catch((err) => 
      {
        console.log("Error: ", err);
      });
      if (response.status==200)  {
        
        if(response.data.Message=="Successfully stored Templates")
        {
          setToastText("Template has been stored successfully");

        console.log("reponse is all good received");
        
        }
        
        console.log("reponse by post question is",response);
       
      }
}
  
  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  const onNodeDoubleClick=(event,node)=>{
    event.preventDefault();
    findNode(node.id);
  }
  
  const ShowDeleteButton=(e,targetButtonId)=>{
    
    var x = document.getElementById(targetButtonId);
  if(e.button==2)
  {
    x.style.display = "block";
  }
  if(e.button==0)
  {
    x.style.display = "none";
  }
    //   if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  }

  const CustomNode = ({data}) => {
    return (
    <div 
    onNodeDoubleClick={(e)=>{ findNode(data.id) }} 
    onMouseDown={(e)=>{ShowDeleteButton(e,`${data.id}.deletebutton`)}}
    onContextMenu={(e)=> e.preventDefault()}
    >
   
    <Handle
      className='react-flow__handle react-flow__handle-top'
      type="target"
      position="top"
      id={`${data.id}.top`}
    />
    <Handle
      className='react-flow__handle react-flow__handle-bottom'
      type="source"
      position="bottom"
      id={`${data.id}.bottom`}
      
    />
    <div> {data.label}</div> 
      <button    
      id={`${data.id}.deletebutton`}
     className="updateButtonStyle"
     onContextMenu={()=>{ onElementsRemove([data]) }}
      
      >
        X
        </button>
    
       
    </div>
    );
  };
  const setForeignVisible=(pathId)=>{
    //console.log("Foreign object visible is called");

const allobjects=document.getElementsByTagName("foreignObject");
for(let i=0 ; i < allobjects.length ; i++){
  allobjects[i].style.visibility="hidden";
}
const myfo = document.getElementById(`${pathId}.foreignObject`).style.visibility="visible";
//console.log("allobjects is:",allobjects.length);
 
  }
  const setCurrentTitle=(source,target)=>{
    let existing=false;
    titleArray.current.map((Atitle)=>{
     
    if(Atitle.source_id==source)
    {if(Atitle.target_id==target){
      dropDownTitle.current=Atitle.selectedTitle;
      existing=true;}
     // console.log("previous title found is",dropDownTitle.current," of ",Atitle.id,source);
    }
    else {}
  });
  if(existing==false){
    dropDownTitle.current="Select Option";
   // console.log("new title found is",dropDownTitle.current," of ",source);
  }
}
  const customEdge=({
    id,
    source,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style,
    target,
    arrowHeadType,
    markerEndId,
  })=>
  {
    const edgePath = getSmoothStepPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    });
    const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
    const [edgeCenterX, edgeCenterY] = getEdgeCenter({
      sourceX,
      sourceY,
      targetX,
      targetY,
    });
    return (
      <>
        <path
          id={id}
          
          className="react-flow__edge-path"
          d={edgePath}
          markerEnd={markerEnd}
          onClick={(e)=>{setForeignVisible(id)}}
        />
        <foreignObject
         id={`${id}.foreignObject`}
         visibility= "hidden"
          width={foreignObjectSize+450}
          height={foreignObjectSize+400}
          x={edgeCenterX - foreignObjectSize / 4}
          y={edgeCenterY - foreignObjectSize / 4}
          className="edgebutton-foreignobject"
          requiredExtensions="http://www.w3.org/1999/xhtml"
          
        >
          <body className="pathdropdown">
   
            {question.current.map((node)=>{
              return(
                <div>{setCurrentTitle(source,target)}
              {((source===node.node_id))?(
              // console.log("My options are ",node.option)
              (!(node.option.length==0))?(
                <div className='dpdown'>
              
                <DropdownButton id="dropdown-basic-button" title={dropDownTitle.current}  
                onClick={setCurrentOption(source)} onSelect={(e)=>{setEdgeData(id,target,source,e)}} >
                 
                  {dropdownValues.current.map((optionvalue,idx)=>{
                    return(<div className='dropdownmenu'>
                    <Dropdown.Item  key={optionvalue.id} selected eventKey={optionvalue.optionText}>{optionvalue.optionText}</Dropdown.Item>
                    </div>);
                  })}
                </DropdownButton>
                </div>
               
                  
              ):(setEdgeData(id,target,source,""))
               ):( (source==='0')?(
                 setEdgeData(id,target,source,"")):(console.log("neither source neither lentgh 0")) 
                 )}
               </div>
              ) })
            
            }
                
          </body>
        </foreignObject>
      </>
    );
  }

  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const tempQuestionId=event.dataTransfer.getData('questionid');
    const tempQuestionStem=event.dataTransfer.getData('questionstem');
    const tempOptionsArray=(JSON.parse(event.dataTransfer.getData('currentoptions')));
    const tempCategory=event.dataTransfer.getData('category');
    const tempUsername=event.dataTransfer.getData('userEmail');
    const tempstemweightage=event.dataTransfer.getData('questionweightage');
    //console.log("Ondragstop called(question ID):",tempQuestionId," question stem: ",tempQuestionStem,
    //"thisCurrentoptions: ",tempOptionsArray);
    const list={};      
    list['question_id']=tempQuestionId;
    list['stem']=tempQuestionStem;
    list['option']=tempOptionsArray;
    list['category']=tempCategory;
    if(tempUsername==""){list['isUser']=false;}
    else if(tempUsername!==""){list['isUser']=true;}
    list['stemweightage']=tempstemweightage;
    console.log("list is after",list);
  
      
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = 
      {
        className: 'react-flow__node-default react-flow__node-default.selectable'  ,
        id: getId(),
        type:"CustomNode",
        position,
        data: { label:tempQuestionStem },
       // style={styles.customNodeStyle},
      };
      newNode.data = { ...newNode.data, id: `${newNode.id}` };
      setElements((es) => es.concat(newNode));
      list['node_id']=newNode.id;
      
      question.current.push(list);   
      console.log("question is after current",question.current);
  
  };
  const edgeTypes = {
    customedge: customEdge,
  };
  const nodeTypes = {
    CustomNode: CustomNode,
  };//601
  const hiddenFileInput = useRef(null);
    const handleClick = (e) => {
      hiddenFileInput.current.click();
    };
    
  const handleChange = (event) => {
    tempUrl.current='none';
    var selectedFile = event.target.files[0];
    const reader=new FileReader();
    reader.addEventListener("load",()=>{
      tempUrl.current=reader.result;
      selectedImage.current=selectedFile;
      console.log(selectedFile.name.slice(0,20)+"...","URL MADE IS:",selectedImage.current);
      document.getElementById('templateimage').innerText=selectedFile.name.slice(0,15)+"...";
      selectedImage.current=tempUrl.current;
      console.log("updated url is",selectedImage.current);
   
    });
    reader.readAsDataURL(selectedFile);
     
   
   // selectedImage.current=URL.createObjectURL(selectedFile);
   
   }
  const graphStyles = { width: "100%", height: "515px" };
  return (
    <div className='admin-designflows'><div className='template-infomration'>
     Template Name <input type='text' required={true} value={templateName} onChange={(e)=>setTemplateName(e.target.value)} placeholder='Enter template name here' className='templatename-input'/>
      Template Image <button id='templateimage' className='templateimage' onClick={(e)=>handleClick(e)}>No File Chosen</button>
     
      <input type='file' id='templateimg-input' accept='image/*'
      ref={hiddenFileInput}
      onChange={(e)=>{handleChange(e)}} required={true}
      />
      </div>
    <div className="dndflow" >
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            style={graphStyles}
            edgeTypes={edgeTypes}
            onNodeDoubleClick={onNodeDoubleClick}
            
          ><Background variant="dots" gap={12} size={0.5} />
            <MiniMap className='minimap'
            nodeColor={(node) => {
              switch (node.type) {
                case 'input':
                  return '#e6a299';
                case 'output':
                  return '#a5e5e7';
                default:
                  return '#919e9e';
              }
            }}
            nodeStrokeWidth={3}
          />
          <Controls style={{bottom: "5px"}}></Controls>
          <Button type="submit" onClick={() => {
            
            console.log("Flow to save is",JSON.stringify(elements));
            //question.current.shift();
            //console.log("Questions: ",question.current);
            //console.log("edges are: ",edgeData.current);
            //edgeData.current.shift();
            checkEdges(elements);
            
            
            }
            }//left left:"600px",bottom: "5px",top:"535px",
            className='react-flow__controls'
            style={{left:"40px",bottom: "20px",paddingLeft:"20px",paddingRight:"20px",
            top:"460px",position:"relative"}}
            >Save</Button>
          </ReactFlow>
              
        </div>
      </ReactFlowProvider>
     
    </div>
    <Toast show={showA} onClose={handlePageSubmit} className='toast1' position='bottom-center'  delay={2000} autohide>
          <Toast.Header>
            {console.log("toast is shown somewhwere,",toast_text)}
            <strong className="me-auto">Message</strong>
            <small>now</small>
          </Toast.Header>
          <Toast.Body>{toast_text}</Toast.Body>
        </Toast>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="update-question-modal"
        //onSubmit={handleSubmitUpdateQuestion}
      >
        <Modal.Header >
        <Modal.Title>Update Question</Modal.Title>
        </Modal.Header>
          <Form>
            <Modal.Body >      
            <h6 className='myclasscateogry'>Category Name: </h6><label> {nodeFound.CategoryName}</label>    
            
                <InputGroup>
                    <InputGroup.Text>Question</InputGroup.Text>
                    <FormControl as="textarea" name="stem"  
                    onChange={handleStemChange} value={stem} >{nodeFound.stem}</FormControl>
                </InputGroup>
                <div className='admin-weight-dp'><label className="weightagelabelss">Weightage: </label>
                
                <DropdownButton id="dropdown-basic-button" title={question_weight}  name="question_weight"
                value={question_weight}  onSelect={e => setQuestionWeightage(e)} required className="updatequestiondeightage">
                          <Dropdown.Item eventKey="25">25</Dropdown.Item>
                          <Dropdown.Item eventKey="50">50</Dropdown.Item>
                          <Dropdown.Item eventKey="75">75</Dropdown.Item>
                          <Dropdown.Item eventKey="100">100</Dropdown.Item>
                          
                      </DropdownButton></div>
                      
                      <label style={{fontWeight:"500",display: "flex",marginLeft: "5px"}}>Options</label>
                
                {optionList.map((T_option,i)=>(
                    <div key={T_option.id} style={{marginTop:"10px"}}>
                      
                      <Form.Control  type="text" name="optionText" value={T_option.optionText} 
                      onChange={e=> handleOptionChange(e.target.name,e.target.value,i)} className='admindesignflowoption'></Form.Control>  
                       <h6 style={{marginRight:"3%",display:"inline-flex"}}>weightage</h6> 
                      <DropdownButton id="dropdown-basic-button" title={T_option.optionWeightage}  name="optionWeightage"
                value={T_option.optionWeightage}  onSelect={e => handleOptionChange("optionWeightage",e, i)} style={{display:"contents",marginRight:"20px"}}>
                          <Dropdown.Item eventKey="25">25</Dropdown.Item>
                          <Dropdown.Item eventKey="50">50</Dropdown.Item>
                          <Dropdown.Item eventKey="75">75</Dropdown.Item>
                          <Dropdown.Item eventKey="100">100</Dropdown.Item>
                          
                      </DropdownButton>
                      <div className="update-add-question-btn-box" style={{marginLeft:"20px"}}>
                  {optionList.length !== 2 && <button
                  
                    className="update-add-question-optionremoveButton"
                    onClick={() => handleRemoveClick(i)}>-</button>}
                  {optionList.length - 1 === i && <button className="update-add-question-optionaddbutton"
                  onClick={()=>handleAddClick(i)}>+</button>}
                </div>
                      </div>
                ))}
                
                
            
            </Modal.Body>
          </Form>
        <Modal.Footer>
        <Button type="submit" className='cancelupdateformbutton' onClick={(e)=>{handleCloseUpdateQuestion()}}>Cancel</Button>
          <Button type="submit" onClick={(e)=>{handleSubmitUpdateQuestion()}}>Save</Button>
        </Modal.Footer>
      </Modal>
      
    
    </div>
  );
};
//update/option selected issue/path zindex/sidebar coloring