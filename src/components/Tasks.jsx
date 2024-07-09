import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, handleSubmit, handleChange, todos }) => {
  return (
    <div className='tasks'>
        <form onSubmit={handleSubmit}> 
            <input 
                type='text' 
                placeholder='Add task' 
                value={tasks} 
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
      <ul>
        {
        todos.map(todo => <Task todo={todo} /> )
        }
      </ul>
    </div>
  )
}

export default Tasks
