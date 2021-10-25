import React, { useState,useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'

export default function ShowPost ({title, content, dateCreated, isComplete, dateCompleted, postId}) {

  const{dispatch} = useContext(StateContext)

  const [delpost , deletePost ] = useResource((postId) => ({
    url: `/posts/${postId}`,
    method: 'delete',
}))
const [updpost , updatePost ] = useResource(({ title, content,isComplete,dateCompleted,postId}) => ({
    url: `/posts/${postId}`,
    method: 'put',
    data: {title,content,isComplete,dateCompleted }
}))

function handleDelete (e) {
    e.preventDefault();
    //update db.json
    deletePost(postId)
    //update posts array in state
    dispatch({ type: 'DELETE_TODO', postId })
}
const handleComplete = () =>{
    var day = new Date();
    var date = day.getFullYear()+'/'+(day.getMonth()+1)+'/'+day.getDate();
    const nowdate = !isComplete ? date:''
    updatePost({title: title, content: content, isComplete: !isComplete, dateCompleted: nowdate, postId: postId})
    dispatch({type:'TOGGLE_TODO',postId})
    
}
  return (
       <div>
           <br></br>
        <label>Title:&nbsp;</label><b>{title}</b>
        <br/>
        <label>Description:</label><b>{content}</b>
        <br/>
        <label>DateCreated:</label><b>{dateCreated}</b>
        <br/>
        <label>Is Complete</label>
        <input type ="checkbox" checked ={isComplete} onChange ={handleComplete}/>
        <br/>
        <label>DateCompleted:</label><b>{dateCompleted}</b> 
        <br></br>
        <button onClick ={handleDelete}>Delete Todo</button>
        <br></br> 
      </div> 
      
 )
}