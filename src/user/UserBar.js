import React, { useContext, useState } from 'react'
import { Link } from 'react-navi'

import Logout from './Logout'
import Register from './Register'
import Login from './Login'
import AddPost from'../post/AddPost'
import ToDoList from '../post/ToDoList'
import { StateContext } from '../Contexts'
import { Button } from 'react-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function UserBar() {
  const{state} = useContext(StateContext)
  const{user}  = state;

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  

  if (state.user) {
      return (
        // <div>
          <Logout/>
        //   {/* <Link href="/post/create">Create New Post</Link>
        //   <br></br>
        //   <AddPost />
        //   <ToDoList /> */}
        // </div>
      )

  } else {
      return (
          // <div>
          //   <Login/>
          //   <Register/>
          // </div>
        <div className="justify-content-end">
          <Button variant="link" onClick={(e) => setShowLogin(true)}>
              Login
          </Button>
          <Login show={showLogin} handleClose={() => setShowLogin(false)} />
          <Button variant="link" onClick={(e) => setShowRegister(true)}>
              Register
          </Button>
          <Register show={showRegister} handleClose={() => setShowRegister(false)} />
          <Nav.Link><Link href="/users">ShowAllUser</Link></Nav.Link>
      </div>

      )
     
  }
}