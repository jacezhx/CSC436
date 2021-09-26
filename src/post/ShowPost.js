import React from 'react'

export default function ShowPost ({ title, content, dateCreated}) {
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
        {/* <br/> */}
        {/* <label>DateCompleted:</label><b>{dateCompleted}</b>
        <br></br> */}
      </div> 
      
 )
}