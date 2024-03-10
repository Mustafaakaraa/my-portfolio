import React from 'react'
import './navbar.css'
import logo from '../../assets/newlog.png'
import Contact from '../../assets/messageicon.png'
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    <nav className="navbar">

      <img className= "logo" src={logo} alt="MUSKALOGO" />
      
      <div className="desktopMenu">
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="skills"spy={true} smooth={true} offset={-100} className="desktopMenuListItem">About Me</Link>
      </div>
      
      <button className="desktopMenuBtn">
      <img src={Contact} alt="" className="desktopMenuImg" /> Contact Me 
      </button>

    </nav>
  )
}

export default Navbar