import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  

  return (
    <div className="topnav">      
      <Link to="/"><li className="active">Home</li></Link>
      <Link to="/news"><li >News</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
      <Link to="/about"><li>About</li></Link>     
    </div>
  )
}

export default Navbar
