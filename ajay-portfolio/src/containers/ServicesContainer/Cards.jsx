import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { CardData } from "./CardData";

const StyledCard = styled.div`
  /* margin: 1.5rem; */
  background-color: white;
  border-radius: 20px;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: red;
    color: white;
  }
  .card-container {
    display: flex;
    flex-direction: column;
  }
  .card-icon-container {
    display: inline-block;
    padding: 1.5rem;
    padding-bottom: 0;
  }
  h3 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p {
    size: 16px;
    line-height: 24px;
    max-width: 300px;
  }
  .card-info {
    padding: 1.5rem;
  }
`;

const Cards = () => {
  return (
    <>
      {CardData.map((oneCardData) => {
        return (
          <StyledCard>
            <Card key={oneCardData.id} oneCardData={oneCardData} />
          </StyledCard>
        );
      })}
    </>
  );
};

export default Cards;
