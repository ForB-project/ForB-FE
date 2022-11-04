import React from "react";
import styled from "styled-components";
import { PageTitle } from "../elem/index";
import { LowerResult, BodyResult } from "../components/Result/index";
import { GreateHall } from "../static/index";

const Result = () => {
  return (
    <AllWrapStyled>
      <WarperStyled>
        <PageTitle>테스트결과</PageTitle>
        <BodyResult />
        <LowerResult />
      </WarperStyled>
    </AllWrapStyled>
  );
};

export default Result;

const AllWrapStyled = styled.div`
  background-color: #10141b;
  display: flex;
  height: 100%;
`;

const WarperStyled = styled.div`
  /* border: 1px solid gray; */
  border: 20px solid black;
  border-radius: 30px;

  background-image: url(${GreateHall});
  background-size: cover;

  width: 100%;
  height: 92vh;

  /* margin: 5vw; */

  padding: 1.5vh;

  color: black font-family "neodgm";
`;
