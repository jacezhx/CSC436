import React ,{useState,useEffect, useContext} from 'react';
import { StateContext } from '../Contexts';
import { useResource } from 'react-request-hook';
import{ useNavigation } from 'react-navi'


export default function AddPost () {
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    const {state,dispatch} = useContext(StateContext)
    const {user} = state;
    const navigation = useNavigation()

    const [newpost , createPost ] = useResource(({ title, content,dateCreated,isComplete,dateCompleted}) => ({
        url: '/posts',
        method: 'post',
        data: {title,content,dateCreated,isComplete,dateCompleted }
    }))
    
    useEffect(() => {
        if (newpost && newpost.data) {
            dispatch({type: 'CREATE_POST', title: newpost.data.title, content: newpost.data.content, id: newpost.data.id})
            console.log(newpost.data)
            navigation.navigate(`/post/${newpost.data.id}`)
        }
    }, [newpost])



 function handleCreate (e) {
        e.preventDefault();
        //update db.json
        createPost({ title:title, content:content, dateCreated: Date(Date.now()),isComplete:false, dateCompleted:null })
        //update posts array in state
        dispatch({ type: 'CREATE_POST', title, content })
    }

    return (
        <form onSubmit={handleCreate}>
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

