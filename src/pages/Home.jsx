import Navbar from "../components/Navbar";
import Tasks from "../components/Tasks";
import '../App.css'
import { useState, useEffect } from "react";


const Home = () => {
    const[tasks, setTasks] = useState("");
    const [todos, setTodos]  = useState([{
      id: 1,
      text: "Make bed",
      reminder: false
    },
    {
      id: 2,
      text: "Make tea",
      reminder: false
    }
  ]);    

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
        setTodos(todos.filter(todo => todo.id !== id))   
    }
    const toggleReminder = (id) => {
      setTodos(todos.map((todo) => todo.id ===  id ? {...todo, reminder: !todo.reminder} : todo))
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
        onToggle={toggleReminder}
      />        
    </div>
  )
}

export default Home
