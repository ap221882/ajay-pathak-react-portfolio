import React from "react";
import styled from "styled-components";

const StyledSingleExperience = styled.div``;

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
