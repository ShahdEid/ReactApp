// import React from 'react';
// import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';

const ToDoListItem = ({ todo, index, editToDo, deleteToDo }) => {
    const [edit, setEdit] = React.useState('true');
    
    return (
        <div key={index}>
         
          {edit ? 
          <input
            type='text'
            value={todo.todo}
            onChange={(e) => editToDo(e.target.value, index)}
          /> : <div> {todo.todo} </div> } 
          <button onClick={() => deleteToDo(todo)}>Delete</button>
          <button onClick={() => setEdit(!edit)}>
          {edit ? 'Save' : 'Edit'}
      </button>
        </div>
  );

 
};

export default ToDoListItem;
