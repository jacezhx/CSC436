import React from 'react'
import ShowPost from './ShowPost'

export default function ToDoList ({posts,dispathPosts}) {
     return (
      <div>
       <h2>My List</h2>
       {posts.map((p, i) => <ShowPost uuid ={p.uuid} title={p.title} content={p.content} dateCreated ={p.dateCreated} isComplete ={p.isComplete} dateCompleted = {p.dateCompleted} dispathPosts ={dispathPosts}  key={'post-' + i} />)}
      </div> 
      )
}
    