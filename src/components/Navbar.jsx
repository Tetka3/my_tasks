import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  

  return (
    <div className="topnav">      
      <Link><li className="active" href="#home">Home</li></Link>
      <li href="#news">News</li>
      <li href="#contact">Contact</li>
      <li href="#about">About</li>     
    </div>
  )
}

export default Navbar
