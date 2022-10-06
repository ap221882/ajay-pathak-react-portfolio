import React from "react"
import styled from "styled-components"

const StyledIntroductionContainer = styled.div`
  max-width: 380px;
  h2 {
    color: red;
    font-size: 40px;
    padding: 5px 0;
  }
  h1 {
    font-family: "Secular One", sans-serif;
    font-size: 48px;
    padding: 5px 0;
    font-weight: 500;
  }
  .title {
    font-size: 20px;
    padding: 7px 0;
  }
  .info {
    font-size: 16px 0;
    color: #282828;
    line-height: 20px;
  }
`

const Introduction = () => {
  return (
    <StyledIntroductionContainer>
      <h2>Hello I'm</h2>
      <h1>Ajay Pathak</h1>
      <p className='title'>Frontend developer</p>
      <p className='info'>
        I am proficient in making full blown web applications and especially
        frontend part of it. I have made static as well as dynamic web pages
        using HTML, CSS, Javascript.
      </p>
    </StyledIntroductionContainer>
  )
}

export default Introduction
