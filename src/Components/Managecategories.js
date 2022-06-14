import React,{useState,useEffect,useCallback} from 'react'
import './Managecategories.css'
import {useNavigate} from 'react-router-dom';
export default function Managecategories() {
    const navigation = useNavigate();
    const handlePageSubmit = useCallback(() => navigation('/categoryView', {replace: true}), [navigation]);
const [category,setCategory]=useState("");
//when admin logged in get categories and store in localstorage and get them here window.localStorage.getItem("admincategories");
useEffect(()=>{
    // const response = await axios.get("https://raicruittest.herokuapp.com/get/all/question").catch((err) => {
//   console.log("Error:", err);
// });
// if (response ) {
//     setCategories(response.data.Questions);
// }
setCategories([{id:1,name:"Experience"},
{id:2,name:"Icebreaker"},
{id:3,name:"Goals"},
{id:4,name:"Organization"},
{id:5,name:"Personal"},
{id:6,name:"Work environment"},
{id:7,name:"Education"}]);
},[]);
const [categories,setCategories]=useState([]);


const [categoryError,setCategoryError]=useState();
const categoryHandler=(e)=>{
    setCategory(e.target.value);
}
const handleCategoryAdd=()=>{
    console.log("add ",category.length);
    if(category.length<1){
        setCategoryError("Cateogry Name is required");
    }
    else{
        let is_existing=false;
        setCategoryError("");
        categories.map((current_category)=>{
if(current_category.name==category){
    setCategoryError("Category already exists");
    is_existing=true;
}
else{
}
        });
        if(is_existing===false){
            console.log("UNEXPECTED IN",is_existing);
            setCategoryError("");
        setCategories([...categories,{id:(categories.length+1),name:category}]);
        //add cateogry api call with name category_Name:""
        setCategory("");
  }
    }
}
const handleCategorySelected=(category)=>{
    window.localStorage.setItem('SelectedCategory',JSON.stringify(category));
    handlePageSubmit();
}
  return (
    <div className='managecategories'>
        <div className='addcategory-container'>
            <h3>Add Cateogry</h3>
            <input placeholder='Enter Category Name' value={category} onChange={(e)=>categoryHandler(e)} required></input>
            <button onClick={()=>{handleCategoryAdd()}}> <span>Add </span></button>
            {categoryError &&<p>{categoryError}</p>}
        </div>
        <div className='categories-container' >
            <h3>Categories</h3>
            {categories.map((acategory,index)=>{
            return(
                <div className='ancategory' onClick={()=>handleCategorySelected(acategory)}>
                    <h5>{index+1}</h5>
                    <h6>{acategory.name}</h6>
                    </div>
            )
        })
}</div>
    </div>
  )
}
