
import UserBar from "./user/UserBar.js";
import React,{useReducer, useState, useEffect} from "react";

import appReducer from "./reducers"
import { useResource } from 'react-request-hook';

import{ThemeContext,StateContext} from './Contexts'
import{mount,route} from 'navi';
import { Router,View } from "react-navi";
import Header from "./Header.js";
import ChangeTheme from './ChangeTheme';
import HeaderBar from "./pages/HeaderBar.js";
import HomePage from "./pages/HomePage.js";
import AddPost from "./post/AddPost.js";
import PostPage from "./pages/PostPage.js";
import UserPage from "./pages/UserPage.js";
import {Container, Row, Col} from 'react-bootstrap'




function App() {

  // const [ posts, getPosts ] = useResource(() => ({
  //   url: '/posts',
  //   method: 'get'
  // }))
  
  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: [], accounts: []})
  const {user} = state;
  const [ theme, setTheme ] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
 })
 const routes = mount({
  '/': route({ view: <HomePage /> }),
  '/post/create':route({ view: <AddPost/> }),
  '/post/:id': route(req => {
      return { view: <PostPage id={req.params.id} /> }
  }),
  '/users': route({view: <UserPage />})
})
  return (
    <div className = "app">
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value ={{state:state,dispatch:dispatch}}>
          <Router routes={routes}>
            <Container>
                <HeaderBar setTheme={setTheme} />
                <hr />
                <View />
            </Container>
          </Router>
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}
export default App;
