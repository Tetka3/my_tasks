import { useState } from 'react';
import '../App.css'

const Login = () => {

  const [username, setUsername] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type='text' placeholder='Enter username...' onChange={(e) => }/>
        <label>Password</label>
        <input type='password' placeholder='Enter password...'/>
      </form>
      log 
    </div>
  )
}

export default Login
