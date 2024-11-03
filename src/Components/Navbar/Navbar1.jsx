import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/logo.png'
import Menu_icon from '../../assets/menu-icon.png'

const Navbar1 = () => {

  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>500?setSticky(true):setSticky(false);
    })
  },[])

  const [mobileMenu,setMobileMenu]=useState(false);
  const ToggleMenu=()=>{
mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ' '}`}>
        <img className='logo' src={logo} alt=''/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
          <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to="programs" smooth={true} offset={-260} duration={500}>Program</Link></li>
          <li><Link to="about" smooth={true} offset={-100} duration={500}>About Us</Link></li>
          <li><Link to="campus" smooth={true} offset={-240} duration={500}>Campus</Link></li>
          <li><Link to="testimonials" smooth={true} offset={-240} duration={500}>Testimonials</Link></li>
          <li><Link to="contact" smooth={true} offset={-2403} duration={500} className='button'>Contact Us</Link> </li>
        </ul>
        <img src={Menu_icon} alt='' className='menu-icon' onClick={ToggleMenu}/>
    </nav>
  )
}

export default Navbar1