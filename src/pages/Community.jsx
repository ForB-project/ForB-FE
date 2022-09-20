import React from "react";
import styled from "styled-components";
import { Body, Upper } from "../components/Result";

const Community = () => {
  return (
    <WarperStyled>
      <Upper>Community</Upper>
      <Body />
    </WarperStyled>
  );
};

export default Community;

const WarperStyled = styled.div`
  /* border: 1px solid gray; */

  border-radius: 20px;
  background-color: black;

  height: 60vh;

  margin: 5vw;
  padding: 2vh;

  text-align: center;
`;
