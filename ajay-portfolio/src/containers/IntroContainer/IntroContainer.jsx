import React from "react"
import SocialMediaIcons from "./SocialMediaIcons"
import Introduction from "./Introduction"
import styled from "styled-components"

const StyledSocialMediaIcons = styled.div`
  /* width: 50px; */
`
const StyledIntroduction = styled.div`
  color: black;
`
const StyledIntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`

const IntroContainer = () => {
  return (
    <StyledIntroContainer>
      <StyledSocialMediaIcons>
        <SocialMediaIcons />
      </StyledSocialMediaIcons>
      <StyledIntroduction>
        <Introduction />
      </StyledIntroduction>
    </StyledIntroContainer>
  )
}

export default IntroContainer
