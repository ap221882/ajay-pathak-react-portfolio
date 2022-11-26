import React from "react";
import styled from "styled-components";
import {
  BioOption,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "../../assets/Icons/Icons";
import logo from "../../assets/logo.png";

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  background-color: #e2e8f0;
  padding: 3rem 0;
  .logo__container {
    height: 60px;
  }
  .icon__container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 20px 0;
  }
  .styled__icon {
    background-color: black;
    color: white;
    border-radius: 50%;
    margin: 20px 25px;
    display: grid;
    place-items: center;
  }
  .nav__container > ul {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    li {
      padding: 0 10px;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className='logo__container'>
        <img src={logo} alt={logo} />
      </div>
      <div className='icon__container'>
        <div className='styled__icon'>
          <Facebook />
        </div>
        <div className='styled__icon'>
          <Instagram />
        </div>
        <div className='styled__icon'>
          <Twitter />
        </div>
        <div className='styled__icon'>
          <LinkedIn />
        </div>
        <div className='styled__icon'>
          <BioOption />
        </div>
      </div>
      <div className='nav__container'>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
