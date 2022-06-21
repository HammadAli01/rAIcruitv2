import React,{useState,useEffect} from 'react'
import './Adminmanageusers.css';
import  axios  from 'axios'
import Admindashboardnavbar from '../Components/navbars/Admindashboardnavbar';
export default function Adminmanageinterviews() {
    const [interviews,setAllInterviews]=useState([]);
    const [call_Api,setCallApi]=useState(false); 
    const getAllInterviews=async()=>{
      console.log("calling get all users called");
      const response =await axios.get(`${process.env.REACT_APP_API_KEY}/Interview/get/all/admin`).then(response => {
        console.log("first response",response.data); 
        setAllInterviews(response.data);
    })
    .catch(error => {
        console.error('There was an errorin get all users!', error);
    });
    };
    useEffect(()=>{
     getAllInterviews();
      
       
    },[call_Api]);
    const handleStatusChange=async(interview_id,interview_status)=>{
console.log("interview id",interview_id,"interview status",interview_status);
//api call to change user status id and email are sended first for abled user to disable then disable
if(interview_status==false){
  console.log("calling make interview active called",interview_id);
  const response =await axios.post(`${process.env.REACT_APP_API_KEY}/Interview/disable?interview_id=${interview_id}`).then(response => {
    console.log("first response",response.data); 
    setCallApi(!call_Api);
})
.catch(error => {
    console.error('There was an error in making interview active api!', error);
});
}
else if(interview_status==true){
  console.log("calling make interview disable called",interview_id);
  const response =await axios.post(`${process.env.REACT_APP_API_KEY}/Interview/enable?interview_id=${interview_id}`).then(response => {
    console.log("first response",response.data); 
    setCallApi(!call_Api);
})
.catch(error => {
    console.error('There was an error in making interview disable api!', error);
});
}
// users.map((recruiter)=>{
// if(recruiter_current_email==recruiter.email){
//     recruiter.status=!recruiter_status;
// }
// });

    }
  return (
    <><Admindashboardnavbar side={true}/>
    <div className='adminmanageusers'><section>
  
    <h1>Interviews</h1>
    <div class="tbl-header">
      <table cellpadding="0" cellspacing="0" border="0">
        <thead>
           
          <tr>
          <th className='sno'>S/No</th>
            <th className='admin-recruiter-name'>Title</th>
            <th  className='admin-recruiter-email'>Generated Date</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
      </table>
    </div> 
    {interviews.length!==0?(
      
    <div class="tbl-content">
   {console.log("interviewsx length:",interviews.length)}

      <table >
        <tbody>
        {interviews.length!==0?(interviews.map((interview,index)=>{
                return(
                    <tr>
                        <td className='sno'>{index+1}</td>
                    <td className='admin-recruiter-name'>{interview.title}</td>
                     <td  className='admin-recruiter-email'>{interview.generationDate} </td>
                    <td>{interview.startDate}</td>
                    <td className='wrongtd'>{interview.endDate}</td>
                    <td className='wrongtd'>
                        <input  onClick={()=>handleStatusChange(interview.id,interview.is_enable)} 
                    className="status-input" id={interview.title} type="checkbox" checked={!interview.is_enable}>

                    </input>
                    <span class="status-checkbox"></span>
                    {interview.is_enable?
                   
                    (<label className="status-label" for={interview.title}>Inactive</label>):(
                    <label className="status-label" for={interview.title}>Active</label>)
                    }
                    </td>
                  </tr>
                )
            })):(<div className='empty-questions'>No interviews exist</div>)}
         
         
        </tbody>
      </table>
     
    </div> ):(<div className='empty-questions'>No interviews exist</div>)}
  </section></div>
  </>
  )
}
