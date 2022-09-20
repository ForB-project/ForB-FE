import React from "react";
import styled from "styled-components";
import { Upper, Lower, Body } from "../components/Result";

const Result = () => {
  return (
    <WarperStyled>
      <Upper>Test Result</Upper>
      <Body>
        <FSpan>F</FSpan> / <BSpan> B</BSpan>
      </Body>
      <Lower />
    </WarperStyled>
  );
};

export default Result;

const WarperStyled = styled.div`
  /* border: 1px solid gray; */

  border-radius: 20px;
  background-color: black;

  height: 60vh;

  margin: 5vw;
  padding: 2vh;

  text-align: center;
`;
const FSpan = styled.span`
  color: #3f428e;
`;
const BSpan = styled.span`
  color: #892525;
`;
