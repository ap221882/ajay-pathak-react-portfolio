import React from "react";
import styled from "styled-components";

const StyledSingleExperience = styled.div`
  min-height: 240px;
  background-color: white;
  color: black;
  width: 450px;
  position: absolute;
  /* right: 10px; */
  &:nth-child(odd) {
    top: 360px;
    left: -450px;
  }
  &:nth-child(even) {
    /* top: 8rem; */
    left: 10px;
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
