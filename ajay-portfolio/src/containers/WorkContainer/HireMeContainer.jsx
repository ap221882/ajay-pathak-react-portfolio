import React from "react";
import styled from "styled-components";

const StyledHireMeContainer = styled.div`
  width: 70%;
  background: white;
  color: black;
  margin: 0 auto;
  margin-top: 15rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 41px 90px;
  border-radius: 20px;
  .hire__container__heading {
    font-size: 40px;
    font-weight: 700;
    color: #282828d9;
    text-align: left;
  }
  .underline {
    height: 4px;
    width: 40%;
    background-color: red;
    margin: 10px auto;
    margin-bottom: 36px;
    margin-left: 0;
  }
  .hire__button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hire__button > button {
    background-color: black;
    color: red;
    text-transform: uppercase;
  }
`;

const HireMeContainer = () => {
  return (
    <StyledHireMeContainer>
      <div className='hire__container'>
        <h4 className='hire__container__heading'>Have Any Project in Mind?</h4>
        <div className='underline'></div>
        <h4 className='hire__container__para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, rem.
        </h4>
      </div>
      <div className='hire__button'>
        <button>Hire Me</button>
      </div>
    </StyledHireMeContainer>
  );
};

export default HireMeContainer;
