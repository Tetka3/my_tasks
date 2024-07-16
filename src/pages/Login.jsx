import { useState } from 'react';
import '../App.css'

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
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
        <button>Submit</button>
      </form>      
    </div>
  )
}

export default Login
