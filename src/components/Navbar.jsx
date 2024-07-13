import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  

  return (
    <div className="topnav">      
      <Link><li className="active" href="#home">Home</li></Link>
      <Link><li href="#news">News</li></Link>
      <Link><li href="#contact">Contact</li></Link>
      <Link><li href="#about">About</li></Link>     
    </div>
  )
}

export default Navbar
