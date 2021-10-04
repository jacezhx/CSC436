import React ,{useState,useEffect} from 'react';

export default function AddPost ({dispatchPosts}) {
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')

  
    return (
        <form onSubmit={e => {e.preventDefault(); dispatchPosts({type: "CREATE_POST", title: title, content: content})}}>
        <h3>Enter Your ToDo</h3>
        <label htmlFor="create-title">Title: &nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input type="text"  name="create-title" id="create-title" value ={title} onChange={e => setTitle(e.target.value)}/>
        <br></br>
        <br></br>
        <label htmlFor="create-content">Content:&nbsp;</label>
        <textarea type ="text" value = {content} onChange={e => setContent(e.target.value)}/>
        <input type="submit" disabled={!title} value="Create"/>
    </form>
    )
}

