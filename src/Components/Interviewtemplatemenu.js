import React,{useState,useRef} from 'react'
import './Interviewtemplatemenu.css';
export default function Interviewtemplatemenu() {
    const maxOption=useRef();
const [interview,setInterview]=useState(JSON.parse(window.localStorage.getItem('current_Selected_Template')));
// useEffect(()=>{
//     setInterview(JSON.parse(window.localStorage.getItem('current_Selected_Template')));
//     console.log(JSON.parse(window.localStorage.getItem('current_Selected_Template')));
// },[]);
const checkOptions=(optionArray)=>{
   
    maxOption.current=optionArray[1];
    console.log("option got are",optionArray);
optionArray.map((option,index)=>{
   
if(parseInt(option.optionWeightage) > parseInt(maxOption.current.optionWeightage))
{
    console.log("option changed",option);
    maxOption.current=optionArray[index];
}else{}
});
console.log("result max is",maxOption.current);
}
  return (
    <div className='interviewTemplatemainmenu-container'>
        <h2>{interview.template_Name} Interview Template</h2> 
        {interview.questions.map((question,index)=>{
            if(question.optionArray.length!==0){
            checkOptions(question.optionArray);}else{}
            return(
                <div className='template-interview-question'>
                    <h3>+</h3>
                <p>{index+1}. {question.stem}?</p>
                
              
                <ul>
                {question.optionArray.map((option)=>{
                     return(
                         <>
                        {(maxOption.current==option) ?(
                        <li className='correct-option'>{option.optionText}<div id="tick-mark"></div></li>):(<li>{option.optionText}</li>)}
                            </>
                     )
                })}</ul>
                </div>
            )
        })}
        </div>
  )
}
