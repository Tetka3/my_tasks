import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, handleSubmit, handleChange }) => {
  return (
    <div className='tasks'>
        <form onSubmit={handleSubmit}> 
            <input 
                type='text' 
                placeholder='Add task' 
                name={tasks} 
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
      <ul>
        {tasks.map(task => (<Task task={task} />) )}
      </ul>
    </div>
  )
}

export default Tasks
