import React from 'react'

const Task = ({ todo, handleDelete, onToggle }) => {
  return (
    <div className={`todo ${todo.reminder} ? "reminder" : "" `} onDoubleClick={() => onToggle(todo.id)} key={todo.id}>        
      <li >{todo.text}</li>
      <div className="btns">
        <button style={{backgroundColor: "green"}}>Edit</button>
        <button onClick={() => handleDelete(todo.id)} style={{backgroundColor: "red"}}>Delete</button>
      </div>
    </div>
  )
}

export default Task
