import React,{useState,useEffect} from 'react'
import './Interviewlist.css'
import  axios  from 'axios'
export default function Interviewlist(props) {
    const logged_user=window.localStorage.getItem('user_email');
   const [descriptions,setDescription]=useState([]);
   const getAllInterviews=async()=>{
    console.log("Calling API for interview",logged_user);
    const response =await axios.get(`${process.env.REACT_APP_API_KEY}/Interview/get/all?email=${logged_user}`).then(response => {
        console.log("first response by get all intervies of user",response.data); 
        setDescription(response.data);
    })
    .catch(error => {
        console.error('There was an errorin get all users!', error);
    });
   };
   useEffect(()=>{
getAllInterviews();
   },[]);
  const handledescriptionclicked=(decription)=>{
    const temp_description={};
    temp_description.id=decription.id;
    temp_description.title=decription.title;
    temp_description.generationDate=decription.generationDate;
    temp_description.startDate=decription.startDate;
    temp_description.endDate=decription.endDate;
    temp_description.duration=decription.duration;
    temp_description.type=decription.type;
    temp_description.position=decription.position;
    temp_description.jobDescription=decription.job_description;  
    props.setselectedJobDescription(temp_description);
  }
    // const descriptions=[{
    //     id:2,
    //     title:"Senior Software Engineer",generationDate:"02/11/2021",startDate:"02/15/2021",endDate:"12/17/2021",duration:"05:30",type:"Full Time",position:"Developer",
    //     jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code."},
    //    ,{id:3,title:"Senior React Developer",generationDate:"24/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",duration:"01:20",type:"Part Time",position:"Designer,Developer",
    //     jobDescription:" Prepares and installs solutions by determining and designing system specifications, standards, and programmingImproves operations by conducting systems analysis and recommending changes in policies and procedures. Obtains and licenses software by obtaining required information from vendors, recommending purchases, and testing and approving products.Protects operations by keeping information confidential.Provides information by collecting, analyzing, and summarizing development and service issues. Accomplishes engineering and organization mission by completing related results as needed." 
    // },{id:4,
    //     title:"Junior React Developer",generationDate:"25/02/2022",startDate:"22/04/2021",endDate:"22/06/2021",duration:"06:10",type:"Full Time",position:"Game developing,UI/UX developer",
    //     jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. " 
    // },{id:5,
    //     title:"Senior testing Developer",generationDate:"02/11/2021",startDate:"10/04/2021",endDate:"12/04/2021",duration:"01:20",type:"Full Time",position:"Management of developers",
    //     jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code."   },{
    //         id:8, title:"Junior Python Developer",generationDate:"14/02/2022",startDate:"10/06/2021",endDate:"12/06/2021",duration:"Islamabad",type:"Part Time",position:"Management",
    //     jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. " 
    // },{id:6,
    //     title:"Senior React Developer",generationDate:"05/03/2022",startDate:"18/04/2021",endDate:"18/04/2021",duration:"00:30",type:"Full Time",position:"Management",
    //     jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code."   },{
    //         id:7, title:"Junior React Developer",generationDate:"10/04/2022",startDate:"12/04/2021",endDate:"12/06/2021",duration:":00:45",type:"Part Time",position:"Management",
    //     jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    // }
    // ]
    //<img src={userProfileImg} alt="user profile"></img>&nbsp;
  return (
    <>
<div className='joblist'>
    <div className='usertag'>Interviews</div>
    <div className="alladds">
{descriptions.map((description)=>{
    return(
        <div className='jobadd' tabIndex="0" onDoubleClick={(e)=>{
        console.log("selected add is",description);
        handledescriptionclicked(description);
       
        }}>
            <div className='jobdate'>{description.generationDate}</div>
        <div className='jobdescription'>{description.job_description}</div>
       </div>
    )
})}</div>
    </div>
    
  </>)
}
