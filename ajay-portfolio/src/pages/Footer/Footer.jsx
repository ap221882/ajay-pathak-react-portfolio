import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  margin: 3rem 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className='logo__container'>Logo</div>
      <div className='icon__container'>Icons</div>
      <div className='nav__container'>Footer Navbar</div>
    </StyledFooter>
  );
};

export default Footer;
