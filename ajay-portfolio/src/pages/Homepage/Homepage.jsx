import React from "react"
import styled from "styled-components"
import IntroContainer from "../../containers/IntroContainer/IntroContainer"

const StyledHomepage = styled.div`
  border: 2px solid red;
  height: 100vh;
  position: relative;
  .dark-side {
    height: calc(100vh - 44px);
    float: left;
    width: 55%;
    position: absolute;
    background: black;
    z-index: 1;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
  }
  .light-side {
    height: 100vh;
    width: 50%;
    left: 50%;
    float: right;
    position: absolute;
    background: white;
  }
`

const StyledIntroContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  color: white;
  width: 100vw;
`

const Homepage = () => {
  return (
    <StyledHomepage>
      <div className='dark-side'></div>
      <div className='light-side'></div>
      <StyledIntroContainer>
        <IntroContainer />
      </StyledIntroContainer>
    </StyledHomepage>
  )
}

export default Homepage
