import React,{useState,useEffect} from 'react'
import { useContext } from 'react/cjs/react.development';
import { useResource } from 'react-request-hook';
import { StateContext } from '../Contexts';

export default function Register() {
  const {dispatch} = useContext(StateContext)
  const[userRegisterInfo,setUserRegisterInfo] = useState({
    username:"",
    password:"",
    passwordRepeat:""
  })
  const [ user, register ] = useResource((username, password) => ({
    url: '/users',
    method: 'post',
    data: { username, password }
  }))
  
  useEffect(() => {
    if (user && user.data) {
        dispatch({ type: 'REGISTER', username: user.data.username })
    }
  }, [user])


  return (
    <form onSubmit={e => {e.preventDefault(); register(userRegisterInfo.username,userRegisterInfo.password)}}>
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