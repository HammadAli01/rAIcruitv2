import styles  from './QuestionBank.module.css';
import './Questionbank.css';
import React,{useState,useEffect,useRef} from 'react'
import {Form,Container,Row,Col,Button,Modal,InputGroup,FormControl,Dropdown, DropdownButton,Accordion} from 'react-bootstrap'
import {BsArrowRightShort,BsSearch} from 'react-icons/bs'
import  axios  from 'axios'

export default function Questionbank() {
  const logged_user=window.localStorage.getItem('user_Id');
    const [categories,setCategories]=useState([ ]);
    const [questions,setQuestions]=useState([]);
    const [userQuestions,setUserQuestions]=useState([
    ]);
    const [stem,setStem]=useState();
    const [question_weight,setQuestionWeightage]=useState(25);
    const [category,setCategory]=useState('');
    var count=1;
    //const loggeduser=JSON.parse(window.localStorage.getItem(user_Id));
    const loggeduser=window.localStorage.getItem('user_Id');
    const [addcount,setAddCount]=useState(1);
    
    const [optionList,setoptionList]=useState([{id:count,optionText: '',optionWeightage: '25'},{id:count,optionText: '',optionWeightage: '25'}]);
    const [modalFormData, setModalFormData] = useState({
      id: '',
      stem: '',
      CategoryName: '',
      optionArray: [
          {
              id:'',
              optionText: '',
              optionWeightage: ''
          }
      ],
      username:'',
      question_weight:'',
  });
  const [addQuestionType,setAddQuestionType]=useState('close ended');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [search,setSearch]=useState('');
    const handleOptionChange = (name,val, index) => 
    {
      const list = [...optionList];
      list[index][name] = val;
      setoptionList(list);
    };
    const handleStemChange=(e)=>{
      setStem(e.target.value);
     }
 useEffect(()=>{
  addModalData();
  
 },[addcount]);
    const addModalData = async () => 
    {
      const list={};
      console.log("Stem is: ",stem);
      console.log("Option array is: ",optionList);
      list['stem']=stem;
      if(addQuestionType==='close ended')
      {
        list['optionArray']=optionList;
      }
      else{
        list['optionArray']=[{}];
      }


    list['CategoryName']=category;
    list['user_id']=loggeduser;
    list['question_weight']=parseInt(question_weight);
    setModalFormData(list);
     //  event.preventDefault();
    if(!(modalFormData.stem===undefined || modalFormData.stem===''))
      {console.log("modal data in addatat ",list);
     //sending to api and refreshing
     const response = await axios.post(`${process.env.REACT_APP_API_KEY}/add/user/question`, list).catch((err) => 
      {
        alert("there was an error while adding question,Kindly try again");
    
      });
      if (response)  {
        console.log("reponse by post question is",response.data);
        getUserQuestions();
        handleClose();
        setModalFormData({
          id: '',
          stem: '',
          CategoryName: '',
          optionArray: [
              {
                  id:'',
                  optionText: '',
                  optionWeightage: ''
              }
          ],
          username:'',
          question_weight:''
      });
        setoptionList([{id:count,optionText: '',optionWeightage: '25'},{id:(count+1),optionText: '',optionWeightage: '25'}]);
        setStem('');
        setQuestionWeightage(25);
      }
      
    
      // console.log("arrays after save called","modal fromm data: ",modalFormData,
      // "optionList:",optionList,"stem is:",stem);
      }
      else{
        console.log("modal data is empty");
      }
      
    }
    const handleAddQuestionSubmit=()=>{
      console.log("handleaddsubmit called");
     // validateAddQuestionForm();
      addModalData(); 
      setAddCount(addcount+1);
    }
    const handleRemoveClick = index => 
    {
      const list = [...optionList];
      list.splice(index, 1);
      setoptionList(list);
    };

  // handle click event of the Add button
    const handleAddClick = (id) => 
    {
      count=Math.ceil(Math.random()*99999999);
    setoptionList([...optionList, {id:count, optionText: '', optionWeightage: '25' }]);
    };
    const getCategories = async () => {
       console.log("get categories called"); 
       const response = await axios.post(`${process.env.REACT_APP_API_KEY}/Category/get/all`).catch((err) => 
       { console.log("Error:", err);  alert("there was an error while getting categories from server,Kindly try again");});
        if (response) { 
          console.log("cateogires got are",response.data); 
          setCategories(response.data); 
        } };
    const getQuestions = async () => 
    {
      console.log("get admin questions called");
      const response =await axios.get(`${process.env.REACT_APP_API_KEY}/get/all/question/design`).then(response => {
        console.log("first response",response.data); 
        if(response){
          setQuestions(response.data.Questions);
    }else{
      console.log("Admin no questions found retainng none");
    }
    })
    .catch(error => {
      alert("there was an error while getting system questions from server,Kindly try again");
        console.error('There was an error!', error);
    });
    };
    const getUserQuestions = async () => 
    {
      console.log("get user questions called");
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/get/user/question/design?user_id=${logged_user}`).catch((err) => 
      {
        alert("there was an error while getting your questions data from server,Kindly try again");
      });
      if (response ) 
      {
        console.log("response of userques are",response.data.Questions);
        setUserQuestions(response.data.Questions);
      }
    };
      const onDragStart = (event,nodeType, questionId,questionStem,currentOptions,categoryName,userEmail,questionWeightage) => 
      {
        console.log("Ondragstart called(question ID):",questionId," question stem: ",questionStem,
        "thisCurrentoptions: ",currentOptions,"categoryName",categoryName,"userEmail",userEmail);
        event.dataTransfer.setData('application/reactflow',nodeType);
        event.dataTransfer.setData('questionid',questionId);
        event.dataTransfer.setData('questionstem',questionStem);
        event.dataTransfer.setData('currentoptions',JSON.stringify(currentOptions));
        event.dataTransfer.setData('category',categoryName);
        event.dataTransfer.setData('userEmail',userEmail);
        event.dataTransfer.setData('questionweightage',questionWeightage);
        
        event.dataTransfer.effectAllowed = 'move';
      };
      const doubleCaller=(name)=>{
        setCategory(name);
        handleShow();
        
      }
      //remove the below cmnt
      useEffect(() => {
        getCategories();
        getQuestions();
        getUserQuestions(); 

      },[]);
    return (
      <>
      <div className={styles.upperAdddiv}> 
        <div className={styles.addquestionDiv}>
         <div> <h3 className={styles.banktitle}>Question Bank</h3>
          < hr className={styles.dividerline}></hr>
          </div>
          <Accordion>
          {
          categories.map((category,index)=>{
            return(
            <Accordion.Item eventKey={index+""} >

              <Accordion.Header className={styles.accordion} id='accordion'> 
              <h5 className={styles.buttonHover}  > {category.name} </h5>
              </Accordion.Header>
            <Accordion.Body>
              <div className={styles.searchContainer}>
                
                <input className={styles.searchfield} type="text" placeholder= 'Search question' onChange={e=>setSearch(e.target.value)}></input>
                <BsSearch className={styles.searchIcon}></BsSearch>
                {/* <Button variant="primary" onClick={(e)=>{handleShow(); setCategory(category.name)}} className={styles.addbutton}>+</Button> 
               */}
              </div>
              <div className={styles.questions}>
                {questions.filter(question=>(question.CategoryName===category.name))
                .filter(question=>(question.stem.toLowerCase().includes(search.toLowerCase())))
                .map(question =><div > <h5  className={styles.questionstyle} key={question.id} onDragStart={(event) => 
                onDragStart(event, 'default',question.id,question.stem,question.optionArray,category.name,"",question.question_weight)} draggable>
                  {question.stem}</h5></div>)}
                
                <p className={styles.userquestionheader}>User Questions</p>
                {
                  userQuestions.filter(question=>question.CategoryName===category.name)
                  .filter(question=>(question.stem.toLowerCase().includes(search.toLowerCase())))
                  .map(question => <h5 className={styles.questionstyle} key={question.id } onDragStart={(event) => 
                  onDragStart(event, 'default',question.id,question.stem,question.optionArray,category.name,question.email,question.question_weight)} draggable>
                  {question.stem}
                  </h5>)
                }
              </div>
            </Accordion.Body>
            </Accordion.Item>
          )})}
          </Accordion>
      </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="add-question-modal"
        onSubmit={handleAddQuestionSubmit}
      >
        <Modal.Header closeButton>
        <Modal.Title>Add Question</Modal.Title>
        </Modal.Header>
          <Form>
            <Modal.Body > 
              
            <div classname='addmodalinflow'>   <div className='question-weight-btn'>
            <h6 className='myclasscateogry'>Category Name:</h6><label>{category}</label>
            </div>          
                <InputGroup>
                    <InputGroup.Text>Question</InputGroup.Text>
                    <FormControl as="textarea" name="stem" placeholder="Write your question here" 
                    onChange={handleStemChange} value={stem} required/>
                </InputGroup></div> 


                <div className="questionType">
                <label className={styles.questionTypeLabel} style={{marginTop:"8px"}}>Type: </label>
                <DropdownButton className={styles.questionDropdown}  title={addQuestionType}  name="addQuestionType"
                value={addQuestionType}  onSelect={e => {setAddQuestionType(e) }}>
                  <Dropdown.Item eventKey="open ended">open ended</Dropdown.Item>
                  <Dropdown.Item eventKey="close ended">close ended</Dropdown.Item>
                </DropdownButton><div className='weight-dp'><label className={styles.questionTypeLabel} style={{marginTop:"10px"}}>Weightage: </label>
                
                <DropdownButton id="dropdown-basic-button" title={question_weight}  name="question_weight"
                value={question_weight}  onSelect={e => setQuestionWeightage(e)} required className="newquestiondeightage" >
                          <Dropdown.Item eventKey="25">25</Dropdown.Item>
                          <Dropdown.Item eventKey="50">50</Dropdown.Item>
                          <Dropdown.Item eventKey="75">75</Dropdown.Item>
                          <Dropdown.Item eventKey="100">100</Dropdown.Item>
                          
                      </DropdownButton></div>

               
                </div>
{ addQuestionType==='close ended' &&
<div classname={styles.inflowoptionadd}>
<label style={{fontWeight:"500"}}>Options</label><br/>


                {optionList.map((T_option,i)=>(
                    <div key={T_option.id}>
                      <Form.Control  type="text" placeholder="Enter option here" name="optionText" value={T_option.optionText} 
                      onChange={e=> handleOptionChange(e.target.name,e.target.value,i)} required className="newquestioninputfield"/>
                      <div style={{display:"inline-flex",paddingTop:"5px"}}>
                       <h6 style={{marginLeft:"5%",marginTop:"3%",fontWeight: "400"}}>weightage</h6>  
                     <DropdownButton id="dropdown-basic-button" title={T_option.optionWeightage}  name="optionWeightage"
               value={T_option.optionWeightage} style={{marginLeft:"20px",marginRight:"20px"}} onSelect={e => handleOptionChange("optionWeightage",e, i)} required className="newquestiondeightage">
                <Dropdown.Item eventKey="25">25</Dropdown.Item>
                          <Dropdown.Item eventKey="50">50</Dropdown.Item>
                          <Dropdown.Item eventKey="75">75</Dropdown.Item>
                          <Dropdown.Item eventKey="100">100</Dropdown.Item>
                          
                      </DropdownButton>
                      <div className="add-question-btn-box">
                  {optionList.length !== 2 && <button
                  
                    className="add-question-optionremoveButton"
                    onClick={() => handleRemoveClick(i)}>-</button>}
                  {optionList.length - 1 === i && <button className="add-question-optionaddbutton"
                  onClick={()=>handleAddClick(i)}>+</button>}
                </div>
                      </div>
                      </div>   
                ))}
                </div>
}
                
            
            </Modal.Body>
          </Form>
        <Modal.Footer>
          <Button type="submit" onClick={handleAddQuestionSubmit} >Save</Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}
//onClick={(e)=>{addModalData(); setAddCount(addcount+1)}}