import React from 'react'
import ShowPost from './ShowPost'
import { StateContext } from '../Contexts'
import { useContext } from 'react'

export default function ToDoList () {
      const{state} = useContext(StateContext)
      const{posts} = state
     return (
      <div>
       <h2>My List</h2>
       {posts.map((p, i) => <ShowPost title={p.title} content={p.content} dateCreated ={p.dateCreated} isComplete ={p.isComplete} dateCompleted = {p.dateCompleted} postId ={p.id} key={'post-' + i} />)}
      </div> 
      )
}
    