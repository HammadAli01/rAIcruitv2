import React from 'react'
import Admindashboardnavbar from '../Components/navbars/Admindashboardnavbar'
import Adminmain from '../Components/Adminmain'
export default function Admindashboard() {
  return (
    <div><Admindashboardnavbar side={true} />
<Adminmain/>
    </div>
  )
}
