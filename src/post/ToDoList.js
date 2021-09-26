import React from 'react'
import ShowPost from './ShowPost'

export default function ToDoList ({toDoList}) {
     return (
      <div>
       {toDoList.map((p, i) => <ShowPost title={p.title} content={p.content} dateCreated ={p.dateCreated}  key={'post-' + i} />)}
      </div> 
      )
}
    