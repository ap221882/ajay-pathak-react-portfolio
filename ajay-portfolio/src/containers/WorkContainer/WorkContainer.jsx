import React from "react";
import styled from "styled-components";
import ExperienceContainer from "./ExperienceContainer";

const StyledExperienceHeading = styled.div`
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

const WorkContainer = () => {
  return (
    <>
      <StyledExperienceHeading>
        <h2 className='service-heading'>Services</h2>
        <div className='underline'></div>
      </StyledExperienceHeading>
      <div className='separator'></div>
      <ExperienceContainer />
    </>
  );
};

export default WorkContainer;
