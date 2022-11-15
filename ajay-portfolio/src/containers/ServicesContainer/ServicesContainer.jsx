import React from "react";
import styled from "styled-components";
import Cards from "./Cards";

const StyledServicesContainer = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  .service-heading {
    text-align: center;
    font-size: 30px;
    text-transform: capitalize;
  }
`;

const ServicesContainer = () => {
  return (
    <StyledServicesContainer>
      <h2 className='service-heading'>Services</h2>
      <Cards />
    </StyledServicesContainer>
  );
};

export default ServicesContainer;
