import React,{useState,useEffect,useRef,useCallback} from 'react'
import './Checkresultcandidate.css'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import { Dropdown,DropdownButton,Button } from 'react-bootstrap';

export default function Checkresultinterviews() {
    const [sortTitle,setSorttitle]=useState("Select sort");
    const navigation = useNavigate();
    const current_interview_id= window.localStorage.getItem("checkresultinterview");
    const handlePageSubmit = useCallback(() => navigation('/Interviewcandidateresultview', {replace: true}), [navigation]);
    const currentCandidatesLength=useRef(10);
const [AllCandidates,setAllCandidates]=useState([]);

    const [current_candidates,setCandidates]=useState([]);
    const getAllCandidates=async()=>{
      const response =await axios.get(`${process.env.REACT_APP_API_KEY}/check/interview/result?interview_id=${current_interview_id}`).then(response => {
        console.log("first response",response.data); 
        setAllCandidates(response.data);
  
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
    };
useEffect(()=>{
  getAllCandidates();
//setAllCandidates([{id:1,email:"hammadalibu@gmail.com",interview_scor:"30.123123"},{id:1,email:"hammadalibu@gmail.com",interview_scor:"80.9087"},{id:1,email:"hammadalibu@gmail.com",interview_scor:"80.11"}]);

},[]);
useEffect(()=>{
  setCandidates(AllCandidates.slice(0,9));
},[AllCandidates]);
    const fetchMoreData = () => {
        currentCandidatesLength.current=currentCandidatesLength.current+2;
        setTimeout(() => {
            setCandidates(AllCandidates.slice(0,(currentCandidatesLength.current)));
        }, 1000);
      };
      const handleSortButton=()=>{
        if(AllCandidates.length!==0){
        let tempcandidates=[...current_candidates];
        //title sorting
        if(sortTitle!=="Select sort")
        {
            if(sortTitle=="Lowest")
            {
                tempcandidates=tempcandidates.sort((a, b) => {
              if (parseInt(a.interview_scor) < parseInt(b.interview_scor))
                  return -1;
              if (parseInt(a.interview_scor) > parseInt(b.interview_scor))
                  return 1;
              return 0;
          });
        }
        else if(sortTitle=="Highest"){
            tempcandidates=tempcandidates.sort((a, b) => {
              if (parseInt(a.interview_scor) > parseInt(b.interview_scor))
                  return -1;
              if (parseInt(a.interview_scor) < parseInt(b.interview_scor))
                  return 1;
              return 0;
          });
        }}
        setCandidates(tempcandidates);
        sortAllcandidates();
        console.log("result is",tempcandidates,current_candidates);}
      }
      const sortAllcandidates=()=>{
        let tempAllCandidates=[...AllCandidates];
        if(sortTitle!=="Select sort")
        {
            if(sortTitle=="Lowest")
            {
                tempAllCandidates=tempAllCandidates.sort((a, b) => {
              if (parseInt(a.interview_scor) < parseInt(b.interview_scor))
                  return -1;
              if (parseInt(a.interview_scor) > parseInt(b.interview_scor))
                  return 1;
              return 0;
          });
        }
        else if(sortTitle=="Highest"){
            tempAllCandidates=tempAllCandidates.sort((a, b) => {
              if (parseInt(a.interview_scor) > parseInt(b.interview_scor))
                  return -1;
              if (parseInt(a.interview_scor) < parseInt(b.interview_scor))
                  return 1;
              return 0;
          });
        }}
        setAllCandidates(tempAllCandidates);
      }
      const handleviewActionButton=(id,email,name,score)=>{
        window.localStorage.setItem("checkresultcandidate_id",id);
        window.localStorage.setItem("checkresultcandidate_email",email);
        window.localStorage.setItem("checkresultcandidate_name",name);
        window.localStorage.setItem("checkresultcandidate_score",score.toFixed(2));
handlePageSubmit();
      };
  return (
    <div><div className='candidate-check-tablecontainer'>
        <h3 className='candidate-check'>Sort Candidates</h3>
        <div className='candidate-check-sortContainer'>
        <div className='candidate-Asorter'>
        
        <DropdownButton id="dropdown-basic-button" title={sortTitle} onSelect={(e)=>{setSorttitle(e)}}>
        <Dropdown.Item eventKey="Lowest">Lowest</Dropdown.Item>
        <Dropdown.Item eventKey="Highest">Highest</Dropdown.Item>
        </DropdownButton>
        </div> 
        <button onClick={()=>handleSortButton()}>sort</button>
        </div>
<h3 className='candidate-check-tabletitle candidate-check'>Interview Candidates</h3>
{AllCandidates.length!==0?(
         <div className='candidate-check-table'>
         <InfiniteScroll
          dataLength={current_candidates.length}
          next={()=>fetchMoreData()}
          hasMore={true}
        //   loader={<h4>...</h4>}
        > 
            <table className='candidate-check-interviews'>
          <thead>
         
            <tr>
              <th>S/No</th>
              <th>Email</th>
              <th>Score</th>
              <th>Action</th>
              
            </tr>
          </thead>
          
          <tbody>
         
          {current_candidates.map((candidate,index) => {
          // const { title, generationDate, startDate, endDate,type } = interview ;
        //    count.current=count.current+1;
        //    console.log("ct",count.current);
           return (
              <tr key={index+1} className='checkres-row'>
                <td>{index+1}</td>
                 <td>{candidate.email}</td>
                 <td>{(candidate.interview_scor.toFixed(2))+"%"}</td>
                 <td><button className='candidate-result-action-button' onClick={()=>{handleviewActionButton(candidate.id,candidate.email,candidate.applicant_name,candidate.interview_scor)}}>View</button></td>
                 
              </tr>
           )
        })} 
          </tbody>
        </table></InfiniteScroll>
        </div>):(<div className='empty-candidates'>No candidate has given interview yet</div>)}
    </div>
     </div>
  )
}
