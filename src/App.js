
import React, { useState } from 'react';
import styled from "styled-components";
import ToDo from './components/ToDo';
import ToDoListItem from './components/ToDoList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//rotas
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
//componentes
import Navbar from './components/Navbar';
// import Footer from './components/Footer/Footer';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function App() {



const [todos, setTodos] = useState([{todo:'wa'}]);

const AddTask = (TODO) => {
  setTodos([...todos, { todo: TODO }]);
  // setTodo('');
};


const editToDo = (editedTodo, index) => {
  const updatedTodos = [...todos];
  updatedTodos[index].todo = editedTodo;
  setTodos(updatedTodos);

};

// editItem = (index) => {
//   const todos = [...this.state.list];
//   const editedTodo = prompt('Edit the todo:');
//   if (editedTodo !== null && editedTodo.trim() !== '') {
//     let updatedTodos = [...todos]
//     updatedTodos[index].value= editedTodo
//     this.setState({
//       list: updatedTodos,
//   });
//   }
// }

const deleteToDo = (todoToDelete) => {
  setTodos(todos.filter(todo => todo !== todoToDelete));
};


return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="todo" element={ 
          <div>
             <Navbar />
          <ToDo AddTask={AddTask} deleteToDo= {deleteToDo} />
          {todos.map((todo, index) => (
                 
                 <ToDoListItem  todo={todo} index ={index} editToDo={editToDo} deleteToDo={deleteToDo} />
       
               
                  ))}</div>
} />

 <Route path="" element ={
  <div>
    
    <Navbar />

        
 <Home/>
  </div>
 }  />
      </Routes>
    </BrowserRouter>

      {/* <Footer /> */}
    </>

  );
}

export default App;