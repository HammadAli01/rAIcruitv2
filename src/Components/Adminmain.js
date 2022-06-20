import React,{useState,useEffect} from 'react'
import './Adminmain.css';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  } from 'chart.js';
  
  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  );
export default function Adminmain() {
 const [recruiterData,setRecruiterData]=useState([]);
 const [data,setData]=useState({});


 const options = {
  
  maintainAspectRatio: true,
  responsive: true,
  scales: {
    
    xAxes: [
      {
        gridLines: {
          display: true,
          drawBorder: true,
          borderDash: [3, 3],
          zeroLineColor: "blue"
        },
        categoryPercentage: 0.7,
        barPercentage: 0.9,
        ticks: {
          beginAtZero: true
        }
      }
    ],
    yAxes: [
      {
        display: false,
        gridLines: {
          display: false,
          zeroLineColor: "transparent"
        },
        ticks: {
          beginAtZero: true
        }
      }
    ]},elements: {
      point:{
          radius: 3,
          hitRadius: 30
      }
  }
};
const getRecruiterData=async()=>{
  setRecruiterData([{recruiterName:"hammad1",no_Of_Interviews:"2"},{recruiterName:"hammad",no_Of_Interviews:"20"},
  {recruiterName:"hammad2",no_Of_Interviews:"5"},
  {recruiterName:"hammad3",no_Of_Interviews:"7"},
  {recruiterName:"hammad4",no_Of_Interviews:"3"},
  {recruiterName:"hammad5",no_Of_Interviews:"9"},
  {recruiterName:"hammad6",no_Of_Interviews:"15"},
  {recruiterName:"hammad7",no_Of_Interviews:"20"},
  {recruiterName:"hammad8",no_Of_Interviews:"8"},
  {recruiterName:"hammad9",no_Of_Interviews:"10"},
  {recruiterName:"zahid",no_Of_Interviews:"0"},]);
};

 useEffect(()=>{
 getRecruiterData();
  
  },[]);
  useEffect(()=>{
    if(recruiterData.length!==0){
    let graphrecruitersnames=[],graphrecruitersinterviews=[];
    recruiterData.map((recruiter) => graphrecruitersnames.push(recruiter.recruiterName));
    recruiterData.map((recruiter) => graphrecruitersinterviews.push(recruiter.no_Of_Interviews));
    setData( {
      labels: graphrecruitersnames,
      datasets: [
        {
          label: "Recruiter and iterviews",
          data: graphrecruitersinterviews,
          fill: false,
          backgroundColor: "transparent",
          borderColor: "#3f6ad8",
         
        }
      ]
    });
    console.log("current data is",data);}
  },[recruiterData]);
  return (
    <div className='adminmain'>
      <h3 className='adminmain-header'>Admin Dashboard</h3>
    <div className='recruiter-main-box1'>
      <p><h4>Total recruiters</h4><h6>Including inactive recruiters</h6></p>
    <h1>19</h1>
    </div>
    <div className='recruiter-main-box2'> 
    <p><h4>Total interviews</h4><h6>Including inactive interviews</h6></p>
    <h1>119</h1></div>
    <div className='recruiter-main-box3'> 
    <p><h4>Interviews conducted</h4><h6>With candidates</h6></p>
    <h1>2219</h1></div>
    <div className='dashboard-chart-area'>
        {Object.keys(data).length!==0?(data.labels.length!==0?(<Line data={data}   options={options}  className="adminlinechart"/>):(console.log("graph data lenbht is empty"))):(<div className='adminmain-recruiterzero'>No recruiters data to show</div>)}
        </div>
    </div>
  )
}
