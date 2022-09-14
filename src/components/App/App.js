import React from "react";
import ToDoList from "../Util/ToDoList";

const body = {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    padding: "10px",
}



const ToDoListContainer = {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'aqua',
  borderRadius: '10px',
  width: '400px',
}
// This is normal variable. It doesnt change.
// const todos = [
//   {
//       id:1,
//       text: 'learn react',
//       isCompleted: false
//   },
//   {
//       id:2,
//       text: 'learn mern',
//       isCompleted: false
//   },
//   {
//       id:3,
//       text: 'learn mongodm',
//       isCompleted: false
//   },
//   {
//       id:4,
//       text: 'learn appledc',
//       isCompleted: false
//   }
// ]




function App(){
  return(
    <div style={body}>
      <div style={ToDoListContainer}>
          <h1>To Do List</h1>   
         <ToDoList/>       
      </div>
    </div>
  )
}

export default App