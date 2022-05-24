
import React,{useState,useEffect,useRef,useCallback} from 'react'
import './Recruitersallinterviews.css'
import {useNavigate} from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import { Dropdown,DropdownButton,Button } from 'react-bootstrap';

export default function Recruitersallinterviews() {
    const [sortTitle,setSorttitle]=useState("Select sort");
    const navigation = useNavigate();
    const handlePageSubmit = useCallback(() => navigation('/Allusersinterview', {replace: true}), [navigation]);
    const currentCandidatesLength=useRef(10);
    const [AllInterviews,setAllInterviews]=useState([{
        title:"AThis is the default title1",generationDate:"02/11/2017",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, isis consectetur adipiscing elit, sed do eiusmod tempor ..."   },{
        title:"BThis is the default title2",generationDate:"03/05/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    },{
        title:"Z",generationDate:"01/01/2011",startDate:"01/01/2011",endDate:"12/06/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    },{
        title:"AThis is the default title1",generationDate:"02/11/2017",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, isis consectetur adipiscing elit, sed do eiusmod tempor ..."   },{
        title:"BThis is the default title2",generationDate:"24/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    },{
        title:"CThis is the default title3",generationDate:"25/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    },{
        title:"AThis is the default title1",generationDate:"02/11/2017",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, isis consectetur adipiscing elit, sed do eiusmod tempor ..."   },{
        title:"BThis is the default title2",generationDate:"24/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    },{
        title:"This is the default title3",generationDate:"25/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    },{
        title:"This is the default title1",generationDate:"02/11/2017",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, isis consectetur adipiscing elit, sed do eiusmod tempor ..."   },{
        title:"This is the default title2",generationDate:"24/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    },{
        title:"This is the default title3",generationDate:"25/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    },{
        title:"ZThis is the default title1",generationDate:"02/11/2017",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, isis consectetur adipiscing elit, sed do eiusmod tempor ..."   },{
        title:"DDDThis is the default title2",generationDate:"24/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    },{
        title:"BBBThis is the default title3",generationDate:"25/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    },{
        title:"AAAThis is the default title1",generationDate:"02/11/2017",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, isis consectetur adipiscing elit, sed do eiusmod tempor ..."   },{
        title:"XThis is the default title2",generationDate:"24/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    },{
        title:"ZThis is the default title3",generationDate:"25/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    }]);
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
