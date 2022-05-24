import React,{useState} from 'react'
import './Admindashboardnavbar.css'
import { Navbar,Nav,Container } from 'react-bootstrap';
import { BsList,BsCaretDownFill } from "react-icons/bs";
import Sidebar from './Adminsidebar';
import userImg from '../../Assets/mainmenu/profile.jpg';
import { Link } from 'react-router-dom';
export default function Admindashboardnavbar(props) {
    const [sidebar,showSidebar]=useState(props.side);
const changesidebarstatus=()=>{
    showSidebar(!sidebar);  
}
const [showsignout,setShowSignOut]=useState(false);
const signOut=()=>{
    window.localStorage.removeItem('user_Id');
    console.log("signout",window.localStorage.getItem('user_Id'));
}
  return (
    <div className='adminnavbar'> <Navbar >
    <Container >
        <BsList className='admin-sidebarIcon' viewBox='0 0 20 13' onClick={changesidebarstatus}></BsList>
        <Navbar.Brand href="#home">rAIcruiter</Navbar.Brand>
        <Nav onClick={()=>{setShowSignOut(!showsignout)}}>
            <BsCaretDownFill className='admin-bell-icon'></BsCaretDownFill>
        <img src={userImg} className='admin-userImg'></img>
        </Nav>
       
    </Container>
    
    </Navbar>
    {sidebar==true ? <Sidebar sidebarclass='admin-showsidebar'/>:<Sidebar sidebarclass='admin-hidesidebar'/> }
    {showsignout==true ?<div className='admin-signoutdiv'>
        <img src={userImg} className='admin-userImgindiv'></img>
        <p>hammadalibu@gmail.com</p>
<h6>Hammad Ali</h6>
        <hr className='spearation-line'></hr>
        <Link to="/"><button className='admin-signout-button' onClick={()=>{signOut()}}>Sign Out</button></Link></div>:(console.log("logout idv hided"))}
    
    </div>
  )
}

