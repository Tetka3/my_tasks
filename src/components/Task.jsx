import React from 'react'

const Task = ({ todo, handleDelete }) => {
  return (
    <div className='task'>        
      <li key={index}>{todo}</li>
      <button onClick={() => handleDelete(todo.index)}>Delete</button>
    </div>
  )
}

export default Task
