import Navbar from "./components/Navbar"
import Tasks from "./components/Tasks"
import './App.css'
import { useState } from "react"

function App() {
  
  const[tasks, setTasks] = useState(["Shop", "market"])
  const handleChange = (e) =>{
    setTasks(e.target.value);
    console.log(setTasks);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <>
      <Navbar/>
      <Tasks tasks={tasks} setTasks={setTasks}  handleSubmit={handleSubmit} handleChange={handleChange}/>
    </>
  )
}

export default App
