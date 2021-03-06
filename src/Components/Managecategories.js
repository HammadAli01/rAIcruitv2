import React,{useState,useEffect,useCallback} from 'react'
import './Managecategories.css'
import {useNavigate} from 'react-router-dom';
import  axios  from 'axios'
export default function Managecategories() {
    const navigation = useNavigate();
    const handlePageSubmit = useCallback(() => navigation('/categoryView', {replace: true}), [navigation]);
const [category,setCategory]=useState("");
//when admin logged in get categories and store in localstorage and get them here window.localStorage.getItem("admincategories");
const getAllCategories=async()=>{
    console.log("get categories called"); 
    const response = await axios.post(`${process.env.REACT_APP_API_KEY}/Category/get/all`).catch((err) => 
    { alert("Server down kindly try again") });
     if (response) { 
       console.log("cateogires got are",response.data); 
       setCategories(response.data); 
     }
};
useEffect(()=>{
   getAllCategories();
// setCategories([{id:1,name:"Experience"},
// {id:2,name:"Icebreaker"},
// {id:3,name:"Goals"},
// {id:4,name:"Organization"},
// {id:5,name:"Personal"},
// {id:6,name:"Work environment"},
// {id:7,name:"Education"}]);
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
        postCategory(category);
        
        setCategory("");
  }
    }
}
const postCategory=async(categoryName)=>{
    const name={name:categoryName};
//add api call category
console.log("Add category called"); 
const response = await axios.post(`${process.env.REACT_APP_API_KEY}/Category`,name).catch((err) => 
{ console.log("Error:", err); });
 if (response) { 
   console.log("category added is",response.data); 
 getAllCategories();
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
            {categories.length!==0?(
            categories.map((acategory,index)=>{
            return(
                <div className='ancategory' onClick={()=>handleCategorySelected(acategory)}>
                    <h5>{index+1}</h5>
                    <h6>{acategory.name}</h6>
                    </div>
            )
        })):(<div className='empty-questions'>No categories exist</div>)
}</div>
    </div>
  )
}
