import React, { useState } from 'react';

const ToDo = ({ AddTask }) => {
  const [todo, setTodo] = useState('');

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className='todo'>
      <input
        type='text'
        value={todo}
        onChange={handleInputChange}
        placeholder='Enter something...'
      />
      <button onClick={() => AddTask(todo)}>Add</button>
      
    </div>
  );
};

export default ToDo;
