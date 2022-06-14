import React,{useRef,useState,useEffect,useCallback} from 'react'
import Admindashboardnavbar from '../Components/navbars/Admindashboardnavbar';
import './AdminManageprofile.css';
import {useNavigate} from 'react-router-dom';
import tempprofile from '../Assets/mainmenu/DSC.png';
export default function AdminManageprofile() {
  const userdetails={userName:"Hammad Ali",email:"hammadalibu@gmail.com",password:"andrea",companyName:"magich,isb",gender:"Male"}
  const navigation = useNavigate();
    const handlePageSubmit = useCallback(() => navigation('/Admindashboard', {replace: true}), [navigation]);
  const [userData,setUserData]=useState(userdetails);
  const [userGender,setuserGender]=useState(userData.gender);
  // useEffect(()=>{
  //   setuserGender(gender);
  //   console.log("usergender is",userGender);
    
  //   },[gender]);
    
  let error;
  const [userErrors,setUserErrors]=useState({});
    const hiddenFileInput = useRef(null);
    const handleClick = (e) => {
      hiddenFileInput.current.click();
    };
    const handleChange = (event) => {
     
      var selectedFile = event.target.files[0];
      var reader = new FileReader();
      var imgtag = document.getElementById("imageid");
      imgtag.title = selectedFile.name;

      reader.onload = function(event) {
        imgtag.src = event.target.result;
        console.log("imgsrc",imgtag.src);
      };

      reader.readAsDataURL(selectedFile);
  
    };
    const labelclicked=(id)=>
    {
        //console.log("catched id is ",id);
        document.getElementById(id).focus();
    }
    const changeHandler=(e)=>{
      setUserData({...userData,[e.target.name]:e.target.value});
  }
  const formSubmitHandler=(e)=>{
    e.preventDefault();
    
    const errors=checkErrors();
    if(errors==true)
    {   setUserErrors(error);
        console.log("call the api");
        userData.gender=userGender;
        console.log("current userData is::",userData);
        handlePageSubmit();
    }
    else{
        setUserErrors(error);
        console.log("Got error is",userErrors);
    }
   
}
  const checkErrors=()=>{
    error={
        userNameError:"",
        emailError:"",
        passworderror:"",
        companyNameError:""
    };
    let count=0;
    console.log("userdata is",userData.userName.length);
    if(userData.userName.length==0){
        error.userNameError="Required";
        count=count+1;
    }
    if(userData.email.length==0)
    {
        error.emailError="Required";
        count=count+1;
    }
    else if(!/\S+@\S+\.\S+/.test(userData.email)){
        error.emailError="Invalid Email";
        count=count+1;
    }
    if(userData.password.length==0)
    {
        error.passworderror="Required";
        count=count+1;
    }
    // if(userData.confirmPassword.length==0)
    // {
    //     error.confirmPasswordError="Confirm password is required";
    //     count=count+1;
    // }
    // else if(userData.userPassword!==userData.confirmPassword)
    // {
    //     error.confirmPasswordError="Confirm password does not match password";
    //     count=count+1;
    // }
    if(userData.companyName.length==0)
    {
        error.companyNameError="Required";
        count=count+1;
    }
    if(count==0)
    {return true;
    }
    else{
        return false;
    }
}

  return (
    <div >
       <Admindashboardnavbar  side={true}/>
       <div className='userprofileparent'>
    <div className='userprofilefirstchild'><img id="imageid" className='userProfile' src={tempprofile} alt="userimg"  onClick={handleClick}></img>
    <input type="file"
             ref={hiddenFileInput}
             onChange={(e)=>{handleChange(e)}}
             style={{display:'none'}} 
             accept="image/*"
      />
     
    </div>
    <div className='userprofilesecondchild'>
      <form>
      <div className="form-Group">
        <input type="text" className="form-Input" id="name-input" value={userData.userName}
        placeholder=" "  name="userName" required onChange={(e)=>{changeHandler(e)}}/>
        <label className="form-Label" onClick={e=>{labelclicked("name-input")}}>Full Name</label>
        {userErrors.userNameError && <p className="field-Error">{userErrors.userNameError}</p>}
      </div>
      <div className="form-Group">
                        <input type="email" className="form-Input" id="email-input" name="email" value={userData.email}
                        placeholder=" " required onChange={(e)=>{changeHandler(e)}}/>
                        <label className="form-Label" onClick={e=>{labelclicked("email-input")}}>Email Address</label>
                        {userErrors.emailError && <p className="field-Error">{userErrors.emailError}</p>}
                    </div>
                    <div class="form-Group">
                        <input type="password" className="form-Input" id="password-input" name="password" value={userData.password}
                        placeholder=" " required onChange={(e)=>{changeHandler(e)}}/>
                        <label className="form-Label" onClick={e=>{labelclicked("password-input")}}>Password</label>
                        {userErrors.passworderror && <p className="field-Error">{userErrors.passworderror}</p>}
                    </div>
                    <div className="form-Group">
                        <input type="text" className="form-Input" placeholder=" " id="company-input" value={userData.companyName}
                        name="companyName" required onChange={(e)=>{changeHandler(e)}}/>
                        <label className="form-Label" onClick={e=>{labelclicked("company-input")}}>Company Name</label>
                        {userErrors.companyNameError && <p className="field-Error">{userErrors.companyNameError}</p>}
                    </div>
                    <div className="form-Group">
                      <div className='radiobutton1'> 
                        <input type="radio" id="Male" name="gender" value="Male" 
                        checked={userGender=="Male"} onChange={(e)=>{setuserGender(e.target.value)}}
                        />
                        <label for="Male" className='radio-label ' >Male</label ><div class="check"></div><br/>
                      </div>
                      <div className='radiobutton2'> 
                        <input  type="radio" id="Female" name="gender" 
                        checked={userGender=="Female"} value="Female" onChange={(e)=>{setuserGender(e.target.value)}}/>
                        
                        <label for="Female" className='radio-label '>Female</label><div class="check"></div><br/>
                      </div>
                    </div>
      <button type="submit" value="Submit" className="SubmitButton" 
                    onClick={(e)=>{formSubmitHandler(e)}}>
                        Save Changes
                    </button>
      </form>
      
    </div>
    </div>
    </div>
    
  )
  
}
