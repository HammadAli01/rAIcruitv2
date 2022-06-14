
import React,{useState,useRef,useCallback} from 'react'
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
const [elements, setElements] = useState([{"id":"0","type":"input","data":{"label":"Start"},"position":{"x":250,"y":15}},{"id":"-1","type":"output","data":{"label":"End"},"position":{"x":250,"y":450}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_0","type":"CustomNode","position":{"x":276.703125,"y":186},"data":{"label":"How was your day ","id":"dndnode_0"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_1","type":"CustomNode","position":{"x":257.703125,"y":288},"data":{"label":"dummy question ","id":"dndnode_1"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_2","type":"CustomNode","position":{"x":169.703125,"y":371},"data":{"label":"How are you feeling","id":"dndnode_2"}},{"source":"0","sourceHandle":null,"target":"dndnode_0","targetHandle":"dndnode_0.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-0null-dndnode_0dndnode_0.top"},{"source":"dndnode_0","sourceHandle":"dndnode_0.bottom","target":"dndnode_1","targetHandle":"dndnode_1.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_1dndnode_1.top"},{"source":"dndnode_1","sourceHandle":"dndnode_1.bottom","target":"dndnode_2","targetHandle":"dndnode_2.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_1dndnode_1.bottom-dndnode_2dndnode_2.top"},{"source":"dndnode_2","sourceHandle":"dndnode_2.bottom","target":"-1","targetHandle":null,"arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_2dndnode_2.bottom--1null"}]);
const onElementsRemove = (elementsToRemove) =>
{
alert("No updation is allowed");    
}
const onLoad = (_reactFlowInstance) =>
setReactFlowInstance(_reactFlowInstance);
const [interview,setInterview]=useState(JSON.parse(window.localStorage.getItem('current_Selected_Template')));
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
