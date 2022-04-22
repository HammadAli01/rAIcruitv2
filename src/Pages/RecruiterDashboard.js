import React from 'react'
import DashboardNavbar from '../Components/navbars/DashboardNavbar';
import Recruitermain from '../Components/Recruitermain';
export default function RecruiterDashboard() {
  return (
    <div>
        
        <DashboardNavbar side={true} />
    <Recruitermain/>
    </div>
  )
}
