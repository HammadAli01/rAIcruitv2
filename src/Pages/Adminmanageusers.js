import React,{useState,useEffect} from 'react'
import './Adminmanageusers.css';
import  axios  from 'axios'
import Admindashboardnavbar from '../Components/navbars/Admindashboardnavbar';
export default function Adminmanageusers() {
    const [users,setUsers]=useState([])
    const [call_Api,setCallApi]=useState(false);
    const getAllUsers=async()=>{
      console.log("calling get all users called");
      const response =await axios.get(`${process.env.REACT_APP_API_KEY}/test`).then(response => {
        console.log("first response",response.data); 
      setUsers(response.data);
    })
    .catch(error => {
        console.error('There was an errorin get all users!', error);
    });
    };
    useEffect(()=>{
      getAllUsers();
        // //api call to get recruiters data
        // {
        //   email: "hammadalibu@gmail.com",company_name: "Magisch Tech",
        //   first_name: "Hammad1",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:true},
        //   {
        //       email: "zahidbu@gmail.com",company_name: "Magisch Tech",
        //       first_name: "Hammad2",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:1,status:false},
        //       {
        //           email: "hammadalibu1@gmail.com",company_name: "Magisch Tech",
        //           first_name: "Hammad3",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:true},
        //           {
        //               email: "hammadalibu2@gmail.com",company_name: "Magisch Tech",
        //               first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:true},
        //               {
        //                   email: "hammadalibu3@gmail.com",company_name: "Magisch Tech",
        //                   first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:false},
        //                   {
        //                       email: "hammadalibu4@gmail.com",company_name: "Magisch Tech",
        //                       first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:true},
        //                       {
        //                           email: "hammadalibu5@gmail.com",company_name: "Magisch Tech",
        //                           first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:false},
        //                           {
        //                               email: "hammadalibu6@gmail.com",company_name: "Magisch Tech",
        //                               first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:true},
        //                               {
        //                                   email: "hammadalibu7@gmail.com",company_name: "Magisch Tech",
        //                                   first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:false},
        //                                   {
        //                                       email: "hammadalibu11@gmail.com",company_name: "Magisch Tech",
        //                                       first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:true}
      
       
    },[call_Api]);
    const handleStatusChange=async(recruiter_current_email,recruiter_id,recruiter_status)=>{
console.log("recruiter id",recruiter_current_email,"recruiter status",recruiter_status);
//api call to change user status id and email are sended first for abled user to disable then disable
if(recruiter_status==false){
  console.log("calling make user active called",recruiter_current_email);
  const response =await axios.post(`${process.env.REACT_APP_API_KEY}/users/disable?user_id=${recruiter_id}`).then(response => {
    console.log("first response",response.data); 
    setCallApi(!call_Api);
})
.catch(error => {
    console.error('There was an error in making user active api!', error);
});
}
else if(recruiter_status==true){
  console.log("calling make user disable called",recruiter_current_email);
  const response =await axios.post(`${process.env.REACT_APP_API_KEY}/users/enalble?user_id=${recruiter_id}`).then(response => {
    console.log("first response",response.data); 
    setCallApi(!call_Api);
})
.catch(error => {
    console.error('There was an error in making user disable api!', error);
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
  
    <h1>Recruiters</h1>
    <div class="tbl-header">
      <table cellpadding="0" cellspacing="0" border="0">
        <thead>
           
          <tr>
          <th className='sno'>S/No</th>
            <th className='admin-recruiter-name'>Name</th>
            <th  className='admin-recruiter-email'>Email</th>
            <th>Company</th>
            <th>Interviews</th>
            <th>Status</th>
          </tr>
        </thead>
      </table>
    </div> 
    {users.length!==0?(
      
    <div class="tbl-content">
   {console.log("users length:",users.length)}

      <table >
        <tbody>
        {users.length!==0?(users.map((recruiter,index)=>{
                return(
                    <tr>
                        <td className='sno'>{index+1}</td>
                    <td className='admin-recruiter-name'>{recruiter.first_name+" "}{recruiter.last_name}</td>
                     <td  className='admin-recruiter-email'>{recruiter.email} </td>
                    <td>{recruiter.company_name}</td>
                    <td className='wrongtd'>{recruiter.no_of_Interviews}</td>
                    <td className='wrongtd'>
                        <input  onClick={()=>handleStatusChange(recruiter.email,recruiter.id,recruiter.status)} 
                    className="status-input" id={recruiter.email} type="checkbox" checked={!recruiter.status}>

                    </input>
                    <span class="status-checkbox"></span>
                    {recruiter.status?
                   
                    (<label className="status-label" for={recruiter.email}>Inactive</label>):(
                    <label className="status-label" for={recruiter.email}>Active</label>)
                    }
                    </td>
                  </tr>
                )
            })):(<div className='empty-questions'>No recruiters exist</div>)}
         
         
        </tbody>
      </table>
     
    </div> ):(<div className='empty-data'>No users data available to show</div>)}
  </section></div>
  </>
  )
}
