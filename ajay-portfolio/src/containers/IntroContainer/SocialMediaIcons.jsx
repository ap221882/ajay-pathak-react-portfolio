import React from "react"
import { CgFacebook, CgInstagram } from "react-icons/cg"
import { GrLinkedinOption, GrTwitter } from "react-icons/gr"
import { SiBiolink } from "react-icons/si"
import styled from "styled-components"
import {
  BioOption,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "../../assets/Icons/Icons"

const StyledSocialMediaIcons = styled.div`
  display: grid;
  border: 3px solid red;
  border-radius: 30px;
  grid-template-columns: 1fr;
  justify-items: center;
`

const SocialMediaIcons = () => {
  return (
    <StyledSocialMediaIcons>
      <Facebook />
      <Instagram />
      <Twitter />
      <LinkedIn />
      <BioOption />
    </StyledSocialMediaIcons>
  )
}

export default SocialMediaIcons
