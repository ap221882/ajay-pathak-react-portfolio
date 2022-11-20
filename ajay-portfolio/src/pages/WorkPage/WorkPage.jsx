import React from "react";
import styled from "styled-components";
import WorkContainer from "../../containers/WorkContainer/WorkContainer";

const StyledWorkContainer = styled.div`
  min-height: 200vh;
  background-color: black;
  color: white;
  padding-top: 8rem;
  text-align: center;
  .separator {
    height: 100vh;
    width: 10px;
    background-color: red;
    margin: 0 auto;
    margin-top: 4rem;
    position: relative;
  }
`;

const WorkPage = () => {
  return (
    <StyledWorkContainer>
      <WorkContainer />
    </StyledWorkContainer>
  );
};

export default WorkPage;
