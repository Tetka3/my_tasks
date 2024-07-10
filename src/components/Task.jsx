import React from 'react'

const Task = ({ todo, handleDelete }) => {
  return (
    <div className='task'>        
      <li>{todo}</li>
      <button onClick={() => handleDelete(todo)}>Delete</button>
    </div>
  )
}

export default Task
