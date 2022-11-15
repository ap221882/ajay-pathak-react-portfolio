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
        For my programming projects, I am an active githubber. Feel free to
        create a pull request for contribution or collaboration to any of my
        repositories.
      </p>
    </StyledAboutContainer>
  );
};

export default About;
