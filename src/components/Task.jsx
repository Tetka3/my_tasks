import React from 'react'

const Task = ({ todo }) => {
  return (
    <div className='task'>        
      <li>{todo}</li>
      <button>Delete</button>
    </div>
  )
}

export default Task
