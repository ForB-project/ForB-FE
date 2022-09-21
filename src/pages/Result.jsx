import React from "react";
import styled from "styled-components";
import { GreateHall } from "../static";
import { greathall_pixel } from "../image";

//재사용 component 파일위치 정리필
import { Upper, Lower, Body } from "../components/Result";

const Result = () => {
  return (
    <WarperStyled>
      <Upper>테스트결과</Upper>
      <Body>
        <FSpan>F</FSpan> | <BSpan> B</BSpan>
      </Body>
      <Lower />
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

  width: 85%;
  height: 800px;

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
