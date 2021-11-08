import React,{useState,useEffect} from 'react'
import { useContext } from 'react/cjs/react.development';
import { useResource } from 'react-request-hook';
import { StateContext } from '../Contexts';
import {Form, Modal, Button} from 'react-bootstrap'

export default function Register({show, handleClose}) {
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
    <Modal show={show} onHide={handleClose}>
    <Form onSubmit={e => { e.preventDefault(); register(userRegisterInfo.username, userRegisterInfo.password); handleClose(); }}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form.Label htmlFor="register-username">Username:</Form.Label>
          <Form.Control type="text" name="register-username" id="register-username"value ={userRegisterInfo.username} onChange = {e => setUserRegisterInfo({...userRegisterInfo,username:e.target.value})} />

          <Form.Label htmlFor="register-password">Password:</Form.Label>
          <Form.Control type="password" name="register-password" id="register-password" value ={userRegisterInfo.password} onChange = {e => setUserRegisterInfo({...userRegisterInfo,password:e.target.value})} />

          <Form.Label htmlFor="register-password-repeat">Repeat password:</Form.Label>
          <Form.Control type="password" name="register-password-repeat" id="register-password-repeat" value ={userRegisterInfo.passwordRepeat} onChange ={e => setUserRegisterInfo({...userRegisterInfo,passwordRepeat:e.target.value})}/>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" type="submit" disabled={userRegisterInfo.username.length === 0 || userRegisterInfo.password.length === 0 || userRegisterInfo.password !== userRegisterInfo.passwordRepeat}>Register</Button>
        </Modal.Footer>
      </Form>
    </Modal>

  )
}