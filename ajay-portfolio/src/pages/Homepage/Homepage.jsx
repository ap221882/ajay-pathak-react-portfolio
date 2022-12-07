import React from "react";
import IntroContainer from "../../containers/IntroContainer/IntroContainer";
import { StyledHomepage, StyledIntroContainer } from "./Homepage.styles";

const Homepage = () => {
  return (
    <StyledHomepage>
      <div className='dark-side'></div>
      <div className='light-side'></div>
      <StyledIntroContainer>
        <IntroContainer />
      </StyledIntroContainer>
    </StyledHomepage>
  );
};

export default Homepage;
