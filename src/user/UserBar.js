import React, { useState } from 'react'

import Logout from './Logout'
import Register from './Register'
import Login from './Login'
import AddPost from'../post/AddPost'

export default function UserBar({sendAddpost}) {
  
  const[user,setUser] = useState('')
  const[password,setPassword] = useState('')
  const[title,setTitle] = useState('')
  const[content,setContent] = useState('')

  const handleLogin = (un,pass)=>{
    setUser(un)
    setPassword(pass)
  }
  const handleRegister = (value) =>{}
  const handleLogout = () =>{
    setUser('')
    setPassword('')
  }
  const handleAddpost = (t,c) =>{
    sendAddpost(t,c);
  }
  
  if (user) {
    
      return (
        <div>
          <Logout user={user} 
          handleLogout={handleLogout}/>
          <br></br>
          <AddPost handleAddpost = {(title,content) =>{handleAddpost(title,content);}}/>
        </div>
      )

  } else {
      return (
          <div>
            <Login handleLogin = { (user, password) => {handleLogin(user,password);}}/>
            <Register handleRegister ={(value) =>{handleRegister(value)}}/>
            
          </div>
      )
     
  }
}