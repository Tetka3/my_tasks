import { useState } from 'react';
import '../App.css'
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";



const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [blogs, setBlogs] = useState(["Blog 1", "Blog 2"]);
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const getBlogs = () => {
    setBlogs(prev => [...prev, `Blog ${blogs.length + 1}`])
  }
  const handleDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id))
  }

  return (
    <>
      <Navbar />
      <form className='login' onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          type='text' 
          placeholder='Enter username...' 
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input 
          type='text' 
          placeholder='Enter username...' 
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Password</label>
        <input 
          type='password' 
          placeholder='Enter password...' 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={() => navigate("/")}>Submit</button>
      </form>  
      <button onClick={getBlogs}>Add</button>
      <ul>
      {
        blogs.map((blog) => <li>{blog} <button onClick={() => handleDelete(blog.id)}>Delete</button></li>)
      } 
      </ul>   
    </>
  )
}

export default Login
