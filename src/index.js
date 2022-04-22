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
ReactDOM.render(
  <React.StrictMode>
   
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Mainmenu/>}/>
    <Route path="/signup"  element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/dashboard' element={<RecruiterDashboard/>} />
        <Route path='/designinterview' element={<Designinterview/>} />
        <Route path='/interviewdetails' element={<InterviewDetails/>} />
        <Route path='/managebank' element={<ManageBank/>} />
        
        <Route path='/sendemail' element={<SendEmail/>} />
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
