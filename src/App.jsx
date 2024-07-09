import Navbar from "./components/Navbar"
import Tasks from "./components/Tasks"
import './App.css'
import { useState } from "react"

function App() {
  
  const[tasks, setTasks] = useState([]);

  const handleChange = (e) =>{
    // setTasks(e.target.value);
    console.log("hhh");
  }
  const handleSubmit = (e) =>  {
    e.preventDefault();
    console.log("hi")
  }

  return (
    <>
      <Navbar/>
      <Tasks tasks={tasks} handleSubmit={handleSubmit} handleChange={handleChange}/>
    </>
  )
}

export default App
