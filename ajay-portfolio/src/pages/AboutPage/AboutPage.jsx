import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  height: 100vh;
  background-color: gray;
  .dark-side {
    height: 100vh;
    float: left;
    width: 55%;
    position: absolute;
    background: black;
    z-index: 1;
    clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
  }
  .light-side {
    width: 50%;
    left: 50%;
    float: right;
    position: absolute;
    background: white;
  }
`;

const AboutPage = () => {
  return (
    <StyledAbout>
      <div className='dark-side'></div>
      <div className='light-side'></div>
    </StyledAbout>
  );
};

export default AboutPage;
