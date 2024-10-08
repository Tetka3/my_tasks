import React from 'react'

const Task = ({ todo, handleDelete }) => {
  return (
    <div className="todo">        
      <li key={todo.id}>{todo.text}</li>
      <div className="btns">
        <button style={{backgroundColor: "green"}}>Edit</button>
        <button onClick={() => handleDelete(todo.id)} style={{backgroundColor: "red"}}>Delete</button>
      </div>
    </div>
  )
}

export default Task
