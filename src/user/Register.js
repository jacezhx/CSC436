import React,{useState} from 'react'

export default function Register({dispatchUser}) {
  const[userRegisterInfo,setUserRegisterInfo] = useState({
    username:"",
    password:"",
    passwordRepeat:""
  })


  return (
    <form onSubmit={e => {e.preventDefault(); dispatchUser({type:"REGISTER", username:userRegisterInfo.username}); }}>
      <br/>
          <label htmlFor="register-username">Username:</label>
          <input type="text" name="register-username" id="register-username"value ={userRegisterInfo.username} onChange = {e => setUserRegisterInfo({...userRegisterInfo,username:e.target.value})} />

          <label htmlFor="register-password">Password:</label>
          <input type="password" name="register-password" id="register-password" value ={userRegisterInfo.password} onChange = {e => setUserRegisterInfo({...userRegisterInfo,password:e.target.value})} />

          <label htmlFor="register-password-repeat">Repeat password:</label>
          <input type="password" name="register-password-repeat" id="register-password-repeat" value ={userRegisterInfo.passwordRepeat} onChange ={e => setUserRegisterInfo({...userRegisterInfo,passwordRepeat:e.target.value})}/>
          
          <input type="submit" value="Register" disabled ={userRegisterInfo.username.length === 0 || userRegisterInfo.password.length === 0|| userRegisterInfo.password !== userRegisterInfo.passwordRepeat} />
      </form>
  )
}