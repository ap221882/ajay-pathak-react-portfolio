import React from "react";
import style from "styled-components";

const StyledHomepage = style.div`
border:2px solid red;
height:100vh`;

const Homepage = () => {
  return <StyledHomepage>Homepage</StyledHomepage>;
};

export default Homepage;
