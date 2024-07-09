import Navbar from "./components/Navbar"
import Tasks from "./components/Tasks"
import './App.css'
import { useState } from "react"

function App() {
  
  const[tasks, setTasks] = useState("");
  const [todos, setTodos]  = useState([]);

  const handleChange = (e) =>{
    if (!tasks) return;
    setTasks(e.target.value);
  }
  const handleSubmit = (e) =>  {
    e.preventDefault();
    setTodos(currentTodos => [tasks, ...currentTodos]);
    setTasks("");
  }

  return (
    <>
      <Navbar/>
      <Tasks tasks={tasks} handleSubmit={handleSubmit} handleChange={handleChange} todos={todos}/>
    </>
  )
}

export default App
