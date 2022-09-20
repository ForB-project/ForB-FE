import React from "react";
import styled from "styled-components";
import Body from "../components/Community/Body";

//재사용 component 파일위치 정리필
import { Upper } from "../components/Result";
import Lower from "../components/Community/Lower";

const Community = () => {
  return (
    <WarperStyled>
      <Upper>Community</Upper>
      <Body />
      <Lower />
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
