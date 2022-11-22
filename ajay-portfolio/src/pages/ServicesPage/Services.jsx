import React from "react";
import styled from "styled-components";
import ServicesContainer from "../../containers/ServicesContainer/ServicesContainer";

const StyledServices = styled.div`
  height: 100vh;
  background-color: black;
  display: grid;
  place-items: center;
  color: white;
`;

const Services = () => {
  return (
    <StyledServices>
      <ServicesContainer />
    </StyledServices>
  );
};

export default Services;
