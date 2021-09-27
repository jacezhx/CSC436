import React, { useState } from 'react'

export default function ShowPost ({ title, content, dateCreated}) {
  const[dateCompleted,setDateCompleted] = useState()
  const[isComplete,setIsCompleted] = useState(false)

  const handleComplete = () =>{
    setIsCompleted(!isComplete);
    if(!isComplete){
      setDateCompleted(dateCreated)
    }else{
      setDateCompleted("N/A")
    }
  }

  return (
       <div>
           <br></br>
        <label>Title:&nbsp;</label><b>{title}</b>
        <br/>
        <label>Description:</label><b>{content}</b>
        <br/>
        {/* <label>IsComplete:</label><b>{isComplete}</b>
        <br/> */}
        <label>DateCreated:</label><b>{dateCreated}</b>
        
        <br/>
        <label>Is Complete</label>
        <input type ="checkbox" onChange={handleComplete}/>
        <br/>
        
        <label>DateCompleted:</label><b>{dateCompleted}</b> 
       
        <br></br> 
      </div> 
      
 )
}