import React from 'react'

const Task = ({ task }) => {
  return (
    <div className='task'>        
      <li>{task}</li>
      <button>Delete</button>
    </div>
  )
}

export default Task
