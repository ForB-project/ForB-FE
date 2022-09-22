import React from "react";
import styled from "styled-components";
import Body from "../components/Community/Body";
import { GreateHall } from "../static";
import { greathall_pixel } from "../image";

//재사용 component 파일위치 정리필
import { Upper } from "../components/Result";
import Lower from "../components/Community/Lower";

const Community = () => {
  return (
    <WarperStyled>
      <Upper>게시판</Upper>
      <Body />
      <Lower />
    </WarperStyled>
  );
};

export default Community;

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
