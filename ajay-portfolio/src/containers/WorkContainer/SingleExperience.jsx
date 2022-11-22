import React from "react";
import styled from "styled-components";

const StyledSingleExperience = styled.div`
  min-height: 240px;
  background-color: white;
  color: black;
  width: 50%;
  &:nth-child(odd) {
    transform: translateX(calc(100% + 25px));
  }
  &:nth-child(even) {
    transform: translateX(calc(-25px));
  }
  /* position: absolute; */
  /* right: 10px; */
  /* &:nth-child(n) {
    top: ${({ id }) => 360 * (id - 1)}px;
  }
  &:nth-child(even) {
    right: 10px;
  }
  &:nth-child(odd) {
    left: 10px;
  } */
`;

const SingleExperience = ({ singleExperience }) => {
  return (
    <StyledSingleExperience id={singleExperience.id}>
      <div className='info-container'>
        <h1>{singleExperience.title}</h1>
        <p>{singleExperience.info}</p>
      </div>
      <div className='id-container'>{singleExperience.id}</div>
    </StyledSingleExperience>
  );
};

export default SingleExperience;
