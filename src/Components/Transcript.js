import React,{useState,useEffect} from 'react'
import './Transcript.css';
import botImage from '../Assets/mainmenu/botimage.jpg';
import candidateImage from '../Assets/mainmenu/candidate1.PNG';
import InfiniteScroll from "react-infinite-scroll-component";
export default function Transcript() {
const [candidateData,setCandidateData]=useState({email:"hammadalibu@gmail.com",name:"Hammad Ali",marks:"60%"});
    const [results,setResults]=useState([{stem:"What is your name",response:"hammad",response_Time:"2:21"},
    {stem:"What is your name2",response:"anser1",response_Time:"2:21"},
    {stem:"What is your name3",response:"anser3",response_Time:"3:21"},
    {stem:"What is your name4",response:"answer5",response_Time:"2:21"},
    {stem:"What is your name5",response:"hammad",response_Time:"2:21"},
    {stem:"What is your name6",response:"hammad",response_Time:"2:21"},
    {stem:"What is your name7",response:"hammad",response_Time:"2:21"},
    {stem:"What is your name8",response:"hammad",response_Time:"2:21"},
    {stem:"What is your name9",response:"hammad",response_Time:"2:21"},
    {stem:"What is your name11",response:"hammad",response_Time:"2:21"},
    {stem:"What is your name12",response:"hammad",response_Time:"2:21"},
    {stem:"What is your name13",response:"hammad",response_Time:"2:21"},
    {stem:"What is your name15",response:"hammad",response_Time:"2:21"},
    {stem:"What is your name1",response:"hammad",response_Time:"2:21"},
    {stem:"What is your nameasd",response:"hammad",response_Time:"2:21"},
    {stem:"What is your nameff",response:"hammad",response_Time:"2:24"},
    {stem:"What is your namedd",response:"hammad",response_Time:"2:21"},
    {stem:"What is your namess",response:"hammad",response_Time:"2:21"},
    {stem:"What is your namess",response:"hammad",response_Time:"2:21"},
    {stem:"What is your nameaa",response:"hammad hammad hammad hammad hammad hammad hammadhammadhammadhammadhammadhammad hammad hammadhammadhammadhammadhammad hammad hammad hammad hammad hammad hammad hammad v v hammad hammad ",response_Time:"2:23"},
    {stem:"What is your namezzz",response:"z",response_Time:"2:21"},
]);
  return (
    <div className='candidate-transcript'>
        <h3>Candidate Data</h3>
    <div className='transcript-candidateData'>
        
       <div className='transcript-candidateDatablock'> <h6>Name: </h6> <div>{candidateData.name}</div></div>
       <div className='transcript-candidateDatablock'><h6>Email: </h6><div>{candidateData.email}</div></div>
       <div className='transcript-candidateDatablock'> <h6>Marks: </h6><div>{candidateData.marks}</div></div>
    </div>
        <h3>Conversation Transcript</h3>
        <div className='transcript-conversation'>
        {results.map((result)=>(
            <>
            <div className='question_Stem'><img className='response-botimg' src={botImage} alt="botimg"/><span>{result.response_Time}</span>
         
          <p>  {result.stem}</p> 
            </div>
            <div className='question_Response'>
                <img className='response-candidatebotimg' src={candidateImage} alt="botimg"/><span>{result.response_Time}</span>
                <p> {result.response}</p>
                </div>
            </>
            
        ))}</div>
        <h5>End of conversation</h5>
    </div>
  )
}
