import styled from "styled-components";

export const StyledHomepage = styled.div`
  height: calc(100vh - 60px);
  position: relative;
  .dark-side {
    height: calc(100vh - 60px);
    float: left;
    width: 55%;
    position: absolute;
    background: black;
    z-index: 1;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
  }
  .light-side {
    width: 50%;
    left: 50%;
    float: right;
    position: absolute;
    background: white;
  }
`;

export const StyledIntroContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  color: white;
  width: 100vw;
`;
