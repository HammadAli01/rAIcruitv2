import React from 'react'
import DashboardNavbar from '../Components/navbars/DashboardNavbar';
import Recruitermain from '../Components/Recruitermain';
export default function RecruiterDashboard() {
  window.localStorage.setItem("Is_Template",false);
  return (
    <div>
        
        <DashboardNavbar side={true} />
    <Recruitermain/>
    </div>
  )
}
