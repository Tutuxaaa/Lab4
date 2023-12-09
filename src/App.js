import React, { useState } from 'react'
import './App.css';
import Header from './components/Header/Header'
import AddToDo from './components/AddToDo/AddToDo'
import ToDoList from './components/ToDoList/ToDoList'
import {Container} from 'react-bootstrap'

function App() {
    const [todo, setTodo] = useState([
        {
            id:1,
            title: "first todo",
            status: true
        },
        {
            id:2,
            title: "second todo",
            status: true
        },
        {
            id:3,
            title: "third todo",
            status: false
        }
    ])

  return (
    <Container>
      <Header />
      <AddToDo todo={todo} setTodo={setTodo}/>
      <ToDoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
