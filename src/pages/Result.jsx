import React from "react";
import styled from "styled-components";
import Upper from "../components/Result/Upper";
import Lower from "../components/Result/Lower";
import Body from "../components/Result/Body";

const Result = () => {
  return (
    <WarperStyled>
      <Upper />
      <Body />
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
