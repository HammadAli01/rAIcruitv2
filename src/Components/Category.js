import React,{useEffect,useState,useRef} from 'react'
import './Category.css';
export default function Category() {
    const maxOption=useRef();
    const [categoryName,setcategoryName]=useState({});
    const [questions,setQuestions]=useState([]);
  useEffect(()=>{
    setcategoryName(JSON.parse(window.localStorage.getItem('SelectedCategory')));
      console.log("category name got is",categoryName.id,categoryName.name);
       // const response = await axios.get("https://raicruittest.herokuapp.com/get/all/question").catch((err) => {
//   console.log("Error:", err);
// });
// if (response ) {
//     setQuestions(response.data.Questions);
// }
setQuestions([
    {
      id: "1",
      username:"admin",
      stem: "How was your day ",
      CategoryName: "Icebreakers",
      optionArray: [
        {
          id: 101,
          optionText: "option1",
          optionWeightage: "60"
        },
        {
          id: 102,
          optionText: "option2",
          optionWeightage: "70"
        },
        {
          id: 103,
          optionText: "option3",
          optionWeightage: "80"
        },
        {
          id: 104,
          optionText: "option4",
          optionWeightage: "90"
        }
      ]
    },
    {
      id: "111",
      username:"admin",
      stem: "dummy question ",
      CategoryName: "Icebreakers",
      optionArray: []
        
    },
    {
      id: "2",
      username:"admin",
      stem: "How are you feeling",
      CategoryName: "Icebreakers",
      optionArray: [
        {
          id: 101,
          optionText: "option1",
          optionWeightage: "60"
        },
        {
          id: 102,
          optionText: "option1",
          optionWeightage: "60"
        },
        {
          id: 103,
          optionText: "option1",
          optionWeightage: "100"
        },
        {
          id: 104,
          optionText: "option1",
          optionWeightage: "60"
        }
      ]
    },
    {
      id: "3",
      username:"admin",
      stem: "Do you have working expereince",
      CategoryName: "Experience",
      optionArray: [
        {
          id: 101,
          optionText: "option1",
          optionWeightage: "60"
        },
        {
          id: 102,
          optionText: "option1",
          optionWeightage: "60"
        },
        {
          id: 103,
          optionText: "option1",
          optionWeightage: "60"
        },
        {
          id: 104,
          optionText: "option1",
          optionWeightage: "100"
        }
      ]
    },
    {
      id: "13",
      username:"admin",
      stem: "Do you think you are qualified enough for this position",
      CategoryName: "Experience",
      optionArray: [
        {
          id: 101,
          optionText: "option1",
          optionWeightage: "60"
        },
        {
          id: 102,
          optionText: "option1",
          optionWeightage: "60"
        },
        {
          id: 103,
          optionText: "option1",
          optionWeightage: "60"
        },
        {
          id: 104,
          optionText: "option1",
          optionWeightage: "60"
        }
      ]
    }
  ]);
  },[]);
  const checkOptions=(optionArray)=>{
   
    maxOption.current=optionArray[1];
    console.log("admin-option got are",optionArray);
optionArray.map((option,index)=>{
   
if(parseInt(option.optionWeightage) > parseInt(maxOption.current.optionWeightage))
{
    console.log("admin-option changed",option);
    maxOption.current=optionArray[index];
}else{}
});
console.log("admin-result max is",maxOption.current);
}
    return (
    <div className='a-category-page'>
        <h3>{categoryName.name} Cateogry</h3>
        <div className='admin-interviewTemplatemainmenu-container'>
        {questions.map((question,index)=>{
            if(question.optionArray.length!==0){
            checkOptions(question.optionArray);}else{}
            return(
                <div className='admin-template-interview-question'>
                   
                <p>{index+1}. {question.stem}?</p>
                <ul>
                {question.optionArray.map((option)=>{
                     return(
                         <>
                        {(maxOption.current==option) ?(
                        <li className='admin-correct-option'>{option.optionText}<div id="admin-tick-mark"></div></li>):(<li>{option.optionText}</li>)}
                            </>
                     )
                })}</ul>
                </div>
            )
        })}
        </div>
        </div>
  )
}
