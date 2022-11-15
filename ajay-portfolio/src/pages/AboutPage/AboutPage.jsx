import React from "react";
import styled from "styled-components";
import AboutContainer from "../../containers/AboutContainer/AboutContainer";

const StyledAbout = styled.div`
  height: 100vh;
  position: relative;
  .dark-side {
    height: 100vh;
    float: left;
    width: 55%;
    position: absolute;
    background: black;
    z-index: 1;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
  }
  .light-side {
    width: 50%;
    left: 50%;
    float: right;
    position: absolute;
    background: white;
  }
`;

const StyledAboutContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  color: white;
  width: 100vw;
`;

const AboutPage = () => {
  return (
    <StyledAbout>
      <div className='dark-side'></div>
      <div className='light-side'></div>
      <StyledAboutContainer>
        <AboutContainer />
      </StyledAboutContainer>
    </StyledAbout>
  );
};

export default AboutPage;
