import React from 'react'
import DashboardNavbar from '../Components/navbars/DashboardNavbar'
import Addquestion from '../Components/Addquestion'
export default function ManageBank() {
  return (
    <div>
        <DashboardNavbar side={true}/>
        <Addquestion />
        </div>
  )
}
