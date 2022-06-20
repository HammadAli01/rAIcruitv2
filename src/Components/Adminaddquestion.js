import React,{useState,useRef,useEffect} from 'react'
import {Container,Row,Col,Button,Modal,InputGroup,FormControl,Dropdown, DropdownButton,Accordion} from 'react-bootstrap'
import './Adminaddquestion.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Toast } from 'react-bootstrap';
export default function Adminaddquestion() {
  
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const openedQuestion=useRef();
  const [questionType,setQuestionType]=useState('close ended');
  const showOptions=useRef(true);
  const [stem,setStem]=useState('');
  const [category_name,setCategoryName]=useState("Select Category");
  const [stem_weightage,setStemWeightage]=useState("Select Weightage");
  const [semantictext,setSemanticText]=useState('');
  let inputerror=useRef({stemError:"",categoryError:"",weightageError:"",optionsError:"",semanticError:""});
  const handleSemanticInput=(val)=>{
    setSemanticText(val);
  }
  const updateQuestionType=()=>{
      if(questionType=='close ended')
      {
        setQuestionType('open ended');
        showOptions.current=false;
      }
      else if(questionType=='open ended'){
        setQuestionType('close ended');
        showOptions.current=true;
      }
 
      //console.log("Question type is",questionType.current,"Show option is",showOptions.current);
  }
  const [categories,setCategories]=useState([
    {
      id: "",
      name: ""
    }
  ]);
    const handleShowOption=(optionid)=>{
        for(let i=0;i<Allquestions.length;i++){
            const elem=document.getElementsByClassName((i));
            //console.log("elem to hide are",elem);
            for(var a = 0; a < elem.length; a++) {
      elem[a].style.display='none'; }
    }
    if(openedQuestion.current==optionid){
        const elem=document.getElementsByClassName((optionid));
        for(var i = 0; i < elem.length; i++) {
  elem[i].style.display='none';
 }
 openedQuestion.current=-12;
    }
    else{
    openedQuestion.current=optionid;
        const elem=document.getElementsByClassName((optionid));
      
        for(var i = 0; i < elem.length; i++) {
          
  elem[i].style.display='revert';}
 }
        
        
    
        // if(showstatus=='revert'){
        //     setShowOptions('none');
        // }
        // else if(showstatus=='none'){
        //     setShowOptions('revert');
        // }
    }
     //const logged_user=window.localStorage.getItem("user_Id");
     //console.log("in add user",logged_user);
const logged_user="hammadalibu@gmail.com";
    const [Allquestions,setAllQuestions]=useState([ 
   ]);
   useEffect(()=>{
    getCategories();   
    getUserQuestions();
       
  //   setAllQuestions([ {
  //       id: 1,
  //       question_weight: 50,
  //       username: "Admin",
  //       stem: "How are you",
  //       CategoryName: "Icebreaker",
  //       optionArray: [
  //         {
  //           id: 101,
  //           optionText: "fine",
  //           optionWeightage: "100"
  //         },{
  //           id: 102,
  //           optionText: "Not fine",
  //           optionWeightage: "50"
  //         }
  //       ]
  //     },{
  //       id: 1,
  //       question_weight: 50,
  //       username: "Admin",
  //       stem: "How many years of experience do you have?How many years of experience do you have?How many years of experience do you have?",
  //       CategoryName: "Experience",
  //       optionArray: [
  //         {
  //           id: 101,
  //           optionText: "5 Years",
  //           optionWeightage: "100"
  //         },{
  //           id: 102,
  //           optionText: "4 Years",
  //           optionWeightage: "75"
  //         },{
  //           id: 103,
  //           optionText: "2 Years",
  //           optionWeightage: "50"
  //         }
  //       ]
  //     },{
  //       id: 4,
  //       question_weight: 100,
  //       username: "Admin",
  //       stem: "What is your availability for this job",
  //       CategoryName: "Timing",
  //       optionArray: [
  //         {
  //           id: 101,
  //           optionText: "Morning",
  //           optionWeightage: "75"
  //         },{
  //           id: 102,
  //           optionText: "Evening",
  //           optionWeightage: "75"
  //         },{
  //           id: 103,
  //           optionText: "Both",
  //           optionWeightage: "100"
  //         }
  //       ]
  //     },{
  //       id: 7,
  //       question_weight: 75,
  //       username: "Admin",
  //       stem: "Where are you from",
  //       CategoryName: "Icebreaker",
  //       optionArray: [
  //         {
  //           id: 101,
  //           optionText: "Islamabad",
  //           optionWeightage: "100"
  //         },{
  //           id: 102,
  //           optionText: "Rawalpindi",
  //           optionWeightage: "75"
  //         },{
  //           id: 103,
  //           optionText: "taxila",
  //           optionWeightage: "50"
  //         },{
  //           id: 104,
  //           optionText: "other",
  //           optionWeightage: "25"
  //         }
  //       ]
  //     },{
  //       id: 1,
  //       question_weight: 50,
  //       username: "Admin",
  //       stem: "How are you2",
  //       CategoryName: "Icebreaker",
  //       optionArray: [
  //         {
  //           id: 101,
  //           optionText: "fine",
  //           optionWeightage: "100"
  //         },{
  //           id: 102,
  //           optionText: "Not fine",
  //           optionWeightage: "50"
  //         }
  //       ]
  //     },{
  //       id: 1,
  //       question_weight: 50,
  //       username: "Admin",
  //       stem: "How are you3",
  //       CategoryName: "Icebreaker",
  //       optionArray: [
  //         {
  //           id: 101,
  //           optionText: "fine",
  //           optionWeightage: "100"
  //         },{
  //           id: 102,
  //           optionText: "Not fine",
  //           optionWeightage: "50"
  //         }
  //       ]
  //     },
  //  ]);
  //  setCategories([
  //   {
  //     id: "1",
  //     name: "ICebreaker"
  //   },{
  //       id: "2",
  //       name: "Experience"
  //     },{
  //       id: "3",
  //       name: "Position"
  //     },{
  //       id: "4",
  //       name: "Environment"
  //     },{
  //       id: "5",
  //       name: "Timing"
  //     },
  // ])
},[]);

  
const getCategories = async () => {
  console.log("get categories called"); 
  const response = await axios.post(`${process.env.REACT_APP_API_KEY}/Category/get/all`).catch((err) => 
  { alert("There has been a server issue. Kindly try again by refreshing the page"); });
   if (response) { 
     console.log("cateogires got are",response.data); 
     setCategories(response.data); 
   }
 
// setCategories([
//   {
//     id: "1",
//     name: "Icebreaker"
//   },{
//       id: "2",
//       name: "Experience"
//     },{
//       id: "3",
//       name: "Position"
//     },{
//       id: "4",
//       name: "Environment"
//     },{
//       id: "5",
//       name: "Timing"
//     },
// ])

};
const getUserQuestions=async()=>{
//   console.log("get user questions called",logged_user);
  const response =await axios.get(`${process.env.REACT_APP_API_KEY}/get/all/question`).then(response => {
    console.log("first response",response.data); 
    if(response.data.Questions.length!==0){
    setAllQuestions(response.data.Questions);
}else{
  console.log("user no questions found retainng none");
}
})
.catch(error => {
    console.error('There was an error!', error);
});
// setAllQuestions([ {
//   id: 1,
//   question_weight: 50,
//   username: "Admin",
//   stem: "How are you",
//   CategoryName: "Icebreaker",
//   optionArray: [
//     {
//       id: 101,
//       optionText: "fine",
//       optionWeightage: "100"
//     },{
//       id: 102,
//       optionText: "Not fine",
//       optionWeightage: "50"
//     }
//   ]
// },{
//   id: 1,
//   question_weight: 50,
//   username: "Admin",
//   stem: "How many years of experience do you have?How many years of experience do you have?How many years of experience do you have?",
//   CategoryName: "Experience",
//   optionArray: [
//     {
//       id: 101,
//       optionText: "5 Years",
//       optionWeightage: "100"
//     },{
//       id: 102,
//       optionText: "4 Years",
//       optionWeightage: "75"
//     },{
//       id: 103,
//       optionText: "2 Years",
//       optionWeightage: "50"
//     }
//   ]
// },{
//   id: 4,
//   question_weight: 100,
//   username: "Admin",
//   stem: "What is your availability for this job",
//   CategoryName: "Timing",
//   optionArray: [
//     {
//       id: 101,
//       optionText: "Morning",
//       optionWeightage: "75"
//     },{
//       id: 102,
//       optionText: "Evening",
//       optionWeightage: "75"
//     },{
//       id: 103,
//       optionText: "Both",
//       optionWeightage: "100"
//     }
//   ]
// },{
//   id: 7,
//   question_weight: 75,
//   username: "Admin",
//   stem: "Where are you from",
//   CategoryName: "Icebreaker",
//   optionArray: [
//     {
//       id: 101,
//       optionText: "Islamabad",
//       optionWeightage: "100"
//     },{
//       id: 102,
//       optionText: "Rawalpindi",
//       optionWeightage: "75"
//     },{
//       id: 103,
//       optionText: "taxila",
//       optionWeightage: "50"
//     },{
//       id: 104,
//       optionText: "other",
//       optionWeightage: "25"
//     }
//   ]
// },{
//   id: 1,
//   question_weight: 50,
//   username: "Admin",
//   stem: "How are you2",
//   CategoryName: "Icebreaker",
//   optionArray: [
//     {
//       id: 101,
//       optionText: "fine",
//       optionWeightage: "100"
//     },{
//       id: 102,
//       optionText: "Not fine",
//       optionWeightage: "50"
//     }
//   ]
// },{
//   id: 1,
//   question_weight: 50,
//   username: "Admin",
//   stem: "How are you3",
//   CategoryName: "Icebreaker",
//   optionArray: [
//     {
//       id: 101,
//       optionText: "fine",
//       optionWeightage: "100"
//     },{
//       id: 102,
//       optionText: "Not fine",
//       optionWeightage: "50"
//     }
//   ]
// },
// ]);
};
   const [optionList,setoptionList]=useState([{id:1,optionText: '',optionWeightage: '25'},{id:2,optionText: '',optionWeightage: '25'}]);
   //const [optionIndex,setOptionIndex]=useState([{optioncount:0}]);
   const handleOptionChange = (name,val, index) => 
    {
      const list = [...optionList];
      list[index][name] = val;
      setoptionList(list);
    };
    const handleRemoveClick = index => 
    {
//       const optindex=[...optionIndex];
//       optionIndex.map((anOption)=>{
//       if(anOption.optioncount==index){
// optindex.splice(index,1);
// setOptionIndex(optindex);}
// else{console.log("option index not deleted",index)}
// });

        const list = [...optionList];
      list.splice(index, 1);
      setoptionList(list);

    };
const checkErrors=()=>{
  let errorcount=0;
  inputerror.current={stemError:"",categoryError:"",weightageError:"",optionsError:"",semanticError:""};
if(stem.length==0){
  inputerror.current.stemError=" Question Text Is Empty ";
  errorcount=1;
}
if(category_name=="Select Category"){
  inputerror.current.categoryError=" Cateogry Not Selected ";
  errorcount=1;
}
if(stem_weightage=="Select Weightage"){
  inputerror.current.weightageError=" Question Weightage not selected ";
  errorcount=1;
}
if(questionType=='close ended'){
optionList.map((option)=>{
  if(option.optionText.length==0){
    inputerror.current.optionsError=" Option text is empty ";
    errorcount=1;
  }
});
}
if(questionType=='open ended'){
  if(category_name!=='Icebreaker'){
    if(semantictext.length==0){
  inputerror.current.semanticError=" The expected answer of the question is empty ";
    errorcount=1;}}
}
//inputerror=inputerror+"";
if(errorcount==0){
  return false;
}
else{
  return true;
}
}
  // handle click event of the Add button
    const handleAddClick = (id) => 
    {
      var count=Math.ceil(Math.random()*99999999);
    setoptionList([...optionList, {id:count, optionText: '', optionWeightage: '25' }]);
    };
    const handleaddquestion=async()=>{
      const res=checkErrors();
      if(res==false){
        setShowA(false);
        const question={
       
          stem:stem,
          question_weight:stem_weightage,
          CategoryName:category_name,
  user_id:0,
  
  //is_openended:openended,
  optionArray:[],
        }
      let openended,passed_optionList;
      if(questionType=='open ended'){
        openended=true;
        console.log("semantic array is",semantictext);
        if(category_name!=='Icebreaker'){
        question.optionArray=[{id:1,optionText:semantictext,optionWeightage:0}];
        console.log("passing normal open ended",passed_optionList);
      }else{
        question.optionArray=[]
        }
      }
      else{
        openended=false;
        question.optionArray=optionList;
      }
     
     // if(question.is_openended==true){question.optionArray=[{}]}else{question.optionArray=passed_optionList;}
      //send question to api 
      console.log("question is",question);
      
      const response = await axios.post(`${process.env.REACT_APP_API_KEY}/add/user/question`, question).catch((err) => 
      {
        console.log("Error: ", err);
      });
      if (response)  {
        console.log("reponse by post question is",response.data);
        getUserQuestions();
        //resetting
      setStem('');
      setCategoryName("Select Category");
      setStemWeightage("Select Weightage");
      setSemanticText('');
      console.log("After clearing",semantictext);
      setoptionList([{id:1,optionText: '',optionWeightage: '25'},{id:2,optionText: '',optionWeightage: '25'}]);
      inputerror.current={stemError:"",categoryError:"",weightageError:"",optionsError:"",semanticError:""};
      }
      console.log("data is",question);
    
    }
      else{
        setShowA(true);
       // console.log(inputerror.current);
      }
    }
    const handleActionbutton=async(id)=>{
      const response =await axios.post(`${process.env.REACT_APP_API_KEY}/Question/User/delete?question_id=${id}`).then(response => {
        console.log("first response",response.data); 
       getUserQuestions();
    })
    .catch(error => {
        console.error('There was an error in delete api call!', error);
    });
    };
  return (
    <div className='add-parentcontainer'>
       
        <div className='add-tablecontainer'>
<div className='addquestion-form'>
    <h2>Add Question</h2>

   
    <InputGroup>
    <InputGroup.Text>Question</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" value={stem} placeholder='Write Your Question Here' 
    className='addquestion-text'onChange={(e)=>{setStem(e.target.value)}}/>
  </InputGroup>
 <div className='question-dropdowns'>
  <DropdownButton id="dropdown-item-button" title={category_name} onSelect={e=>setCategoryName(e)}>
      {categories.map((category)=>{
          return(
<Dropdown.Item as="button" eventKey={category.name}>{category.name}</Dropdown.Item>
          )
      })}
</DropdownButton>
<DropdownButton id="dropdown-item-button" title={stem_weightage}  onSelect={e=>setStemWeightage(e)}>
<Dropdown.Item  eventKey={25}>25</Dropdown.Item>
<Dropdown.Item  eventKey={50}>50</Dropdown.Item>
<Dropdown.Item  eventKey={75}>75</Dropdown.Item>
<Dropdown.Item  eventKey={100}>100</Dropdown.Item>   
</DropdownButton>
</div><div className='add-question-type'>
    <h5>Close ended</h5>
<label class="switch">
  <input type="checkbox" onClick={(e)=>{updateQuestionType()}}/>
  <span class="slider round"></span>
</label><h5>Open ended</h5>
</div>

{questionType=='close ended' &&
  <div className='optionsarea'>
        <h4>Options</h4><br/>
        <ul>
            {optionList.map((T_option,i)=>(
                <li> <div className='anaddoption'>
                   <input  type="text" placeholder="Enter option here" name="optionText"   value={T_option.optionText} 
                      onChange={e=> handleOptionChange(e.target.name,e.target.value,i)} required className="Addquestioninputfield"/><br/> 
                     
                     <DropdownButton id="dropdown-basic-button" title={T_option.optionWeightage}  name="optionWeightage"
                value={T_option.optionWeightage}  onSelect={e => handleOptionChange("optionWeightage",e, i)} required className="newquestionweightage">
                          <Dropdown.Item eventKey="25">25</Dropdown.Item>
                          <Dropdown.Item eventKey="50">50</Dropdown.Item>
                          <Dropdown.Item eventKey="75">75</Dropdown.Item>
                          <Dropdown.Item eventKey="100">100</Dropdown.Item>
                          
                      </DropdownButton>
                     
                     <div className="add-btn-box">
                     {optionList.length !== 2 && <button
                      className="add-optionremoveButton"
                      onClick={() => handleRemoveClick(i)}>-</button>}
                        {optionList.length - 1 === i && <button className="add-optionaddbutton"
                        onClick={()=>handleAddClick(i)}>+</button>}
                    </div>
                </div></li>
            ))}</ul>
                </div>}
                
{questionType=='open ended' && <div> {category_name !== 'Icebreaker'?(
  <div className='optionsarea'>
<h4>Semantic Text</h4><br/>
<InputGroup>
    <InputGroup.Text>Answer</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" value={semantictext} placeholder='Write Your Answer Here' 
    className='openended-input'onChange={(e)=>{handleSemanticInput(e.target.value)}}/>
  </InputGroup>
 </div> ):(console.log("Icebreaker question is selected with open ended type"))}
  </div>
}
    <button className='question-add-button' onClick={()=>{handleaddquestion()}}>ADD</button>
    <Toast show={showA} onClose={toggleShowA} className='toast1' position='bottom-center'  delay={3000} autohide >
          <Toast.Header>
            {/* <img 
              src="" 
              className="rounded me-2"
              alt="Notification"
            /> */}
            <strong className="me-auto">Message</strong>
            <small>now</small>
          </Toast.Header>
          <Toast.Body>{inputerror.current.stemError}{inputerror.current.stemError.length!==0 && <br/>}
          {inputerror.current.categoryError}{inputerror.current.categoryError.length!==0 && <br/>}
          {inputerror.current.weightageError}{inputerror.current.weightageError.length!==0 && <br/>}
          {inputerror.current.optionsError}{inputerror.current.optionsError.length!==0 && <br/>}
          {inputerror.current.semanticError}{inputerror.current.semanticError.length!==0 && <br/>}
          </Toast.Body>
        </Toast>
</div>
            <h2 className='add-tabletitle'>Questions</h2>
            <div className='add-table'>
            {Allquestions.length!==0?(
            <table className='add-interviews'>
          <thead>
            <tr>
              <th>S/No</th>
              <th className='stemtd'>Question</th>
              <th> Category</th>
              <th>Weight </th>
              <th>Options</th>
              <th>Action</th>
            </tr>
          </thead>
         
          <tbody>
         
          {Allquestions.map((question,index) => {
           const { stem, CategoryName, question_weight, optionArray } = question ;
        //    count.current=count.current+1;
        //    console.log("ct",count.current);
           return (
               <>
              <tr key={index+1}  className='questionrow'>
                <td onClick={()=>{handleShowOption(index)}}>{index+1}</td>
                 <td onClick={()=>{handleShowOption(index)}} className='stemtd'>{stem.length<60 ? (stem):(stem.slice(0,60)+"...")}</td>
                 <td onClick={()=>{handleShowOption(index)}}>{CategoryName}</td>
                 <td onClick={()=>{handleShowOption(index)}}>{question_weight}</td>
                 <td onClick={()=>{handleShowOption(index)}}>{optionArray.length}</td> 
                 <td><button className='delete-action-button' onClick={()=>{handleActionbutton(question.id)}}>Delete</button></td>
              </tr>
            
            {/* <th className='optionhead'></th>
              <th className='optionhead'>option</th>
              <th className='optionweighthead'> weight</th>
              <th className='optionhead'></th>
               <th className='optionhead'></th> */}
              {optionArray.map((option,optionindex)=>{return(
  <tr key={(index+1)+"."+(optionindex+1)} style={{display:'none'}} className={index} id="options">
    <td className='option'>{(index+1)+"."+(optionindex+1)}</td>
    <th className='optionhead'>Option</th><td className='option'>{option.optionText}</td>
    <th className='optionweighthead'> Weight</th> <td className='option'>{option.optionWeightage}</td>
    
   
  </tr>
  
  )})}
              </>
           
)        })
}
          </tbody>
        </table>):(<div className='empty-questions'>No questions exist</div>)}
        </div>
        </div>
    </div>
  )
}
