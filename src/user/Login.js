import React, { useState } from 'react'

export default function Login(props) {
    const[loginInfo,setLoginInfo] = useState({
        username: "",
        password:""
    })
    const handleUsernameChange =(evt)=>{
        setLoginInfo({...loginInfo,username:evt.target.value})
        
    }
    const handlePasswordChange=(evt) =>{
        setLoginInfo({...loginInfo,password:evt.target.value})

    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        props.handleLogin(loginInfo.username,loginInfo.password)

        
    }
   return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" id="login-username" value ={loginInfo.username} onChange = {handleUsernameChange}/>
            <label htmlFor="login-password">Password:</label>
            <input type="text" name="login-password" id="login-password" value ={loginInfo.password} onChange = {handlePasswordChange}/>
            <input type="submit" value="Login" />
        </form>
    )
}