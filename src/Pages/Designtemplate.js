import React from 'react'
import Admindashboardnavbar from '../Components/navbars/Admindashboardnavbar'
import Adminquestionbank from '../Components/Adminquestionbank'
import Admindesignflow from '../Components/Admindesignflow'
export default function Designtemplate() {
  return (
    <div className="design-wrapper"><Admindashboardnavbar side={false}/>
    
        <div className="question">
        <Adminquestionbank/>
        </div>
        <div className="interview">
        <Admindesignflow/>
        </div>
        
    </div>
  )
}
