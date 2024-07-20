import React from 'react'

const Task = ({ todo, handleDelete }) => {
  return (
    <div className='task'>        
      <li>{todo}</li>
      <div className="btns">
        <button style={{color: "green"}}>Edit</button>
        <button onClick={() => handleDelete(todo)}>Delete</button>
      </div>
    </div>
  )
}

export default Task
