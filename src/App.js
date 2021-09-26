
import UserBar from "./user/UserBar";
import ShowPost from "./post/ShowPost";
import ToDoList from "./post/ToDoList";
import React,{useState} from "react";
import AddPost from "./post/AddPost";
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
  const[toDoList,setToDoList] = useState([]);
  const[title,setTitle] = useState('')
  const[content,setContent] = useState('')

  const handleAddpost = (t,c) =>{
    setTitle(t);
    setContent(c);
    const p = {
      title: t,
      content: c,
      dateCreated: Date.now(),
      dateCompletd: Date.now()
    }

    setToDoList(toDoList=>[...toDoList, p]);
  }
  

  return (
    <div>
      <h1>My Todo List</h1>
      <UserBar sendAddpost = {(title,content) =>{handleAddpost(title,content);}}/>
      <h2>List</h2>
      <ToDoList toDoList ={toDoList}/>
  
    </div>
    
  )
}
export default App;
