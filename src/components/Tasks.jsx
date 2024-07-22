import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, handleSubmit, handleChange, todos, handleDelete, onToggle }) => {
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
        todos.map((todo) => <Task 
          todo={todo} 
          handleDelete={handleDelete} 
          key={todo.id}
          onToggle={onToggle}
        />) 
        : 
        "No Task to show"
        }
      </ul>
    </div>
  )
}

export default Tasks
