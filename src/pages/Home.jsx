import Navbar from "../components/Navbar";
import Tasks from "../components/Tasks";
import '../App.css'
import { useState, useEffect } from "react";


const Home = () => {
    const[tasks, setTasks] = useState("");
    const [todos, setTodos]  = useState([]);    

    const handleChange = (e) => {

        setTasks(e.target.value); 
    }
    const handleSubmit = (e) =>  {
        e.preventDefault();
        if (!tasks) return;
        setTodos(currentTodos => [tasks, ...currentTodos]);
        setTasks("");
    }
    const handleDelete = (id) =>  {
        console.log("delete" )    
    }

    useEffect(() => {
      console.log("Yap")
    }, [])
  return (
    <div>      
      <Navbar/>      
      <Tasks 
        tasks={tasks} 
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
        handleDelete={handleDelete} 
        todos={todos}
      />        
    </div>
  )
}

export default Home
