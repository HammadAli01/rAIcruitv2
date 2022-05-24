import React,{useState,useEffect,useRef,useCallback} from 'react'
import './Checkresultcandidate.css'
import {useNavigate} from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import { Dropdown,DropdownButton,Button } from 'react-bootstrap';

export default function Checkresultinterviews() {
    const [sortTitle,setSorttitle]=useState("Select sort");
    const navigation = useNavigate();
    const handlePageSubmit = useCallback(() => navigation('/Interviewcandidateresultview', {replace: true}), [navigation]);
    const currentCandidatesLength=useRef(10);
const [AllCandidates,setAllCandidates]=useState([{id:1,email:"hammadalibu@gmail.com",marks:"80%"},
{id:1,email:"hammadalibu@gmail.com",marks:"80%"},
{id:1,email:"zahidullah@gmail.com",marks:"74%"},
{id:1,email:"hammadalibu@gmail.com",marks:"65%"},
{id:1,email:"hammadalibu@gmail.com",marks:"90%"},
{id:1,email:"hammadalibu@gmail.com",marks:"81%"},
{id:1,email:"hammadalibu@gmail.com",marks:"70%"},
{id:1,email:"hammadalibu@gmail.com",marks:"60%"},
{id:1,email:"hammadalibu@gmail.com",marks:"44%"},
{id:1,email:"hammadalibu@gmail.com",marks:"55%"},
{id:1,email:"hammadalibu@gmail.com",marks:"75%"},
{id:1,email:"hammadalibu@gmail.com",marks:"90%"},
{id:1,email:"hammadalibu@gmail.com",marks:"70%"},
{id:1,email:"hammadalibu@gmail.com",marks:"60%"},
{id:1,email:"hammadalibu@gmail.com",marks:"50%"},
{id:1,email:"hammadalibu@gmail.com",marks:"40%"},]);
    const [current_candidates,setCandidates]=useState(AllCandidates.slice(0,9));
    const fetchMoreData = () => {
        currentCandidatesLength.current=currentCandidatesLength.current+3;
        setTimeout(() => {
            setCandidates(AllCandidates.slice(0,(currentCandidatesLength.current)));
        }, 1000);
      };
      const handleSortButton=()=>{
        let tempcandidates=[...current_candidates];
        //title sorting
        if(sortTitle!=="Select sort")
        {
            if(sortTitle=="Ascending")
            {
                tempcandidates=tempcandidates.sort((a, b) => {
              if (parseInt(a.marks) < parseInt(b.marks))
                  return -1;
              if (parseInt(a.marks) > parseInt(b.marks))
                  return 1;
              return 0;
          });
        }
        else if(sortTitle=="Descending"){
            tempcandidates=tempcandidates.sort((a, b) => {
              if (parseInt(a.marks) > parseInt(b.marks))
                  return -1;
              if (parseInt(a.marks) < parseInt(b.marks))
                  return 1;
              return 0;
          });
        }}
        setCandidates(tempcandidates);
        sortAllcandidates();
        console.log("result is",tempcandidates,current_candidates);
      }
      const sortAllcandidates=()=>{
        let tempAllCandidates=[...AllCandidates];
        if(sortTitle!=="Select sort")
        {
            if(sortTitle=="Ascending")
            {
                tempAllCandidates=tempAllCandidates.sort((a, b) => {
              if (parseInt(a.marks) < parseInt(b.marks))
                  return -1;
              if (parseInt(a.marks) > parseInt(b.marks))
                  return 1;
              return 0;
          });
        }
        else if(sortTitle=="Descending"){
            tempAllCandidates=tempAllCandidates.sort((a, b) => {
              if (parseInt(a.marks) > parseInt(b.marks))
                  return -1;
              if (parseInt(a.marks) < parseInt(b.marks))
                  return 1;
              return 0;
          });
        }}
        setAllCandidates(tempAllCandidates);
      }
  return (
    <div><div className='candidate-check-tablecontainer'>
        <h2>Sort Candidates</h2>
        <div className='candidate-check-sortContainer'>
        <div className='candidate-Asorter'>
        
        <DropdownButton id="dropdown-basic-button" title={sortTitle} onSelect={(e)=>{setSorttitle(e)}}>
        <Dropdown.Item eventKey="Ascending">Ascending</Dropdown.Item>
        <Dropdown.Item eventKey="Descending">Descending</Dropdown.Item>
        </DropdownButton>
        </div> 
        <button onClick={()=>handleSortButton()}>sort</button>
        </div>
<h2 className='candidate-check-tabletitle'>Interview Candidates</h2>
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
              <th>Marks</th>
              <th>Action</th>
              
            </tr>
          </thead>
          
          <tbody>
         
          {current_candidates.map((candidate,index) => {
          // const { title, generationDate, startDate, endDate,type } = interview ;
        //    count.current=count.current+1;
        //    console.log("ct",count.current);
           return (
              <tr key={index+1}>
                <td>{index+1}</td>
                 <td>{candidate.email}</td>
                 <td>{candidate.marks}</td>
                 <td><button className='candidate-result-action-button' onClick={()=>{handlePageSubmit()}}>View</button></td>
                 
              </tr>
           )
        })} 
          </tbody>
        </table></InfiniteScroll>
        </div>
    </div> </div>
  )
}
