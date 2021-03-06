import React from 'react'
import './Adminsidebar.css';
import sitelogo from '../../Assets/mainmenu/raicruitlogo.PNG';
import { BsFillGridFill,BsHouseFill,BsFillMenuButtonWideFill,BsFillPersonFill,BsGearFill,BsFillFileEarmarkFontFill,BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from 'react-router-dom';
export default function Adminsidebar(props) {
    
  return (
    <div className='Adminsidebar-main'>
    <div className={props.sidebarclass}>
<div className='admin-sidebar-header'>
  {/* <img src={userimg}></img><div className='user-info'>
      <span className="user-name">Hammad Ali</span>
      <span className="user-role">Recruiter</span> 
      </div>*/}
      <img className="admin-sidebar-sitelogo" src={sitelogo}></img>
      
   </div>
   
<div className='admin-sidebaritems'>
  <ul><Link to="/Admindashboard" className='link-item'>
    <li class="admin-sidebar-item">
      <BsHouseFill className="admin-page-icon"></BsHouseFill>
      <span>Home</span>
    </li></Link>
    
    <Link to="/Admintemplatemenu">
    <li class="admin-sidebar-item">
    <BsFillFileEarmarkFontFill className="admin-page-icon"></BsFillFileEarmarkFontFill>
    <span>Templates</span> 
    </li></Link>
    <Link to="/Allinterviews">
    <li class="admin-sidebar-item">
    <BsFillMenuButtonWideFill className="admin-page-icon"></BsFillMenuButtonWideFill>
     <span>Interviews</span>
    </li></Link> 
   
    <Link to="/Allcategories">
    <li class="admin-sidebar-item">
    <BsFillGridFill className="admin-page-icon"></BsFillGridFill>
    <span>Categories</span> 
    </li></Link>
    <Link to="/Adminmanagebank">
    <li class="admin-sidebar-item">
    <BsGearFill className="admin-page-icon"></BsGearFill>
    <span>Manage Bank</span> 
    </li></Link>
    <Link to="/Adminmanageusers">
    <li class="admin-sidebar-item">
    <BsFillPersonLinesFill className="admin-page-icon"></BsFillPersonLinesFill>
    <span>Manage Users</span> 
    </li></Link>
    <Link to="/Adminmanageprofile">
    <li class="admin-sidebar-item">
      <BsFillPersonFill className="admin-page-icon"></BsFillPersonFill>
     <span>Profile</span>
    </li></Link> 
  </ul>
  </div>
</div>
    </div>
  )
}
