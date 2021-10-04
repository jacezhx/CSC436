import React, { useState } from 'react'

import Logout from './Logout'
import Register from './Register'
import Login from './Login'
import AddPost from'../post/AddPost'
import ToDoList from '../post/ToDoList'

export default function UserBar({user,posts,dispatchUser,dispatchPosts}) {

  if (user) {
      return (
        <div>
          <Logout user={user} 
          dispatchUser={dispatchUser} />
          <br></br>
          <AddPost dispatchPosts ={dispatchPosts}/>
          <ToDoList posts = {posts} dispathPosts ={dispatchPosts}/>
        </div>
      )

  } else {
      return (
          <div>
            <Login dispatchUser={dispatchUser} />
            <Register dispatchUser={dispatchUser} />
          </div>
      )
     
  }
}