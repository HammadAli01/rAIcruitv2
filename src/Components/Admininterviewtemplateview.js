
import React,{useState,useRef,useCallback,useEffect} from 'react'
import './Admininterviewtemplateview.css';
import {Form,Container,Row,Col,Button,Modal,InputGroup,FormControl,Dropdown, DropdownButton,Accordion} from 'react-bootstrap'
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
export default function Admininterviewtemplateview() {
    const navigation = useNavigate();
const handlePageSubmit = useCallback(() => navigation('/interviewdetails', {replace: true}), [navigation]);
const reactFlowWrapper = useRef(null);
const [reactFlowInstance, setReactFlowInstance] = useState(null);
const [elements, setElements] = useState([]);
useEffect(()=>{
  const template= JSON.parse(window.localStorage.getItem('current_Selected_Template'))
 setElements(template.template_Flow);
 console.log("Elements got are",template.template_Flow);
 },[]);
 useEffect(()=>{
console.log("Element after updation are",elements);
 },[elements]);
const onElementsRemove = (elementsToRemove) =>
{
alert("No updation is allowed");    
}
const onLoad = (_reactFlowInstance) =>
setReactFlowInstance(_reactFlowInstance);
const [interview,setInterview]=useState((window.localStorage.getItem('current_Selected_Template')));
// useEffect(()=>{
//     setInterview(JSON.parse(window.localStorage.getItem('current_Selected_Template')));
//     console.log(JSON.parse(window.localStorage.getItem('current_Selected_Template')));
// },[]);
const handleuseFlow=()=>{
  window.localStorage.setItem('current_template_Id',interview.id);
  window.localStorage.setItem("Is_Template",1);
  handlePageSubmit();
}
const graphStyles = { width: "77%", height: "570px" };
  return (
    <div className='view-interviewTemplatemainmenu-container'>
        <h2>{interview.template_Name} Interview Template</h2> 
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
           
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            
            style={graphStyles}
            
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
          {/* <Button onClick={() => {
            
           handleuseFlow();
            
            
            
            }
            }//left left:"600px",bottom: "5px",top:"535px",
            className='react-flow__controls'
            style={{left:"10px",bottom: "0px",paddingLeft:"20px",paddingRight:"20px",
            top:"515px",position:"relative"}}

            >Use Flow</Button> */}
          </ReactFlow>
       </div> </ReactFlowProvider>
               </div>
  )
}
