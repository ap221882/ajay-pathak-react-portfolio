import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const StyledNavbar = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-items: start;
  position: sticky;
  top: 0;
  z-index: 3;
  .logo-container {
    height: 40px;
    width: 66px;
  }
  .buttons-container {
    ul {
      display: grid;
      grid-template-columns: repeat(5, auto);
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="buttons-container">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
