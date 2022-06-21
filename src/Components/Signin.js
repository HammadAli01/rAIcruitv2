import React,{useState,useCallback} from 'react'
import "./Signup.css";
import logo from '../Assets/mainmenu/raicruitlogo.PNG';
import chat from '../Assets/mainmenu/loginsideimg.png';
import { Link } from 'react-router-dom'
import { BsFacebook,BsYoutube,BsWhatsapp,BsTwitter,BsInstagram } from "react-icons/bs";
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
export default function Signin() {
    const [userData,setUserData]=useState({
   
    userEmail:"",
    userPassword:"",
   
});

const changeHandler=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value});
}
const navigation = useNavigate();
//error states
let error;
const [userErrors,setUserErrors]=useState({});
const formSubmitHandler=async(e)=>{
    e.preventDefault();
    
    const errors=checkErrors();
    if(errors==true)
    {   
        setUserErrors(error);
        console.log("call the api",userData);
        // window.localStorage.setItem('user_Id', userData.userEmail);
        // handlePageSubmit();
        const response =await Axios.post(`${process.env.REACT_APP_API_KEY}/login?email=${userData.userEmail}&password=${userData.userPassword}`).then(response => {
             console.log("first response in login",response); 
             error={
                userEmailError:"",
                userPasswordError:"",
            };
             if(response.data.user_email_status==false){
                console.log("here1");
                error.userEmailError="User doesn't exist. Try signup"
                setUserErrors(error);
             }
             if(response.data.enable_status==false){
                console.log("hereenable");
                error.userEmailError="Your account has been disabled";
                setUserErrors(error);
             }
             if(response.data.is_enable==false){
                console.log("hereenable");
                error.userEmailError="Your account has been disabled";
                setUserErrors(error);
             }
             if(response.data.enable_status!==false||response.data.is_enable!==false){
             if(response.data.user_email_status==true){
                console.log("here2");
                if(response.data.password_status==false){
                    error.userPasswordError="Password Incorrect";
                    setUserErrors(error);
                }
             }}
              if(response.data.user_email_status==true){
                console.log("here3");
                 if(response.data.password_status==true){
                    console.log("ALL USER DATA BY ZAHID IS,",response.data);
                   
               window.localStorage.setItem('user_Id', response.data.id);
               window.localStorage.setItem('user_first_name', response.data.first_name);
               window.localStorage.setItem('user_last_name', response.data.last_name);
               window.localStorage.setItem('user_gender', response.data.gender);
               window.localStorage.setItem('user_email', response.data.email);
               window.localStorage.setItem('user_company', response.data.company_name);
               window.localStorage.setItem('user_image', response.data.user_image);
               window.localStorage.setItem('user_password', response.data.hashed_password);
              

           //    console.log("user data got is",response.data);
             setUserData({
                userEmail:"",
                userPassword:"",
          });
          document.getElementById("email-input").value="";
          document.getElementById("password-input").value="";
          if(response.data.is_admin==true){
            handleadminpagesubmit();}else{
            
            handlePageSubmit();
          }
         }
        } 
        })
         .catch(error => {
            alert("Server network error Kindly try again");
         });
        
        // //handlePageSubmit();
        
        // console.log("current userData is::",userData);
    }
    else{
        setUserErrors(error);
        console.log("Got error is",userErrors);
    }
   
}
const handlePageSubmit = useCallback(() => navigation('/dashboard', {replace: true}), [navigation]);
const handleadminpagesubmit= useCallback(() => navigation('/Admindashboard', {replace: true}), [navigation]);
const checkErrors=()=>{
    error={
       
        userEmailError:"",
        userPasswordError:"",
       
    };
    let count=0;
  if(userData.userEmail==undefined){
      count=count+1;
  }
    if(userData.userEmail.length==0)
    {
        error.userEmailError="Email is required";
        count=count+1;
    }
    else if(!/\S+@\S+\.\S+/.test(userData.userEmail)){
        error.userEmailError="Enter a valid email";
        count=count+1;
    }
    if(userData.userPassword.length==0)
    {
        error.userPasswordError="Password is required";
        count=count+1;
    }
   
    if(count==0)
    {return true;
    }
    else{
        return false;
    }
}


    const labelclicked=(id)=>
    {
        console.log("catched id is ",id);
        document.getElementById(id).focus();
    }
    
  return (
    <div >
        <div className="register-left">
            <h1 className='login-welcometag'>Let us implement your decisions</h1>
            <span className='welcometext'>Start Your Journey of providing the best candidates expereince right now and attract the best talent</span>
            <img src={chat} className="chatimg"></img>
            <h3 className='supporttext'>Support Us On</h3>
            <div className='signuplogos'>
                <BsFacebook className='support-icon'></BsFacebook>
                <BsYoutube className='support-icon'></BsYoutube>
                <BsWhatsapp className='support-icon'></BsWhatsapp>
                <BsTwitter className='support-icon'></BsTwitter>
                <BsInstagram className='support-icon'></BsInstagram>
            </div>
        </div>
        <div className="register-right">
            <div className="signup-section__form" alt="logo">
                <img src={logo} className="logoimg"></img>
                <h2 className='newaccounttag'>Sign In</h2>
                <form >
                    
                    <div class="form-group">
                        <input type="email" className="form-input" id="email-input" name="userEmail" 
                        placeholder=" " required onChange={(e)=>{changeHandler(e)}}/>
                        <label className="form-label" onClick={e=>{labelclicked("email-input")}}>Email Address</label>
                        <p className="field-error">{userErrors.userEmailError}</p>
                    </div>
                    <div class="form-group">
                        <input type="password" className="form-input" id="password-input" name="userPassword" 
                        placeholder=" " required onChange={(e)=>{changeHandler(e)}}/>
                        <label className="form-label" onClick={e=>{labelclicked("password-input")}}>Password</label>
                        <p className="field-error">{userErrors.userPasswordError}</p>
                    </div>
                   
                    <div className="loginSection">
                        <Link to="/signup"><a href="" className="logintext">No Account? Sign Up</a></Link>
                    </div>
                    <button type="submit" value="Submit" className="submitButton" 
                    onClick={(e)=>formSubmitHandler(e)}>
                        Login
                    </button>
                </form> 
            </div>
         </div>
    </div>
  )
}
