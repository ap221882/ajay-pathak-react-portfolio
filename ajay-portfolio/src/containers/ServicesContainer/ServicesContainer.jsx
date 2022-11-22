import React from "react";
import styled from "styled-components";
import Cards from "./Cards";

const StyledServicesContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  .service-heading {
    text-align: center;
    font-size: 30px;
    text-transform: capitalize;
  }
  .underline {
    height: 4px;
    width: 40%;
    background-color: red;
    margin: 1rem auto;
    margin-bottom: 0;
  }
`;

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem;
  margin-bottom: 0;
  color: black;
`;

const ServicesContainer = () => {
  return (
    <StyledServicesContainer>
      <h2 className='service-heading'>Services</h2>
      <div className='underline'></div>
      <StyledCards>
        <Cards />
      </StyledCards>
    </StyledServicesContainer>
  );
};

export default ServicesContainer;
