
import './Interviewconducting.css';
import ConductInterview from './ConductInterview';
import React,{useState,useEffect} from 'react';
import canidateimg from './DSC.png';
import GoogleLogin from "react-google-login";
import MainmenuNavbar from '../../Components/navbars/MainmenuNavbar';
import axios from "axios";
function Interviewconducting() {
  
  const [chatUrl,setChatUrl]=useState(window.location.href);
  const [candidateData,setCandidateData]=useState({interview_id:'',candidate_email:''});
  const [candidateName,setCandidatename]=useState("candidate");
  const [candidateImageURL,setcandidateImageURL]=useState(canidateimg);
  const [start,setStart]=useState(false);
 const [checkBoxState,setCheckBoxState]=useState(false);
  
  window.onload = () => {
    let params = (new URL(chatUrl)).searchParams;
    //console.log("chat url is",params.get('interviewid'));
    candidateData.interview_id=params.get('interviewid');
    candidateData.candidate_email=params.get('useremail');
    window.localStorage.setItem('interview_Id',candidateData.interview_id);
    window.localStorage.setItem('candidate_Email',candidateData.candidate_email);
    //setStart(true);
    

    // checkData();
//window.localStorage.setItem("hasResponse",JSON.stringify(false));
    };
 

 const checkData=async()=>{
   console.log("candidateData",candidateData);
   //api for checking interview and candidate
   const response = await axios.get(`https://raicruittest.herokuapp.com/check/applicant/email?interview_id=${candidateData.interview_id}&email=${candidateData.candidate_email}`,
   ).catch((err) => 
      {
        console.log("Error: ", err);
      });
      if (response)  {
        //if reponse.attribute==true save data to storage and other data in it too
        //console.log("reponse by post question is",response);
        if(response.data.found==true){
      //     console.log("candidate data set is", localStorage.setItem("myinterview_id",JSON.stringify(candidateData.interview_id)));
      //  localStorage.setItem('candidate_email', JSON.stringify(candidateData.candidate_email));
     
      setStart(true);
      }
      else{
        alert("PAGE NOT FOUND");
        //call for not found page
      }
    }
          
  }
  const responseGoogle = (response) => {
    console.log("Interview started in app js,succcessfull login");
    setCandidatename(response.profileObj.name);
    //image failed request check here
    setcandidateImageURL(response.profileObj.imageUrl);
    setStart(true);
    //console.log(candidateImageURL);
    
      }
      const response1negGoogle=(response)=>{
        console.log("Login unsuccessful. Kindly try again");
      }
 const handleCheckBoxClick=()=>{
  setCheckBoxState(!checkBoxState);
 }
  return (
        <div className="App"> 
       
      {start==true?(<ConductInterview candidateName={candidateName} candidateImageURL={candidateImageURL}/>):(
      <div>
         <MainmenuNavbar/>
         <p className='interview-instruction'>
         <h4>Instructions</h4>
           
            <ul>
  <li>Questions has multiple options beneath it, canidate have to click you selected option it will be submitted as your answer</li>
  <li>Questions having no options are to be answered in the field</li>
  <li>Incase of question having option canidate wont be able to write in input field</li>
  <li>Incase of leaving the interview will end and you wont be able to give it again</li>
  <li>Kindly login with google to start your interview</li>
  <li>Questions has multiple options beneath it, canidate have to click you selected option it will be submitted as your answer</li>
  <li>Questions having no options are to be answered in the field</li>
  <li>Incase of question having option canidate wont be able to write in input field</li>
  <li>Incase of leaving the interview will end and you wont be able to give it again</li>
  <li>Kindly login with google to start your interview</li>
  <li>Questions has multiple options beneath it, canidate have to click you selected option it will be submitted as your answer</li>
  <li>Questions having no options are to be answered in the field</li>
  <li>Incase of question having option canidate wont be able to write in input field</li>
 
  
  
 
</ul>
            </p>
      <input type="checkbox" onChange={handleCheckBoxClick} id="conducting-checkbox" className="conducting-checkbox"/><label for="conducting-checkbox" className='conducting-checkbox-label'>I have read the intructions carefully</label>
      {checkBoxState==true && <GoogleLogin
                 className='loginbutton'
                  clientId="1069438428430-b3jg29j7u57shhphc1rduthvbg7m7tck.apps.googleusercontent.com"
                  buttonText="Login With Google"
                  onSuccess={responseGoogle}
                  onFailure={response1negGoogle}
                  cookiePolicy={'single_host_origin'}
              /> }
              <div className='faq-area'>
              <h4>FAQ's</h4>
<div className='faq-question-answer'>
  <h6>Question: How to join the interview</h6>
  <p>Answer: You can join it by first reading the intruction and then clicking the checkmark after that you will login with you google account and your interview will start</p>
  <h6>Question: How to join the interview</h6>
  <p>Answer: You can join it by first reading the intruction and then clicking the checkmark after that you will login with you google account and your interview will start</p>
  <h6>Question: How to join the interview</h6>
  <p>Answer: You can join it by first reading the intruction and then clicking the checkmark after that you will login with you google account and your interview will start</p>
  <h6>Question: How to join the interview</h6>
  <p>Answer: You can join it by first reading the intruction and then clicking the checkmark after that you will login with you google account and your interview will start</p>
  <h6>Question: How to join the interview</h6>
  <p>Answer: You can join it by first reading the intruction and then clicking the checkmark after that you will login with you google account and your interview will start</p>
  <h6>Question: How to join the interview</h6>
  <p>Answer: You can join it by first reading the intruction and then clicking the checkmark after that you will login with you google account and your interview will start</p>
  <h6>Question: How to join the interview</h6>
  <p>Answer: You can join it by first reading the intruction and then clicking the checkmark after that you will login with you google account and your interview will start</p>
  <h6>Question: How to join the interview</h6>
  <p>Answer: You can join it by first reading the intruction and then clicking the checkmark after that you will login with you google account and your interview will start</p>
  <h6>Question: How to join the interview</h6>
  <p>Answer: You can join it by first reading the intruction and then clicking the checkmark after that you will login with you google account and your interview will start</p>
  <h6>Question: How to join the interview</h6>
  <p>Answer: You can join it by first reading the intruction and then clicking the checkmark after that you will login with you google account and your interview will start</p>
  <h6>Question: How to join the interview</h6>
  <p>Answer: You can join it by first reading the intruction and then clicking the checkmark after that you will login with you google account and your interview will start</p>
  <h6>Question: How to join the interview</h6>
  <p>Answer: You can join it by first reading the intruction and then clicking the checkmark after that you will login with you google account and your interview will start</p>

</div>
              

              </div>
      </div>)} 
    </div> 
  );
}
export default Interviewconducting;
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