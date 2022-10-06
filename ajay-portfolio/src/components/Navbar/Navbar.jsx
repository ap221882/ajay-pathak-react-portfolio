import React from "react"
import styled from "styled-components"
import logo from "../../assets/logo.png"

const StyledNavbar = styled.div`
  display: grid;
  grid-template-columns: auto 44vw;
  justify-items: start;
  position: sticky;
  height: 44px;
  top: 0;
  z-index: 3;
  align-items: center;
  .logo-container {
    height: 40px;
  }
  .buttons-container {
    justify-self: center;
    ul {
      font-family: "Poppins";
      display: grid;
      grid-template-columns: repeat(5, auto);
      font-weight: 600;
      font-size: 15px;
      line-height: 22px;
      li {
        margin: 0 15px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }
`

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
