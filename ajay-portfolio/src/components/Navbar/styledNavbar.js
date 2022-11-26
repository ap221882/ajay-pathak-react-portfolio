import styled from "styled-components";

export const StyledNavbar = styled.div`
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: auto 44vw;
  justify-items: start;
  position: sticky;
  height: 60px;
  top: 0;
  z-index: 3;
  align-items: center;
  .logo-container {
    height: 45px;
    padding: 0 8px;
  }
  .buttons-container {
    justify-self: center;
    ul {
      font-family: "Poppins";
      display: grid;
      grid-template-columns: repeat(5, auto);
      font-weight: 600;
      font-size: 15px;
      line-height: 22px;
      li {
        margin: 0 15px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;
