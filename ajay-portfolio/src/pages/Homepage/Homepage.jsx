import React from "react";
import style from "styled-components";

const StyledHomepage = style.div`
border:2px solid red;
height:100vh;
// display: grid;
// grid-template-columns:1fr 1fr;
position:relative;
.dark-side{
  height:100vh;
  float:left;
  width:65%;
  position:absolute;
  background:black;
  z-index:2;
  clip-path:polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
  clip-path:polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
}
.light-side{
  height:100vh;
  width:50%;
  left:50%;
  float:right;
  position:absolute;
  background:white;
}
`;

const Homepage = () => {
  return (
    <StyledHomepage>
      <div className="dark-side"></div>
      <div className="light-side"></div>
    </StyledHomepage>
  );
};

export default Homepage;
