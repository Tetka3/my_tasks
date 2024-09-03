import { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  const [test, setTest] = useState(false);

  return (
    <div className="topnav">      
      <Link to="/"><li className="active">Home</li></Link>
      <Link to="/login"><li >Log In</li></Link>
      <Link to="/register"><li>Register</li></Link>
      <Link to="/about"><li>About</li></Link>          
      <Link to="/help"><li>Help</li></Link>          
    </div>
  )
}

export default Navbar
