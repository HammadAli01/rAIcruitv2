
import './Interviewconducting.css';
import Chat from './Chat';
import Jobinformation from './JobInformation'
import React,{useState,useEffect} from 'react';
import Mainnavbar from '../../Components/navbars/MainmenuNavbar';
import axios from "axios";
//import Allinterviews from './Allinterviews'
//import SendEmail from './SendEmail';
function ConductInterview(props) {
  const [time_finished,setTimeFinished]=useState(false);
 
  const interview_id= window.localStorage.getItem('interview_Id');
    const candidate_email=window.localStorage.getItem('candidate_Email');
  const [start,setStart]=useState(false);
  const [count,setCount]=useState(0);
  const [interviewdata_to_send,setInterviewDataToSend]=useState();
  const [rules_to_send,setInterviewRules]=useState();
  const [questions_to_send,setInterviewQuestions]=useState();
  
  useEffect(() => {
    window.localStorage.setItem("store_Interview",JSON.stringify(0));
    const gotInterviewdata={
      title:"Job for Nursing",generationDate:"12/03/2022",startDate:"04/10/2022",endDate:"04/14/2022",duration:"30000",type:"Full Time",position:"Management",
      jobDescription:"We require registered nurse having valid license from Pakistan nursing council for medical ward. The person should have doneBS nursing(generic). 3-year general nursing diploma from generic institution Should have minimum 2 years experience.1 year specialty in any field of nursing.Age relaxation is subjected to be approve by the selection committee"   
    };
    setInterviewDataToSend(gotInterviewdata);
    const got_questions=[{
      id:1,
      stem: "Where are you from?",
      option:[{optionText:"Islamabad"}
      ,{
       optionText:"Rawalpindi"},{
       optionText:"Taxila"},{
      optionText:"Other"}]
      },{
        id:2,
        stem: "Are you willing to relocate to Islamabad for this job?",
        option:[{optionText:"Yes"}
        ,{
          optionText:"No"
        }]
     },{
      id:3,
      stem: "From which institution are you graduated?",
      option:[]
   },{
    id:4,
    stem: "Company office is in h-8 Islamabad. Do you have reliable means of transportation for this location?",
    option:[{optionText:"Yes"}
    ,{
      optionText:"No"}]
    },{
      id:5,
      stem: "Are you graduated?",
      option:[{optionText:"Yes"}
      ,{
        optionText:"No"}]
      },{
        id:6,
        stem: "Do you have experience in nursing?",
        option:[{optionText:"Yes"}
        ,{
         optionText:"No"}]
        },{
          id:7,
          stem: "How many years of experience do you have?",
          option:[{optionText:"1 year"}
          ,{
            optionText:"2 year"},{
              optionText:"3 year"},{
               optionText:"Other"}]
          },{
            id:8,
            stem: "What are your salary expectations?",
            option:[{optionText:"50K to 60K"}
            ,{
              optionText:"Below 50K"},{
               optionText:"Below 70K"},{
                  optionText:"other"}]
            },{
              id:9,
              stem: "What is your availability for this job? ",
              option:[{optionText:"Morning Shift"}
              ,{
                optionText:"Night Shift"}]
              },{
                id:-1,
                stem: "21Thank you for your time. The interview has been finished. It was great to interview you. Goodbye till next time, Olaf",
                option:[]
             },{
              id:-12,
              stem: "22Thank you for your time. The interview has been finished. It was great to interview you. Goodbye till next time, Olaf",
              option:[]
           }];
    let questions_convert=[];
             got_questions.map((a_question)=>{
               let temp_question={ id:'',
                text: '',
                options:[]
              };
               temp_question.id=a_question.id;
               temp_question.options=a_question.option;
               temp_question.text=a_question.stem;
               console.log("current question options",a_question.option);
               questions_convert.push(temp_question);
             });
             console.log("converted questions are",questions_convert);
    const got_rules=[
     
      {source_id:1,target_id:2,option_content:"Rawalpindi"},
      {source_id:1,target_id:2,option_content:"Taxila"},
      {source_id:1,target_id:2,option_content:"Other"},
      // {source_id:1,target_id:4,option_content:"Islamabad,node_Id:"dndNode_0""},
      {source_id:2,target_id:4,option_content:"Yes"},
      {source_id:2,target_id:4,option_content:"No"},
      {source_id:4,target_id:5,option_content:"Yes"},
      {source_id:4,target_id:5,option_content:"No"},
  
      {source_id:5,target_id:3,option_content:"Yes"},
      {source_id:5,target_id:6,option_content:"No"},
      {source_id:3,target_id:6,option_content:""},
  
      {source_id:6,target_id:7,option_content:"Yes"},
      {source_id:6,target_id:8,option_content:"No"},
      {source_id:7,target_id:8,option_content:"1 year"},
      {source_id:7,target_id:8,option_content:"2 year"},
      {source_id:7,target_id:8,option_content:"3 year"},
      {source_id:7,target_id:8,option_content:"Other"},
      {source_id:8,target_id:9,option_content:"50K to 60K"},
      {source_id:8,target_id:9,option_content:"Below 50K"},
      {source_id:8,target_id:9,option_content:"Below 70K"},
      {source_id:8,target_id:9,option_content:"other"},
      
      {source_id:9,target_id:-1,option_content:"Morning Shift"},
      {source_id:9,target_id:-1,option_content:"Night Shift"},
      {source_id:-1,target_id:-12,option_content:""}
    ];
    setInterviewRules(got_rules);
    setInterviewQuestions(questions_convert);
   // console.log("start status before true is",start);
     setCount(1);

    //store in localhost user data if response is correct  checkData( params.get('interviewid'),params.get('userid'));
  },[]);
 
  useEffect(()=>{
    if(interviewdata_to_send!==undefined){
    console.log("inter",interviewdata_to_send,"rules",rules_to_send,"questions",questions_to_send);
    setStart(true);
  }
    else{
      
      setStart(false);
    }
  },[count]);
 
  const getInterviewData=async()=>{
//api for getting interview questions and rules;
const response = await axios.post(`https://raicruittest.herokuapp.com/start/interview?email=${candidate_email}&interview_id=${interview_id}`,
).catch((err) => 
   {
     console.log("Error: ", err);
   });
   if (response)  {
     //if reponse.attribute==true save data to storage and other data in it too
     console.log("reponse by post question is",response.data.Question_List,"rules are",response.data.Rules);
    
    //for getting interview data
const interview_Data_Response =await axios.get(`https://raicruittest.herokuapp.com/Interview/get/by/id?id=${interview_id}`).then(interview_Data_Response => {
  console.log("Interview Data response",interview_Data_Response.data); 
  const gotInterviewdata=interview_Data_Response.data;
  
  const gotInterviewdata1={
    title:gotInterviewdata.title,generationDate:gotInterviewdata.generationDate,startDate:gotInterviewdata.startDate,
    endDate:gotInterviewdata.endDate,duration:gotInterviewdata.duration,type:gotInterviewdata.type,position:gotInterviewdata.position,
    jobDescription:gotInterviewdata.job_description
  };
  setInterviewDataToSend(gotInterviewdata1);
setQuestionsAndRules(response.data.Question_List,response.data.Rules);
})
.catch(error => {
  console.error('There was an error!', error);
});
 }

    
  }

  const setQuestionsAndRules=(initial_questions,initial_rules)=>{
    console.log("in function val are",initial_questions,initial_rules);
    let questions_convert=[];
    initial_questions.map((a_question)=>{
      let temp_question={ id:'',
       text: '',
       options:[]
     };
      temp_question.id=a_question.id;
      temp_question.options=a_question.option;
      temp_question.text=a_question.stem;
      //console.log("current question options",a_question.option);
      questions_convert.push(temp_question);
    });
    setInterviewQuestions(questions_convert);
    setInterviewRules(initial_rules);
    setCount(1);
  };

  return (
     
        <div className="App"> 
        {start==true && <><Mainnavbar side={false}/>
      <div className='jobinformation'>
        <Jobinformation interviewData={interviewdata_to_send} setTimeFinished={setTimeFinished}  interviewId={interview_id}
        userEmail={candidate_email} candidateName={props.candidateName} candidateImageURL={props.candidateImageURL}/>
      </div>
      <div className='chatui'>
        <Chat interview_rules={rules_to_send} interview_questions={questions_to_send} 
        interviewId={interview_id}
        userEmail={candidate_email}
        time_finished={time_finished}
        candidateName={props.candidateName} candidateImageURL={props.candidateImageURL}
        />
      </div></>}
     
    </div> 
  );
}
export default ConductInterview;
{/* <div className="App">
      <div className='jobinformation'>
        <Jobinformation/>
      </div>
      <div className='chatui'>
        <Chat/>
      </div>
     
    </div>
    
    window load get user id and interview id 
    send data {user_id: '' ,interview_id:''}
    getresponse {status: true,interviewdetail:interview details object/dictionary here,rules: {},questions:{}}
    when one response is got from candidate a var store in storage checked on leave and before send 
    after conduct page leave or timeout response is post to api

    window.localStorage.getItem('interview_id')
    window.localStorage.getItem('candidate_email') http://localhost:5000/interview?interviewid=123&useremail=522
    small found variable useremail intergiew id sent to api response got true 
     id:1,
      text: "Where are you from?",
      options:[{id:1,optionText:"Islamabad",Weightage:"50"}
      ,{
        id:2,optionText:"Rawalpindi",Weightage:"75"},{
          id:3,optionText:"Taxila",Weightage:"75"},{
            id:4,optionText:"Other",Weightage:"75"}]
      }
*/}