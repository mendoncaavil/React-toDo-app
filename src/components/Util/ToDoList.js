import React, {useState, useEffect} from "react";
import ListItem from "./ListItem";
import './ToDoList.css'

const Locale_Storage_Key = "react-app-todos" 


function ToDoList(props){

    // This is state variable - React changes this variable. So we need to create this.
const [todos, setTodos] = useState([]);

useEffect(()=>{
  const storedTodos = JSON.parse(localStorage.getItem(Locale_Storage_Key));
  if(storedTodos) setTodos(storedTodos);
}, []);

useEffect(()=>{
  if(todos.length > 0)
  localStorage.setItem(Locale_Storage_Key, JSON.stringify(todos));
},[todos])

  function deleteItem(id){
    setTodos(todos.filter((todo)=> todo.id !==id))
  }

  const [todoInput, setTodoInput] = useState()

  const handleInput = (e) => {
    // console.log(e.target.value)
    setTodoInput(e.target.value)
  }


  const handleSubmit = (e) => {
    if (todoInput == "") return;

    setTodos([{ id: Math.random() * 10000, text: todoInput }, ...todos,]);
    setTodoInput("");
  };

    return (
      <div className="list-container">
        <div className="toDo-input-form">       
          <input type="text" placeholder="Add a ToDo" onChange={handleInput} value={todoInput} />
          <button onClick={handleSubmit} >Add your ToDo</button>
        </div>
        {todos.map((todo) => (
          <ListItem text={todo.text} id={todo.id} deleteItem={deleteItem}/>
        ))}
      </div>
    );
}

export default ToDoList 