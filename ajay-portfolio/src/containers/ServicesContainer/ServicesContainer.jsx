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

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: white;
  color: black;
`;

const ServicesContainer = () => {
  return (
    <StyledServicesContainer>
      <h2 className='service-heading'>Services</h2>
      <StyledCards>
        <Cards />
      </StyledCards>
    </StyledServicesContainer>
  );
};

export default ServicesContainer;
