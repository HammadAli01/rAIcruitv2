import React,{useState,useEffect,useRef,useCallback} from 'react'
import './Checkresultinterviews.css'
import {useNavigate} from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";

export default function Checkresultinterviews() {
    const navigation = useNavigate();
    const handlePageSubmit = useCallback(() => navigation('/Interviewcandidatesview', {replace: true}), [navigation]);
    const currentInterviewsLength=useRef(10);
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
    const [current_interviews,setInterviews]=useState(AllInterviews.slice(0,9));
    const fetchMoreData = () => {
        currentInterviewsLength.current=currentInterviewsLength.current+3;
        setTimeout(() => {
            setInterviews(AllInterviews.slice(0,(currentInterviewsLength.current)));
        }, 1000);

      };
  return (
    <div><div className='check-tablecontainer'>
<h2 className='check-tabletitle'>Interviews</h2>
         <div className='check-table'>
         <InfiniteScroll
          dataLength={current_interviews.length}
          next={()=>fetchMoreData()}
          hasMore={true}
        //   loader={<h4>...</h4>}
        > 
            <table className='check-interviews'>
          <thead>
         
            <tr>
              <th>S/No</th>
              <th>Interview title</th>
              <th> Generated</th>
              <th>Start </th>
              <th>End</th>
              <th>Action</th>
              
            </tr>
          </thead>
          
          <tbody>
         
          {current_interviews.map((interview,index) => {
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
                 <td><button className='result-action-button' onClick={()=>{handlePageSubmit()}}>View</button></td>
                 
              </tr>
           )
        })} 
          </tbody>
        </table></InfiniteScroll>
        </div>
    </div> </div>
  )
}