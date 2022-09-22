import React from "react";
import styled from "styled-components";
import { PageTitle } from "../elem/index";
import { LowerResult, BodyResult } from "../components/Result/index";
import { greathall_pixel } from "../static/index";

const Result = () => {
  return (
    <WarperStyled>
      <PageTitle>테스트결과</PageTitle>
      <BodyResult>
        <FSpan>F</FSpan> | <BSpan> B</BSpan>
      </BodyResult>
      <LowerResult />
    </WarperStyled>
  );
};

export default Result;

const WarperStyled = styled.div`
  /* border: 1px solid gray; */
  border: 20px solid black;
  border-radius: 30px;

  background-image: url(${greathall_pixel});
  background-size: cover;

  width: 85vw;
  height: 75vh;

  margin: 5vw;
  padding: 1.5vh;

  color: #ffffff;
  font-family: "neodgm";
`;
const FSpan = styled.span`
  color: #3f8e55;
  /* color: #3f428e; */
  /* color: #ffffff; */
`;
const BSpan = styled.span`
  color: #892525;
  /* color: #ffffff; */
`;
