import React,{useState,useRef,useCallback,useEffect} from 'react'
import './Templatemainmenu.css';
import loadinggif from '../Assets/mainmenu/gif1.gif';
import  axios  from 'axios'
import {useNavigate} from 'react-router-dom';
export default function Templatemainmenu() {
  const [shoudlStart,setStart]=useState(false);
    const navigation = useNavigate();
    const [allTemplates,setTemplates]=useState([]);
    const getAllTemplates=async()=>{
        console.log("calling getting all templates");
        const response = await axios.get(`${process.env.REACT_APP_API_KEY}/get/templates/all`).catch((err) => 
        { console.log("Error:", err); });
         if (response) {
          setStart(true); 
           console.log("All templates got are",response.data); 
           setTemplates(response.data); 
         }
       }
    useEffect(()=>{
        getAllTemplates();
      //API FOR GETTING TEMPLATES
// setTemplates([{
//   id:1,template_Name:"nurse",template_Flow:[{"id":"0","type":"input","data":{"label":"Start"},"position":{"x":250,"y":15}},{"id":"-1","type":"output","data":{"label":"End"},"position":{"x":250,"y":450}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_0","type":"CustomNode","position":{"x":276.703125,"y":186},"data":{"label":"How was your day ","id":"dndnode_0"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_1","type":"CustomNode","position":{"x":257.703125,"y":288},"data":{"label":"dummy question ","id":"dndnode_1"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_2","type":"CustomNode","position":{"x":169.703125,"y":371},"data":{"label":"How are you feeling","id":"dndnode_2"}},{"source":"0","sourceHandle":null,"target":"dndnode_0","targetHandle":"dndnode_0.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-0null-dndnode_0dndnode_0.top"},{"source":"dndnode_0","sourceHandle":"dndnode_0.bottom","target":"dndnode_1","targetHandle":"dndnode_1.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_1dndnode_1.top"},{"source":"dndnode_1","sourceHandle":"dndnode_1.bottom","target":"dndnode_2","targetHandle":"dndnode_2.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_1dndnode_1.bottom-dndnode_2dndnode_2.top"},{"source":"dndnode_2","sourceHandle":"dndnode_2.bottom","target":"-1","targetHandle":null,"arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_2dndnode_2.bottom--1null"}],template_Image:review1,template_Rules:[
//     {
//         "edge_id": "reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_1dndnode_1.top",
//         "source": "1",
//         "target": "2",
//         "selectedValue": "option1",
//         "isUser": false
//     },
//     {
//         "edge_id": "reactflow__edge-dndnode_2dndnode_2.bottom--1null",
//         "source": "111",
//         "target": "-1",
//         "selectedValue": "",
//         "isUser": false
//     },
//     {
//         "edge_id": "reactflow__edge-0null-dndnode_0dndnode_0.top",
//         "source": "0",
//         "target": "1",
//         "selectedValue": "",
//         "isUser": false
//     },
//     {
//         "edge_id": "reactflow__edge-dndnode_1dndnode_1.bottom--1null",
//         "source": "2",
//         "target": "-1",
//         "selectedValue": "option1",
//         "isUser": false
//     },
//     {
//         "edge_id": "reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_2dndnode_2.top",
//         "source": "1",
//         "target": "111",
//         "selectedValue": "option2",
//         "isUser": false
//     }
// ]},
//   {
//       id:2,template_Name:"teaching",template_Flow:[{"id":"0","type":"input","data":{"label":"Start"},"position":{"x":250,"y":15}},{"id":"-1","type":"output","data":{"label":"End"},"position":{"x":250,"y":450}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_0","type":"CustomNode","position":{"x":276.703125,"y":186},"data":{"label":"How was your day ","id":"dndnode_0"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_1","type":"CustomNode","position":{"x":257.703125,"y":288},"data":{"label":"dummy question ","id":"dndnode_1"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_2","type":"CustomNode","position":{"x":169.703125,"y":371},"data":{"label":"How are you feeling","id":"dndnode_2"}},{"source":"0","sourceHandle":null,"target":"dndnode_0","targetHandle":"dndnode_0.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-0null-dndnode_0dndnode_0.top"},{"source":"dndnode_0","sourceHandle":"dndnode_0.bottom","target":"dndnode_1","targetHandle":"dndnode_1.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_1dndnode_1.top"},{"source":"dndnode_1","sourceHandle":"dndnode_1.bottom","target":"dndnode_2","targetHandle":"dndnode_2.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_1dndnode_1.bottom-dndnode_2dndnode_2.top"},{"source":"dndnode_2","sourceHandle":"dndnode_2.bottom","target":"-1","targetHandle":null,"arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_2dndnode_2.bottom--1null"}],template_Image:review2,template_Rules:[
//         {
//             "edge_id": "reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_1dndnode_1.top",
//             "source": "1",
//             "target": "2",
//             "selectedValue": "option1",
//             "isUser": false
//         },
//         {
//             "edge_id": "reactflow__edge-dndnode_2dndnode_2.bottom--1null",
//             "source": "111",
//             "target": "-1",
//             "selectedValue": "",
//             "isUser": false
//         },
//         {
//             "edge_id": "reactflow__edge-0null-dndnode_0dndnode_0.top",
//             "source": "0",
//             "target": "1",
//             "selectedValue": "",
//             "isUser": false
//         },
//         {
//             "edge_id": "reactflow__edge-dndnode_1dndnode_1.bottom--1null",
//             "source": "2",
//             "target": "-1",
//             "selectedValue": "option1",
//             "isUser": false
//         },
//         {
//             "edge_id": "reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_2dndnode_2.top",
//             "source": "1",
//             "target": "111",
//             "selectedValue": "option2",
//             "isUser": false
//         }
//     ]},
//       {
//           id:3,template_Name:"software Engineer",template_Flow:[{"id":"0","type":"input","data":{"label":"Start"},"position":{"x":250,"y":15}},{"id":"-1","type":"output","data":{"label":"End"},"position":{"x":250,"y":450}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_0","type":"CustomNode","position":{"x":276.703125,"y":186},"data":{"label":"How was your day ","id":"dndnode_0"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_1","type":"CustomNode","position":{"x":257.703125,"y":288},"data":{"label":"dummy question ","id":"dndnode_1"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_2","type":"CustomNode","position":{"x":169.703125,"y":371},"data":{"label":"How are you feeling","id":"dndnode_2"}},{"source":"0","sourceHandle":null,"target":"dndnode_0","targetHandle":"dndnode_0.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-0null-dndnode_0dndnode_0.top"},{"source":"dndnode_0","sourceHandle":"dndnode_0.bottom","target":"dndnode_1","targetHandle":"dndnode_1.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_1dndnode_1.top"},{"source":"dndnode_1","sourceHandle":"dndnode_1.bottom","target":"dndnode_2","targetHandle":"dndnode_2.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_1dndnode_1.bottom-dndnode_2dndnode_2.top"},{"source":"dndnode_2","sourceHandle":"dndnode_2.bottom","target":"-1","targetHandle":null,"arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_2dndnode_2.bottom--1null"}],template_Image:review3,template_Rules:[
//             {
//                 "edge_id": "reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_1dndnode_1.top",
//                 "source": "1",
//                 "target": "2",
//                 "selectedValue": "option1",
//                 "isUser": false
//             },
//             {
//                 "edge_id": "reactflow__edge-dndnode_2dndnode_2.bottom--1null",
//                 "source": "111",
//                 "target": "-1",
//                 "selectedValue": "",
//                 "isUser": false
//             },
//             {
//                 "edge_id": "reactflow__edge-0null-dndnode_0dndnode_0.top",
//                 "source": "0",
//                 "target": "1",
//                 "selectedValue": "",
//                 "isUser": false
//             },
//             {
//                 "edge_id": "reactflow__edge-dndnode_1dndnode_1.bottom--1null",
//                 "source": "2",
//                 "target": "-1",
//                 "selectedValue": "option1",
//                 "isUser": false
//             },
//             {
//                 "edge_id": "reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_2dndnode_2.top",
//                 "source": "1",
//                 "target": "111",
//                 "selectedValue": "option2",
//                 "isUser": false
//             }
//         ]}, {
//               id:3,template_Name:"software Engineer",template_Flow:[{"id":"0","type":"input","data":{"label":"Start"},"position":{"x":250,"y":15}},{"id":"-1","type":"output","data":{"label":"End"},"position":{"x":250,"y":450}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_0","type":"CustomNode","position":{"x":276.703125,"y":186},"data":{"label":"How was your day ","id":"dndnode_0"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_1","type":"CustomNode","position":{"x":257.703125,"y":288},"data":{"label":"dummy question ","id":"dndnode_1"}},{"className":"react-flow__node-default react-flow__node-default.selectable","id":"dndnode_2","type":"CustomNode","position":{"x":169.703125,"y":371},"data":{"label":"How are you feeling","id":"dndnode_2"}},{"source":"0","sourceHandle":null,"target":"dndnode_0","targetHandle":"dndnode_0.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-0null-dndnode_0dndnode_0.top"},{"source":"dndnode_0","sourceHandle":"dndnode_0.bottom","target":"dndnode_1","targetHandle":"dndnode_1.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_1dndnode_1.top"},{"source":"dndnode_1","sourceHandle":"dndnode_1.bottom","target":"dndnode_2","targetHandle":"dndnode_2.top","arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_1dndnode_1.bottom-dndnode_2dndnode_2.top"},{"source":"dndnode_2","sourceHandle":"dndnode_2.bottom","target":"-1","targetHandle":null,"arrowHeadType":"arrow","type":"customedge","id":"reactflow__edge-dndnode_2dndnode_2.bottom--1null"}],template_Image:review3,template_Rules:[
//                 {
//                     "edge_id": "reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_1dndnode_1.top",
//                     "source": "1",
//                     "target": "2",
//                     "selectedValue": "option1",
//                     "isUser": false
//                 },
//                 {
//                     "edge_id": "reactflow__edge-dndnode_2dndnode_2.bottom--1null",
//                     "source": "111",
//                     "target": "-1",
//                     "selectedValue": "",
//                     "isUser": false
//                 },
//                 {
//                     "edge_id": "reactflow__edge-0null-dndnode_0dndnode_0.top",
//                     "source": "0",
//                     "target": "1",
//                     "selectedValue": "",
//                     "isUser": false
//                 },
//                 {
//                     "edge_id": "reactflow__edge-dndnode_1dndnode_1.bottom--1null",
//                     "source": "2",
//                     "target": "-1",
//                     "selectedValue": "option1",
//                     "isUser": false
//                 },
//                 {
//                     "edge_id": "reactflow__edge-dndnode_0dndnode_0.bottom-dndnode_2dndnode_2.top",
//                     "source": "1",
//                     "target": "111",
//                     "selectedValue": "option2",
//                     "isUser": false
//                 }
//             ]}
// ]);

    },[]);
    const handlePageSubmit = useCallback(() => navigation('/template', {replace: true}), [navigation]);
    const handleTemplateClick=(template)=>{
        window.localStorage.setItem('current_Selected_Template', JSON.stringify(template));
        handlePageSubmit();
    }
  return (
    <div className='alltemplates-container'>
<h2>Templates</h2>
{shoudlStart==true?( <>
{allTemplates.length!==0?(allTemplates.map((template)=>{
    return(
    <div className='template-container' onClick={(e)=>{handleTemplateClick(template)}}>
    <img src={template.template_Image} className='template-image'></img>
    <h5>{template.template_Name}</h5>
    </div>)
})
):(<div className='empty-data'>No templates available</div>)
}</>):(<div className='loadingdiv-admintemplate'><h4>Loading..</h4><img className='template-loading-image' src={loadinggif}>
</img ></div>)}
    </div>
  )
}
