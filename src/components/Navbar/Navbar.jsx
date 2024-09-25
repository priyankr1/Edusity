import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  
  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY>700?setSticky(true):setSticky(false);
    })
  },[])
  const[mobileMenu,setModileMenu]=useState(true);
  const toggleMenu=()=>{
      mobileMenu?setModileMenu(false):setModileMenu(true);
  }
  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
      <img className='logo' src={logo}alt=''/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='Hero' smooth={true} offset={0}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150}>About</Link></li>
        <li><Link to='campus' smooth={true} offset={-260}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} className='menu-icon' alt="" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
