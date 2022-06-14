import React from 'react'
import Admindashboardnavbar from '../Components/navbars/Admindashboardnavbar'
import './Admindashboard.css'
import Adminmain from '../Components/Adminmain'
export default function Admindashboard() {
  return (
    <div className='Admindashboard'><Admindashboardnavbar side={true} />
<Adminmain/>
    </div>
  )
}
