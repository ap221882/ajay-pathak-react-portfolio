import React from "react";
import styled from "styled-components";
import ExperienceContainer from "./ExperienceContainer";

const StyledExperienceHeading = styled.div`
  .experience-heading {
    text-align: center;
    font-size: 30px;
    text-transform: capitalize;
  }
  .experience-heading:nth-child(even) {
    transform: translateX(calc(100% + 15px));
  }

  .experience-heading:nth-child(odd) {
    transform: translateX(-15px);
  }

  .underline {
    height: 4px;
    width: 40%;
    background-color: red;
    margin: 1rem auto;
    margin-bottom: 0;
  }
  /* .experience-container {
    max-width: 80vw;
  } */
  /* .experience-container:nth-child(odd) {
    top: 5rem;
  } */
`;

const WorkContainer = () => {
  return (
    <>
      <StyledExperienceHeading>
        <h2 className='experience-heading'>Experiences</h2>
        <div className='underline'></div>
      </StyledExperienceHeading>
      <div className='separator'></div>
      <ExperienceContainer />
    </>
  );
};

export default WorkContainer;
