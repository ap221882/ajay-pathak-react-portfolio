import React from "react";
import styled from "styled-components";

const StyledSingleExperience = styled.div`
  min-height: 240px;
  background-color: white;
  position: relative;
  border-radius: 20px;
  /* padding: 50px; */
  color: black;
  width: 50%;
  display: grid;
  /* justify-content: center; */
  text-align: left;
  &:nth-child(odd) {
    transform: translateX(calc(100% + 25px));
    .id-container {
      position: absolute;
      font-weight: bold;
      top: 50%;
      left: -44px;
      background-color: white;
      color: black;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 4px solid red;
    }
  }
  &:nth-child(even) {
    transform: translateX(calc(-33px));
    .id-container {
      position: absolute;
      font-weight: bold;
      top: 50%;
      left: calc(100% + 14px);
      border-radius: 50%;
      background-color: white;
      color: black;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 4px solid red;
    }
  }
  .info-container {
    max-width: 388px;
    h1,
    p {
      padding: 2rem;
    }
    h1 {
      padding-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

const SingleExperience = ({ singleExperience }) => {
  return (
    <StyledSingleExperience>
      <div className='info-container'>
        <h1>{singleExperience.title}</h1>
        <p>{singleExperience.info}</p>
      </div>
      <div className='id-container'>{singleExperience.id}</div>
    </StyledSingleExperience>
  );
};

export default SingleExperience;
