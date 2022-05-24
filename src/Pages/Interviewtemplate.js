import React from 'react';
import DashboardNavbar from '../Components/navbars/DashboardNavbar';
import Interviewtemplatemenu from '../Components/Interviewtemplatemenu';
export default function Interviewtemplate() {
  return (
    <div><DashboardNavbar side={true}/>
   <Interviewtemplatemenu/>
    </div>
  )
}
