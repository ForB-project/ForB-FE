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
`;

const WarperStyled = styled.div`
  /* border: 1px solid gray; */
  border: 20px solid black;
  border-radius: 30px;

  background-image: url(${GreateHall});
  background-size: cover;

  width: 100vw;
  height: 92.7vh;

  /* margin: 5vw; */

  padding: 1.5vh;

  color: black font-family "neodgm";
`;
// const FSpan = styled.span`
//   color: #3f8e55;
//   /* color: #3f428e; */
//   /* color: #ffffff; */
// `;
// const OrSpan = styled.span`
//   color: white;
// `;
// const BSpan = styled.span`
//   color: #892525;
//   /* color: #ffffff; */
// `;
