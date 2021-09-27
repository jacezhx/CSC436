import React,{useState} from 'react'

export default function Register(props) {
  const[userRegisterInfo,setUserRegisterInfo] = useState({
    username:"",
    password:""
  })
  const handleUserRegisterUserChange=(evt)=>{
    setUserRegisterInfo({...userRegisterInfo,username:evt.target.value})
    
}
const handleUserRegisterPassChange=(evt) =>{
    setUserRegisterInfo({...userRegisterInfo,password:evt.target.value})

}
  const handleSubmit = (e) => {
    e.preventDefault(); 
    props.handleRegister(userRegisterInfo.username,userRegisterInfo.password) 
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <br/>
          <label htmlFor="register-username">Username:</label>
          <input type="text" name="register-username" id="register-username"value ={userRegisterInfo.username} onChange = {handleUserRegisterUserChange} />

          <label htmlFor="register-password">Password:</label>
          <input type="password" name="register-password" id="register-password" value ={userRegisterInfo.password} onChange = {handleUserRegisterPassChange} />

          <label htmlFor="register-password-repeat">Repeat password:</label>
          <input type="password" name="register-password-repeat" id="register-password-repeat" />
          
          <input type="submit" value="Register" />
      </form>
  )
}