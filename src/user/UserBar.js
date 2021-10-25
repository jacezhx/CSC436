import React, { useContext, useState } from 'react'

import Logout from './Logout'
import Register from './Register'
import Login from './Login'
import AddPost from'../post/AddPost'
import ToDoList from '../post/ToDoList'
import { StateContext } from '../Contexts'

export default function UserBar() {
  const{state} = useContext(StateContext)
  const{user}  = state;

  if (user) {
      return (
        <div>
          <Logout/>
          <br></br>
          <AddPost />
          <ToDoList />
        </div>
      )

  } else {
      return (
          <div>
            <Login/>
            <Register/>
          </div>
      )
     
  }
}