import React, { useState,useContext } from 'react'
import { ThemeContext,StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import{ Link } from 'react-navi'
import { Card } from 'react-bootstrap'

export default function ShowPost ({title, content, dateCreated, isComplete, dateCompleted, postId,short = false}) {
  const theme = useContext(ThemeContext)
  const{dispatch} = useContext(StateContext)

  let processedContent = content

  if (short) {
       if (content.length > 30) {
            processedContent = content.substring(0, 30) + '...'
       }
  }

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
      //  <div>
      //      <br></br>
      //   {/* <h3 style={{ color: theme.primaryColor }}>{title}</h3> */}
      //   <label>Title:</label><Link style={{ color: theme.secondaryColor }} href={`/post/${postId}`}>{title}</Link>
      //   <br/>
      //   <label>Description:</label><b>{processedContent}</b>
      //   <br/>
      //   <label>DateCreated:</label><b>{dateCreated}</b>
      //   <br/>
      //   <label>Is Complete</label>
      //   <input type ="checkbox" checked ={isComplete} onChange ={handleComplete}/>
      //   <br/>
      //   <label>DateCompleted:</label><b>{dateCompleted}</b> 
      //   <br></br>
      //   <button onClick ={handleDelete}>Delete Todo</button>
      //   <br></br> 
      //   {short && 
      //     <div>
      //       <br/>
      //       <Link href={`/post/${postId}`}>View full post</Link>
      //     </div>}
      //   <hr/>
      // </div> 
      <Card>
        <Card.Body>
          <Card.Title>
          <label>Title:</label>
          <Link style={{ color: theme.secondaryColor }} href={`/post/${postId}`}>{title}</Link>
          </Card.Title>
          <Card.Subtitle>
              <br/>
            <label>Description:</label><b>{processedContent}</b>
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
            {short && 
            <div>
              <br/>
              <Link href={`/post/${postId}`}>View full post</Link>
            </div>}

          </Card.Subtitle>

        </Card.Body>
      </Card>
      
 )
}