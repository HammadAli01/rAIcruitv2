import React,{useState,useEffect} from 'react'
import './Adminmanageusers.css';
import Admindashboardnavbar from '../Components/navbars/Admindashboardnavbar';
export default function Adminmanageusers() {
    const [users,setUsers]=useState([{}])
    const [call_Api,setCallApi]=useState(false);
    useEffect(()=>{
        //api call to get recruiters data
        setUsers([{
            email: "hammadalibu@gmail.com",company_name: "Magisch Tech",
            first_name: "Hammad1",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:true},
            {
                email: "zahidbu@gmail.com",company_name: "Magisch Tech",
                first_name: "Hammad2",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:1,status:false},
                {
                    email: "hammadalibu1@gmail.com",company_name: "Magisch Tech",
                    first_name: "Hammad3",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:true},
                    {
                        email: "hammadalibu2@gmail.com",company_name: "Magisch Tech",
                        first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:true},
                        {
                            email: "hammadalibu3@gmail.com",company_name: "Magisch Tech",
                            first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:false},
                            {
                                email: "hammadalibu4@gmail.com",company_name: "Magisch Tech",
                                first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:true},
                                {
                                    email: "hammadalibu5@gmail.com",company_name: "Magisch Tech",
                                    first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:false},
                                    {
                                        email: "hammadalibu6@gmail.com",company_name: "Magisch Tech",
                                        first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:true},
                                        {
                                            email: "hammadalibu7@gmail.com",company_name: "Magisch Tech",
                                            first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:false},
                                            {
                                                email: "hammadalibu11@gmail.com",company_name: "Magisch Tech",
                                                first_name: "Hammad",last_name:  "Ali",password:  "adsfaf",no_Of_Interviews:10,status:true}
        ])
    },[call_Api]);
    const handleStatusChange=(recruiter_current_email,recruiter_status)=>{
console.log("recruiter id",recruiter_current_email,"recruiter status",recruiter_status);
//api call to change user status id and email are sended

users.map((recruiter)=>{
if(recruiter_current_email==recruiter.email){
    recruiter.status=!recruiter_status;
}
});
setCallApi(!call_Api);
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
    <div class="tbl-content">
      <table >
        <tbody>
        {users.map((recruiter,index)=>{
                return(
                    <tr>
                        <td className='sno'>{index+1}</td>
                    <td className='admin-recruiter-name'>{recruiter.first_name+" "}{recruiter.last_name}</td>
                     <td  className='admin-recruiter-email'>{recruiter.email} </td>
                    <td>{recruiter.company_name}</td>
                    <td className='wrongtd'>{recruiter.no_Of_Interviews}</td>
                    <td className='wrongtd'>
                        <input  onClick={()=>handleStatusChange(recruiter.email,recruiter.status)} 
                    className="status-input" id={recruiter.email} type="checkbox" checked={recruiter.status}>

                    </input>
                    <span class="status-checkbox"></span>
                    {recruiter.status?
                   
                    (<label className="status-label" for={recruiter.email}>Active</label>):(
                    <label className="status-label" for={recruiter.email}>Inactive</label>)
                    }
                    </td>
                  </tr>
                )
            })}
         
         
        </tbody>
      </table>
    </div>
  </section></div>
  </>
  )
}
