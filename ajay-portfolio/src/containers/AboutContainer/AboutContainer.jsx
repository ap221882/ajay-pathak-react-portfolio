import React from "react";
import styled from "styled-components";
import About from "./About";
import myphoto from "../../assets/Icons/myimage.jpeg";

const StyledAboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;
const ImageContainer = styled.div`
  height: 50vh;
`;
const StyledAbout = styled.div`
  color: black;
`;

const AboutContainer = () => {
  return (
    <StyledAboutContainer>
      <ImageContainer>
        <img src={myphoto} alt='' />
      </ImageContainer>
      <StyledAbout>
        <About />
      </StyledAbout>
    </StyledAboutContainer>
  );
};

export default AboutContainer;
