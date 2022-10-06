import React from "react"
import logo from "../../assets/logo.png"
import { StyledNavbar } from "./styledNavbar"

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className='logo-container'>
        <img src={logo} alt='' />
      </div>
      <div className='buttons-container'>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </StyledNavbar>
  )
}

export default Navbar
