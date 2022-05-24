import React from 'react'
import './Templatemenu.css';
import Templatemainmenu from '../Components/Templatemainmenu';
import DashboardNavbar from '../Components/navbars/DashboardNavbar'
export default function Templatemenu() {
  return (
    <div><DashboardNavbar side={true}/>
   <Templatemainmenu/>
    </div>
  )
}
