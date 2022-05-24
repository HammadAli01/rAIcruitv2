import React from 'react'
import Admindashboardnavbar from '../Components/navbars/Admindashboardnavbar'; 
import Adminaddquestion from '../Components/Adminaddquestion';
export default function Adminmanagebank() {
  return (
    <div><Admindashboardnavbar side={true}/>
    <Adminaddquestion/>
    </div>
  )
}
