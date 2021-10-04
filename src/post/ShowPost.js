import React, { useState } from 'react'

export default function ShowPost ({uuid, title, content, dateCreated,isComplete,dateCompleted,dispathPosts}) {


  const handleComplete = () =>{
      dispathPosts({type:'TOGGLE_TODO',uuid})
  }
  const handleDelete =() => {
      dispathPosts({type:'DELETE_TODO',uuid})
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
        <input type ="checkbox" checked ={isComplete} onChange={handleComplete}/>
        <br/>
        
        <label>DateCompleted:</label><b>{dateCompleted}</b> 
        <br></br>

        <button onClick ={handleDelete}>Delete</button>
       
        <br></br> 
      </div> 
      
 )
}