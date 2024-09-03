// import React, { useEffect, useState } from 'react';
// import Task from './Task';


const Tasks = ({ tasks, handleSubmit, handleChange, todos, handleDelete }) => {

 
  return (
    <div className='tasks'>
        <form onSubmit={handleSubmit}> 
          <fieldset>
            <legend>Add Tasks</legend> 
              <input 
                  type='text' 
                  placeholder='Add task' 
                  value={tasks} 
                  onChange={handleChange}                  
              />
              <button>Add</button>  
            </fieldset>          
        </form>
      <ul>
        {todos.length > 0 ?
        todos.map((item) => <li key={item.id}>{item.text}</li> ) 
        : 
        "No Task to show"
        }
      </ul>
      
    </div>
  )
}

export default Tasks
