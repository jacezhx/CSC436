import React ,{useState} from 'react';

export default function AddPost ({handleAddpost}) {
    const[userInput,setUserInput] = useState({
        title:"",
        content:""
    })
    const handleUserTitleInputChange =(evt)=>{
        setUserInput({...userInput,title: evt.target.value})
    }
    const handleUserContentInputChange =(evt)=>{
        setUserInput({...userInput,content: evt.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddpost(userInput.title,userInput.content);
        // console.log(userInput.title);
        // console.log(userInput.content);
        //setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="create-title">Title: &nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input type="text"  name="create-title" id="create-title" value ={userInput.title} onChange ={handleUserTitleInputChange}/>
        <br></br>
        <br></br>
        <label htmlFor="create-content">Content:&nbsp;</label>
        <textarea type ="text" value ={userInput.content} onChange = {handleUserContentInputChange}/>
        <input type="submit" disabled={!userInput.title} value="Add"/>
    </form>
    )
}

