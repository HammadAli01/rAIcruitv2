import React from 'react'
import Admindashboardnavbar from '../Components/navbars/Admindashboardnavbar'
import Admininterviewtemplateview from '../Components/Admininterviewtemplateview'
export default function Admintemplateview() {
  return (
    <div><Admindashboardnavbar side={true}/>
    <Admininterviewtemplateview/>
    </div>
  )
}
