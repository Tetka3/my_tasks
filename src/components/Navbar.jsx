import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  

  return (
    <div className="topnav">      
      <Link><li className="active">Home</li></Link>
      <Link><li >News</li></Link>
      <Link><li>Contact</li></Link>
      <Link><li>About</li></Link>     
    </div>
  )
}

export default Navbar
