
import UserBar from "./user/UserBar.js";
import React,{useReducer, useState,useEffect} from "react";
import userReducer from "./userReducer.js"
import postReducer from "./postReducer.js"
import appReducer from "./reducers"
import { useResource } from 'react-request-hook';

import{StateContext} from './Contexts'


function App() {

  const [ posts, getPosts ] = useResource(() => ({
    url: '/posts',
    method: 'get'
  }))
  
  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: [] })
  const {user} = state;

  useEffect(getPosts, [])

  useEffect(() => {
      if (posts && posts.data) {
          dispatch({ type: 'FETCH_POSTS', posts: posts.data })
      }
  }, [posts])

  return (
    <div className = "app">
      <StateContext.Provider value ={{state:state,dispatch:dispatch}}>
      <h1>My Todo List</h1>
      <UserBar/>
      </StateContext.Provider>
    </div>
    
  )
}
export default App;
