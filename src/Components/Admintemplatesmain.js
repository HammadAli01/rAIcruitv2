import React,{useState,useEffect,useCallback} from 'react'
import './Admintemplatesmain.css';
import review1 from '../Assets/mainmenu/nurse.jpg';
import review2 from '../Assets/mainmenu/teaching.png';
import review3 from '../Assets/mainmenu/software.jpg';
import {useNavigate} from 'react-router-dom';
export default function Admintemplatesmain() {
    const navigation = useNavigate();
    const [allTemplates,setTemplates]=useState();
    useEffect(()=>{
      //API FOR GETTING TEMPLATES
setTemplates([{
  id:1,template_Name:"nurse",template_Flow:[{"id":"0","type":"input","data":{"label":"Start"},"position":{"x":250,"y":15}},{"id":"-1","type":"output","data":{"label":"End"},"position":{"x":250,"y":450}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_0","type":"CustomNode","position":{"x":276.703125,"y":186},"data":{"label":"How was your day ","id":"dndnode_0"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_1","type":"CustomNode","position":{"x":257.703125,"y":288},"data":{"label":"dummy question ","id":"dndnode_1"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_2","type":"CustomNode","position":{"x":169.703125,"y":371},"data":{"label":"How are you feeling","id":"dndnode_2"}},{"source":"0","sourceHandle":null,"target":"dndnode_0","targetHandle":"dndnode_0.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-0null-dndnode_0dndnode_0.top"},{"source":"dndnode_0","sourceHandle":"dndnode_0.bottom","target":"dndnode_1","targetHandle":"dndnode_1.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_1dndnode_1.top"},{"source":"dndnode_1","sourceHandle":"dndnode_1.bottom","target":"dndnode_2","targetHandle":"dndnode_2.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_1dndnode_1.bottom-dndnode_2dndnode_2.top"},{"source":"dndnode_2","sourceHandle":"dndnode_2.bottom","target":"-1","targetHandle":null,"arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_2dndnode_2.bottom--1null"}],template_Image:review1},
  {
      id:2,template_Name:"teaching",template_Flow:[{"id":"0","type":"input","data":{"label":"Start"},"position":{"x":250,"y":15}},{"id":"-1","type":"output","data":{"label":"End"},"position":{"x":250,"y":450}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_0","type":"CustomNode","position":{"x":276.703125,"y":186},"data":{"label":"How was your day ","id":"dndnode_0"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_1","type":"CustomNode","position":{"x":257.703125,"y":288},"data":{"label":"dummy question ","id":"dndnode_1"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_2","type":"CustomNode","position":{"x":169.703125,"y":371},"data":{"label":"How are you feeling","id":"dndnode_2"}},{"source":"0","sourceHandle":null,"target":"dndnode_0","targetHandle":"dndnode_0.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-0null-dndnode_0dndnode_0.top"},{"source":"dndnode_0","sourceHandle":"dndnode_0.bottom","target":"dndnode_1","targetHandle":"dndnode_1.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_1dndnode_1.top"},{"source":"dndnode_1","sourceHandle":"dndnode_1.bottom","target":"dndnode_2","targetHandle":"dndnode_2.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_1dndnode_1.bottom-dndnode_2dndnode_2.top"},{"source":"dndnode_2","sourceHandle":"dndnode_2.bottom","target":"-1","targetHandle":null,"arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_2dndnode_2.bottom--1null"}],template_Image:review2},
      {
          id:3,template_Name:"software Engineer",template_Flow:[{"id":"0","type":"input","data":{"label":"Start"},"position":{"x":250,"y":15}},{"id":"-1","type":"output","data":{"label":"End"},"position":{"x":250,"y":450}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_0","type":"CustomNode","position":{"x":276.703125,"y":186},"data":{"label":"How was your day ","id":"dndnode_0"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_1","type":"CustomNode","position":{"x":257.703125,"y":288},"data":{"label":"dummy question ","id":"dndnode_1"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_2","type":"CustomNode","position":{"x":169.703125,"y":371},"data":{"label":"How are you feeling","id":"dndnode_2"}},{"source":"0","sourceHandle":null,"target":"dndnode_0","targetHandle":"dndnode_0.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-0null-dndnode_0dndnode_0.top"},{"source":"dndnode_0","sourceHandle":"dndnode_0.bottom","target":"dndnode_1","targetHandle":"dndnode_1.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_1dndnode_1.top"},{"source":"dndnode_1","sourceHandle":"dndnode_1.bottom","target":"dndnode_2","targetHandle":"dndnode_2.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_1dndnode_1.bottom-dndnode_2dndnode_2.top"},{"source":"dndnode_2","sourceHandle":"dndnode_2.bottom","target":"-1","targetHandle":null,"arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_2dndnode_2.bottom--1null"}],template_Image:review3}, {
              id:3,template_Name:"software Engineer",template_Flow:[{"id":"0","type":"input","data":{"label":"Start"},"position":{"x":250,"y":15}},{"id":"-1","type":"output","data":{"label":"End"},"position":{"x":250,"y":450}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_0","type":"CustomNode","position":{"x":276.703125,"y":186},"data":{"label":"How was your day ","id":"dndnode_0"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_1","type":"CustomNode","position":{"x":257.703125,"y":288},"data":{"label":"dummy question ","id":"dndnode_1"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_2","type":"CustomNode","position":{"x":169.703125,"y":371},"data":{"label":"How are you feeling","id":"dndnode_2"}},{"source":"0","sourceHandle":null,"target":"dndnode_0","targetHandle":"dndnode_0.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-0null-dndnode_0dndnode_0.top"},{"source":"dndnode_0","sourceHandle":"dndnode_0.bottom","target":"dndnode_1","targetHandle":"dndnode_1.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_1dndnode_1.top"},{"source":"dndnode_1","sourceHandle":"dndnode_1.bottom","target":"dndnode_2","targetHandle":"dndnode_2.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_1dndnode_1.bottom-dndnode_2dndnode_2.top"},{"source":"dndnode_2","sourceHandle":"dndnode_2.bottom","target":"-1","targetHandle":null,"arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_2dndnode_2.bottom--1null"}],template_Image:review3}
])
    },[]);
    const handlePageSubmit = useCallback(() => navigation('/Admintemplateview', {replace: true}), [navigation]);
    const handleTemplateClick=(template)=>{
        window.localStorage.setItem('current_Selected_Template', JSON.stringify(template));
        handlePageSubmit();
    }
    const handleDeleteTemplate=(template)=>{
      //api for template delete
console.log("template to be deleted is",template);
    }
    const handleNewTemplate=useCallback(() => navigation('/Admindesigntemplate', {replace: true}), [navigation]);
  return (
    <div className='Admintemplatesmain'>
        <h2>Templates</h2>
   
        <button onClick={()=>handleNewTemplate()} className="new-button" style={{verticalAlign:'middle'}}><span>Make</span></button>
        {/* <button  className='newTemplateButton'>Make New Template</button> */}
        <div className='alltemplatescontainer'>
{allTemplates.length!==0?(allTemplates.map((template)=>{
    return(
    <div className='admin-template-container' onClick={(e)=>{handleTemplateClick(template)}}>
    <img src={template.template_Image} ></img>
    <h5>{template.template_Name}</h5>
   <button onClick={()=>handleDeleteTemplate(template)}>DELETE</button> 
   </div>)
})):(<div className='empty-data'>No Templates available</div>)

}</div>
</div>
  )
}
