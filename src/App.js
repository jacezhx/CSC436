
import UserBar from "./user/UserBar.js";
import React,{useReducer, useState} from "react";
import userReducer from "./userReducer.js"
import postReducer from "./postReducer.js"


function App() {
  // const posts = [
  //   {
  //     title:"My post",
  //     content: "My first to do",
  //     isComplete: "yes",
  //     dateCreated: "1/1/2021",
  //     dateCompleted: "2/1/2022"
  //   },  {
  //     title:"My post",
  //     content: "My first to do",
  //     isComplete: "yes",
  //     dateCreated: "1/1/2021",
  //     dateCompleted: "2/1/2022"
  //   },  {
  //     title:"My post",
  //     content: "My first to do",
  //     isComplete: "yes",
  //     dateCreated: "1/1/2021",
  //     dateCompleted: "2/1/2022"
  //   }
  // ]
  const[user,dispatchUser] = useReducer(userReducer,'');
  const[posts,dispatchPosts] = useReducer(postReducer,[]);

  return (
    <div className = "app">
      <h1>My Todo List</h1>
      <UserBar user={user} posts ={posts} dispatchUser={dispatchUser} dispatchPosts={dispatchPosts}/>
      {/* <h2>List</h2>
      <ToDoList toDoList ={toDoList}/> */}
    </div>
    
  )
}
export default App;
