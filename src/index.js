import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mainmenu from './Pages/Mainmenu';
import { Route, Link,Routes, BrowserRouter } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Designinterview from './Pages/Designinterview';
import RecruiterDashboard from './Pages/RecruiterDashboard';
import InterviewDetails from './Pages/InterviewDetails';
import ManageBank from './Pages/ManageBank';
import SendEmail from './Pages/SendEmail';
import Userprofile from './Pages/Userprofile';
import Templatemenu from './Pages/Templatemenu';
import Interviewtemplate from './Pages/Interviewtemplate';
import Categorypage from './Pages/Categorypage';
import Admindashboard from './Pages/Admindashboard';
import AdminCategories from './Pages/AdminCategories';
import Adminmanagebank from './Pages/Adminmanagebank';
import Admintemplatemenu from './Pages/Admintemplatemenu';
import Designtemplate from './Pages/Designtemplate';
import Admintemplateview from './Pages/Admintemplateview';
import Adminmanageusers from './Pages/Adminmanageusers';
import AdminManageprofile from './Pages/AdminManageprofile';
import Checkcandidate from './Pages/Checkcandidate';
import Checkresults from './Pages/Checkresults';
import Checktranscript from './Pages/Checktranscript';
ReactDOM.render(
  <React.StrictMode>
   
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signin/>}/>
    <Route path="/signup"  element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/dashboard' element={<RecruiterDashboard/>} />
        <Route path='/designinterview' element={<Designinterview/>} />
        <Route path='/interviewdetails' element={<InterviewDetails/>} />
        <Route path='/managebank' element={<ManageBank/>} />
        <Route path='/templates' element={<Templatemenu/>} />
        <Route path='/template' element={<Interviewtemplate/>} />
        <Route path='/sendemail' element={<SendEmail/>} />
        <Route path='/Interviewview' element={<Checkresults/>} />
        <Route path='/Interviewcandidatesview' element={<Checkcandidate/>} />
        <Route path='/Interviewcandidateresultview' element={<Checktranscript/>} />
        
        <Route path='/Admindashboard' element={<Admindashboard/>} />
         <Route path='/Allcategories' element={<AdminCategories/>} />
         <Route path='/categoryView' element={<Categorypage/>} />
         <Route path='/Adminmanagebank' element={<Adminmanagebank/>} />
         <Route path='/Admindesigntemplate' element={<Designtemplate/>} />
         <Route path='/Admintemplatemenu' element={<Admintemplatemenu/>} />
         <Route path='/Adminmanageusers' element={<Adminmanageusers/>} />
         <Route path='/Adminmanageprofile' element={<AdminManageprofile/>} />
         
         <Route path='/Admintemplateview' element={<Admintemplateview/>} />
{/*include upper route in admin sidebar */}         
        <Route path='/userprofile' element={<Userprofile/>} />   
             
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
