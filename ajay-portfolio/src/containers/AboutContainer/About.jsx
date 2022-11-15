import React from "react";
import styled from "styled-components";

const StyledAboutContainer = styled.div`
  max-width: 380px;
  h2 {
    color: red;
    font-size: 30px;
    padding: 7px 0;
    letter-spacing: 5px;
    text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
  }
  h1 {
    font-family: "Secular One", sans-serif;
    font-size: 35px;
    padding: 8px 0;
    font-weight: 500;
    color: #333232;
  }
  .title {
    font-size: 15px;
    padding: 4px 0;
    text-transform: capitalize;
  }
  .info {
    font-size: 16px;
    color: #282828;
    line-height: 20px;
    margin: 1rem 0;
  }
  button {
    color: red;
    text-transform: capitalize;
  }
  .underline {
    height: 4px;
    width: 70%;
    background-color: red;
    margin-bottom: 2rem;
  }
`;

const About = () => {
  return (
    <StyledAboutContainer>
      <h2>About me</h2>
      <h1>Why Hire Me?</h1>
      <div className='underline'></div>
      <p className='info'>
        I am proficient in making full blown web applications and especially
        frontend part of it. I have made static as well as dynamic web pages
        using HTML, CSS, Javascript.
      </p>
      <button>Hire me</button>
    </StyledAboutContainer>
  );
};

export default About;
