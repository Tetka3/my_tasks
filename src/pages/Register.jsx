import { useState } from 'react';
import '../App.css'
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div>
      <Navbar />
      <form className='register' onSubmit={handleSubmit}>
        <label>Username</label>
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
        <label>Repeat Password</label>
        <input 
          type='password' 
          placeholder='Enter password...' 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={() => navigate("/")}>Submit</button>
        <p>Already have an account? Login</p>
      </form> 
    </div>
  )
}

export default Register
