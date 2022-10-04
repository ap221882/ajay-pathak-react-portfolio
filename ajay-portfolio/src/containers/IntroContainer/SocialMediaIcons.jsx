import React from "react"
import { CgFacebook, CgInstagram } from "react-icons/cg"
import { GrLinkedinOption, GrTwitter } from "react-icons/gr"
import { SiBiolink } from "react-icons/si"
import styled from "styled-components"

const StyledSocialMediaIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`

const SocialMediaIcons = () => {
  return (
    <StyledSocialMediaIcons>
      <CgFacebook />
      <CgInstagram />
      <GrTwitter />
      <GrLinkedinOption />
      <SiBiolink />
    </StyledSocialMediaIcons>
  )
}

export default SocialMediaIcons
