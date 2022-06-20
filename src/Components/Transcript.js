import React,{useRef,useEffect,useState} from 'react'
import './Transcript.css';
import botImage from '../Assets/mainmenu/botimage.jpg';
import axios from 'axios';
import candidateImage from '../Assets/mainmenu/candidate1.PNG';
export default function Transcript() {
  const candidate_Id=window.localStorage.getItem("checkresultcandidate_id");
  const candidate_Email=window.localStorage.getItem("checkresultcandidate_email");
  const candidate_Name=window.localStorage.getItem("checkresultcandidate_name");
  const candidate_Score=window.localStorage.getItem("checkresultcandidate_score");
    const results=useRef([]);
    const [start,setStart]=useState(false);

const getTranscript=async()=>{
  const response =await axios.post(`${process.env.REACT_APP_API_KEY}/get/transcript/?id=${candidate_Id}`).then(response => {
    console.log("first response",response.data); 
  results.current=response.data.ResponseList;
  let last_time;
  console.log("results1",results.current);
  results.current.map((result)=>{
    console.log("current time",result);
    last_time=result.response_time;
  });
   console.log("last message is",last_time);
  const bymsg={question_stem:"Thank you for your time. The interview has been finished. It was great to interview you. Goodbye till next time, Olaf",
  response:"null",response_time:last_time};
  let tempresult=results.current;
  console.log("temp result is",tempresult);
  tempresult.push(bymsg);
  results.current=tempresult;
  setStart(true);
  console.log("useEffect caleed",start);
})
.catch(error => {
    console.error('There was an error!', error);
});
};
    useEffect(() => {
     getTranscript();
    //  results.current=[{stem:"What is your name",response:"hammad",response_Time:"2:21"},
    //   {stem:"What is your name",response:"hammad",response_Time:"2:21"},
    //   {stem:"What is your name",response:"hammad",response_Time:"2:21"},
    //   {stem:"What is your name",response:"hammad",response_Time:"2:21"},
    //   {stem:"What is your name",response:"hammad",response_Time:"2:21"}
    // ];
   
    },[]);

  return ( <>
    {start &&
     
    <div className='candidate-transcript'>
        <h3 className='candidate-check'>Candidate Data</h3>
      
    <div className='transcript-candidateData'>
        
       <div className='transcript-candidateDatablock'> <h6>Name: </h6> <div>{candidate_Name}</div></div>
       <div className='transcript-candidateDatablock'><h6>Email: </h6><div>{candidate_Email}</div></div>
       <div className='transcript-candidateDatablock'> <h6>Marks: </h6><div>{candidate_Score+"%"}</div></div>
    </div>
        <h3 className='candidate-check'>Chat Transcript</h3>
        <div className='transcript-conversation'>
        {results.current.map((result)=>(
            <>
            <div className='question_Stem'><img className='response-botimg' src={botImage} alt="botimg"/><span>{result.response_time}</span>
         {result.question_stem!=="Thank you for your time. The interview has been finished. It was great to interview you. Goodbye till next time, Olaf"?(
 <p>  {result.question_stem}</p> 
         ):( <p className='trans-bye-chat'>  {result.question_stem}</p> )
         
         }   </div>

            {result.question_stem!=="Thank you for your time. The interview has been finished. It was great to interview you. Goodbye till next time, Olaf" && <div className='question_Response'>
                <img className='response-candidatebotimg' src={candidateImage} alt="botimg"/><span>{result.response_time}</span>
                <p> {result.question_response}</p>
                </div>}
            </>
            
        ))}</div>
       
        <h5>End of conversation</h5>
    </div>}</> 
  )
}
