import React,{useState,useRef,useCallback} from 'react'
import './Templatemainmenu.css';
import review1 from '../Assets/mainmenu/nurse.jpg';
import review2 from '../Assets/mainmenu/teaching.png';
import review3 from '../Assets/mainmenu/software.jpg';
import {useNavigate} from 'react-router-dom';
export default function Templatemainmenu() {
    const navigation = useNavigate();
    const [allTemplates,setTemplates]=useState([{
        id:1,template_Name:"nurse",questions:[{
            id: 1,
            username:"admin",
            stem: "What is your availability for this job",
            CategoryName: "Environment",
            optionArray: [
              {
                id: 101,
                optionText: "option1",
                optionWeightage: "50"
              },{
                id: 102,
                optionText: "option2",
                optionWeightage: "100"
              },
              {
                id: 103,
                optionText: "option3",
                optionWeightage: "75"
              },
              {
                id: 104,
                optionText: "option4",
                optionWeightage: "100"
              }
            ]
          },{
            id: 1,
            username:"admin",
            stem: "How are you",
            CategoryName: "Environment",
            optionArray: [
              
            ]
          },{
            id: 1,
            username:"admin",
            stem: "What is your availability for this job",
            CategoryName: "Environment",
            optionArray: [
              {
                id: 101,
                optionText: "option1",
                optionWeightage: "25"
              },{
                id: 102,
                optionText: "option2",
                optionWeightage: "25"
              }
            ]
          },{
            id: 1,
            username:"admin",
            stem: "next quesavailability for this job",
            CategoryName: "Environment",
            optionArray: [
              {
                id: 101,
                optionText: "option1",
                optionWeightage: "50"
              },{
                id: 102,
                optionText: "option2",
                optionWeightage: "25"
              },
              {
                id: 103,
                optionText: "option3",
                optionWeightage: "75"
              },
              {
                id: 104,
                optionText: "option4",
                optionWeightage: "100"
              }
            ]
          },{
            id: 1,
            username:"admin",
            stem: "What is your availability for this job What is your availability for this job What is your availability for this job What is your availability for this job What is your availability for this job What is your availability for this job What is your availability for this job",
            CategoryName: "Environment",
            optionArray: [
              {
                id: 101,
                optionText: "option1",
                optionWeightage: "50"
              },{
                id: 102,
                optionText: "option3",
                optionWeightage: "25"
              },
              {
                id: 103,
                optionText: "option2",
                optionWeightage: "75"
              },
              {
                id: 104,
                optionText: "option4",
                optionWeightage: "100"
              }
            ]
          },{
            id: 1,
            username:"admin",
            stem: "What",
            CategoryName: "Environment",
            optionArray: [
              {
                id: 101,
                optionText: "option1",
                optionWeightage: "50"
              },{
                id: 102,
                optionText: "option2",
                optionWeightage: "25"
              },
              {
                id: 103,
                optionText: "option3",
                optionWeightage: "75"
              },
              {
                id: 104,
                optionText: "option4",
                optionWeightage: "100"
              }
            ]
          },{
            id: 1,
            username:"admin",
            stem: "What is your current job",
            CategoryName: "Environment",
            optionArray: [
              {
                id: 101,
                optionText: "option1",
                optionWeightage: "50"
              },{
                id: 102,
                optionText: "option2",
                optionWeightage: "25"
              },
              {
                id: 103,
                optionText: "option3",
                optionWeightage: "75"
              },
              {
                id: 104,
                optionText: "option4",
                optionWeightage: "100"
              }
            ]
          },],template_image:review1},
        {
            id:2,template_Name:"teaching",questions:[],template_image:review2},
            {
                id:3,template_Name:"software Engineer",questions:[],template_image:review3}, {
                    id:3,template_Name:"software Engineer",questions:[],template_image:review3}
    ]);
    const handlePageSubmit = useCallback(() => navigation('/template', {replace: true}), [navigation]);
    const handleTemplateClick=(template)=>{
        window.localStorage.setItem('current_Selected_Template', JSON.stringify(template));
        handlePageSubmit();
    }
  return (
    <div className='alltemplates-container'>
<h2>Templates</h2>
{allTemplates.map((template)=>{
    return(
    <div className='template-container' onClick={(e)=>{handleTemplateClick(template)}}>
    <img src={template.template_image} className='template-image'></img>
    <h5>{template.template_Name}</h5>
    </div>)
})

}
    </div>
  )
}
