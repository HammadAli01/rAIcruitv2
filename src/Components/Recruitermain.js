import React,{useEffect,useState} from 'react'
import './Recruitermain.css'
import { Dropdown,DropdownButton,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Line } from "react-chartjs-2";
import Axios from 'axios';
export default function Recruitermain() {
    window.localStorage.setItem("Is_Template",0);
    const logged_user=window.localStorage.getItem('user_Id');
  
//const logged_user="hammadalibu@gmail.com";
    const [jobTitle,setJobtitle]=useState("Interview Order");
    const [jobType,setJobtype]=useState("Job Type");
    const [gOrder,setGOrder]=useState("Generation Order");
    const [interviews,setInterviews]=useState([{title:"aa", generationDate:"2/4/2021", startDate:"3/4/2021", endDate:"4/4/2021",type:"Full Time"},{title:"aa", generationDate:"2/4/2021", startDate:"3/4/2021", endDate:"4/4/2021",type:"Full Time"}]);
    const [recruiterData,setRecruiterData]=useState([]);
    const [data,setData]=useState({});
    const getRecruiterData=async()=>{
        setRecruiterData([{interviewName:"hammad1",no_Of_Candidates:"2"},
        {interviewName:"hammad2",no_Of_Candidates:"5"},{interviewName:"Senior software Engineer",no_Of_Candidates:"10"},
        {interviewName:"HR",no_Of_Candidates:"12"},{interviewName:"Junior software Engineer",no_Of_Candidates:"20"},
        {interviewName:"Manager",no_Of_Candidates:"23"},{interviewName:"Driver",no_Of_Candidates:"30"},
        {interviewName:"Cook",no_Of_Candidates:"122"},{interviewName:"Nurse",no_Of_Candidates:"70"},
        {interviewName:"Cadet",no_Of_Candidates:"200"},{interviewName:"Teaching",no_Of_Candidates:"22"},{interviewName:"hammad2",no_Of_Candidates:"5"},{interviewName:"Senior software Engineer",no_Of_Candidates:"10"},
        {interviewName:"HR",no_Of_Candidates:"12"},{interviewName:"Junior software Engineer",no_Of_Candidates:"20"},
        {interviewName:"Manager",no_Of_Candidates:"23"},{interviewName:"Driver",no_Of_Candidates:"30"},
        {interviewName:"Cook",no_Of_Candidates:"122"},{interviewName:"Nurse",no_Of_Candidates:"70"},
        {interviewName:"Cadet",no_Of_Candidates:"200"},{interviewName:"Teaching",no_Of_Candidates:"22"}
        ]);
      };
      
       useEffect(()=>{
       getRecruiterData();
        
        },[]);
        useEffect(()=>{
          let graphrecruitersnames=[],graphrecruitersinterviews=[];
          recruiterData.map((recruiter) => graphrecruitersnames.push(recruiter.interviewName));
          recruiterData.map((recruiter) => graphrecruitersinterviews.push(recruiter.no_Of_Candidates));
          setData( {
            labels: graphrecruitersnames,
            datasets: [
              {
                label: false,
                data: graphrecruitersinterviews,
                fill: true,
                backgroundColor: "transparent",
                borderColor: "rgba(75,192,192,1)"
              }
            ]
          });
          console.log("current data is",data);
        },[recruiterData])
    const getInterviewData=async()=>{
       
        const response = await Axios.get(`https://raicruittest.herokuapp.com/Interview/get/all?email=${logged_user}`).then(response => {
            console.log("Dashboard data response",response.data); 
            
            setInterviews(response.data);
       
       })
        .catch(error => {
            console.error('There was an error!', error);
        });
      }
      useEffect(()=> {
           //remove the bbelow comment 
       // getInterviewData();
      },[]);
//     window.addEventListener('load', (event) =>{
// getInterviewData();
        
    
//     });
    
const legend = {
    display: false,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14
    }
  };
  
  const options =  {
    maintainAspectRatio: true,
    responsive: true,
    scales: {
        yAxes:{
            
           
            ticks:{
                beginAtZero: true,
                color: 'black',
                fontSize: 12,
            }
        },
        xAxes: {
           
            ticks:{
                beginAtZero: true,
                color: 'black',
                fontSize: 16,
            }
        },
    }
};
   
  const Sortinterviews=(e)=>{
      e.preventDefault();
      let tempInterviews=[...interviews];
      //title sorting
      if(jobTitle!=="Select Order")
      {
          if(jobTitle=="Ascending")
          {
            tempInterviews=tempInterviews.sort((a, b) => {
            if (a.title < b.title)
                return -1;
            if (a.title > b.title)
                return 1;
            return 0;
        });
      }
      else if(jobTitle=="Descending"){
        tempInterviews=tempInterviews.sort((a, b) => {
            if (a.title > b.title)
                return -1;
            if (a.title < b.title)
                return 1;
            return 0;
        });
      }}
//type sorting
if(jobType!=="Select Type")
{if(jobType=="Full Time"){
    
    tempInterviews=tempInterviews.sort((a, b) => {
        
        if(a.type=="Full Time"){
            if(b.type=="Part Time"){return -1}
        }
        if(a.type=="Part Time"){
            if(b.type=="Full Time"){return 1}
        }
        return 0;
    });
  }
  else if(jobType=="Part Time"){
    tempInterviews=tempInterviews.sort((a, b) => {
        if(a.type=="Full Time"){
            if(b.type=="Part Time"){return 1}
        }
        if(a.type=="Part Time"){
            if(b.type=="Full Time"){return -1}
        }
        return 0;
    });
  }}
  //generated date sorting
  if(gOrder!=="Order By")
  {
      if(gOrder=="New First")
      {
        tempInterviews=tempInterviews.sort((a, b) => {
        if (a.generationDate < b.generationDate)
            return 1;
        if (a.generationDate > b.generationDate)
            return -1;
        return 0;
    });
  }
  else if(gOrder=="Old First"){
    tempInterviews=tempInterviews.sort((a, b) => {
        if (a.generationDate > b.generationDate)
            return 1;
        if (a.generationDate < b.generationDate)
            return -1;
        return 0;
    });
  }}
      setInterviews(tempInterviews);
      console.log("temp are",tempInterviews);
      console.log(interviews);
  }
  return (
    <div className='parentcontainer'>
        <div className='sortcontainer'>z
     
        </div>
        <div className='tablecontainer'>
            <div className='graph1'><h5>Interviews Designed</h5><h6>348</h6></div>
            <div className='graph2'><h5>Interviews Conducted</h5><h6>1300</h6></div>
            <div className='graph3'><h5>Interviews Remaining</h5><h6>48</h6></div>
            <div className='graph4'><h5>Emails Sended To Candidates</h5><h6>1348</h6></div>    
            <div className='recruiterdashboard-graph'>
        {console.log("condition1",Object.keys(data).length!==0)}
       

            {Object.keys(data).length!==0?(data.labels.length!==0?(<Line data={data} legend={legend}
             options={options} className="recruiterlinechart"  height={700} />):(console.log("graph data lenbht is empty"))):(console.log("DATA STILL 0"))}
        
                </div>     
            <div className='sort'>
            <h2 className='sorttitle'>Sorting</h2>
            <div className='Asorter'>
        
        <DropdownButton id="dropdown-basic-button" title={jobTitle} onSelect={(e)=>{setJobtitle(e)}}>
        <Dropdown.Item eventKey="Ascending">Ascending</Dropdown.Item>
        <Dropdown.Item eventKey="Descending">Descending</Dropdown.Item>
        </DropdownButton>
        </div> 
        <div className='Asorter'>
        
        <DropdownButton id="dropdown-basic-button" title={jobType} onSelect={(e)=>{setJobtype(e)}}>
        <Dropdown.Item eventKey="Full Time">Full Time</Dropdown.Item>
        <Dropdown.Item eventKey="Part Time">Part Time</Dropdown.Item>
        </DropdownButton>
        </div>
        
        <div className='Asorter'>
       
        <DropdownButton id="dropdown-basic-button" title={gOrder} onSelect={(e)=>{setGOrder(e)}}>
        <Dropdown.Item eventKey="New First">New First</Dropdown.Item>
        <Dropdown.Item eventKey="Old First">Old First</Dropdown.Item>
        </DropdownButton></div>
        
            <Button className='sortbutton' onClick={(e)=>Sortinterviews(e)}>sort</Button>
            </div>
            <h2 className='tabletitle'>Interviews</h2>
            <div className='table'>
            <table className='interviews'>
          <thead>
            <tr>
              <th>S/No</th>
              <th>Interview title</th>
              <th> Generated</th>
              <th>Start </th>
              <th>End</th>
              <th>Type</th>
              
            </tr>
          </thead>
         
          <tbody>
         
          {interviews.map((interview,index) => {
              console.log("current_interview",interview);
           const { title, generationDate, startDate, endDate,type } = interview ;
        //    count.current=count.current+1;
        //    console.log("ct",count.current);
           return (
              <tr key={index+1}>
                <td>{index+1}</td>
                 <td>{title.slice(0,25)+"..."}</td>
                 <td>{generationDate}</td>
                 <td>{startDate}</td>
                 <td>{endDate}</td> 
                 <td>{type}</td>
                 
              </tr>
           )
        })}
          </tbody>
        </table>
        </div>
        </div>
    </div>
  )
}
/*
[{
        title:"Senior Software Engineer",generationDate:"02/11/2021",startDate:"02/15/2021",endDate:"12/17/2021",location:"Islamabad",type:"Full Time",position:"Developer",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code."},
       {title:"Senior React Developer",generationDate:"24/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Designer,Developer",
        jobDescription:" Prepares and installs solutions by determining and designing system specifications, standards, and programmingImproves operations by conducting systems analysis and recommending changes in policies and procedures. Obtains and licenses software by obtaining required information from vendors, recommending purchases, and testing and approving products.Protects operations by keeping information confidential.Provides information by collecting, analyzing, and summarizing development and service issues. Accomplishes engineering and organization mission by completing related results as needed." 
    },{
        title:"Junior React Developer",generationDate:"25/02/2022",startDate:"22/04/2021",endDate:"22/06/2021",location:"Islamabad",type:"Full Time",position:"Game developing,UI/UX developer",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. " 
    },{
        title:"Senior testing Developer",generationDate:"02/11/2021",startDate:"10/04/2021",endDate:"12/04/2021",location:"Islamabad",type:"Full Time",position:"Management of developers",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code."   },{
        title:"Junior Python Developer",generationDate:"14/02/2022",startDate:"10/06/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Management",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. " 
    },{
        title:"Senior React Developer",generationDate:"05/03/2022",startDate:"18/04/2021",endDate:"18/04/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code."   },{
        title:"Junior React Developer",generationDate:"10/04/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    },{
        title:"Senior Software Engineer",generationDate:"02/11/2021",startDate:"02/15/2021",endDate:"12/17/2021",location:"Islamabad",type:"Full Time",position:"Developer",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code."},
       {title:"Senior React Developer",generationDate:"24/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Designer,Developer",
        jobDescription:" Prepares and installs solutions by determining and designing system specifications, standards, and programmingImproves operations by conducting systems analysis and recommending changes in policies and procedures. Obtains and licenses software by obtaining required information from vendors, recommending purchases, and testing and approving products.Protects operations by keeping information confidential.Provides information by collecting, analyzing, and summarizing development and service issues. Accomplishes engineering and organization mission by completing related results as needed." 
    },{
        title:"Junior React Developer",generationDate:"25/02/2022",startDate:"22/04/2021",endDate:"22/06/2021",location:"Islamabad",type:"Full Time",position:"Game developing,UI/UX developer",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. " 
    },{
        title:"Senior testing Developer",generationDate:"02/11/2021",startDate:"10/04/2021",endDate:"12/04/2021",location:"Islamabad",type:"Full Time",position:"Management of developers",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code."   },{
        title:"Junior Python Developer",generationDate:"14/02/2022",startDate:"10/06/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Management",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. " 
    },{
        title:"Senior React Developer",generationDate:"05/03/2022",startDate:"18/04/2021",endDate:"18/04/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code."   },{
        title:"Junior React Developer",generationDate:"10/04/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    }
    ]
*/