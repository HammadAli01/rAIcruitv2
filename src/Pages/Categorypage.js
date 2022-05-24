import React from 'react'
import Admindashboardnavbar from '../Components/navbars/Admindashboardnavbar'
import Category from '../Components/Category'
export default function Admindashboard() {
  return (
    <div><Admindashboardnavbar side={true} />
<Category/>
    </div>
  )
}
