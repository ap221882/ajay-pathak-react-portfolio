import React from "react";
import styled from "styled-components";
import myphoto from "../../assets/Icons/myimage.jpeg";

const StyledAboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;
const ImageContainer = styled.div`
  height: 50vh;
`;

const AboutContainer = () => {
  return (
    <StyledAboutContainer>
      <ImageContainer>
        <img src={myphoto} alt='' />
      </ImageContainer>
    </StyledAboutContainer>
  );
};

export default AboutContainer;
