import React, { useContext } from 'react'
// import CreatePost from '../CreatePost'
import UserBar from '../user/UserBar'
import Header from '../Header'
import ChangeTheme  from '../ChangeTheme'
import { ThemeContext,StateContext } from '../Contexts'
import { Link } from 'react-navi'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function HeaderBar ({setTheme }) {
    const theme = useContext(ThemeContext)
    const {state} = useContext(StateContext)
    const {user} = state;

    return (
        <>
            {/* <Header text = "My Blog"/>
            <ChangeTheme theme={theme} setTheme={setTheme} />
            <h1>My Todo List</h1>
            {user && <Link href="/post/create">Create New Post</Link>}
            <UserBar/> */}
             <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><Header text="My Blog" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user && <Nav.Link><Link href="/post/create">Create New Post</Link></Nav.Link>}
              <ChangeTheme theme={theme} setTheme={setTheme} />
            </Nav>
          
              <UserBar />
           
          </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}