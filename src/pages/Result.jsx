import React from "react";
import styled from "styled-components";
import { greathall_pixel } from "../image";

//재사용 component 파일위치 정리필
import { Upper, Lower, Body } from "../components/Result";

const Result = () => {
  return (
    <WarperStyled>
      <Upper>Test Result</Upper>
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

  border-radius: 20px;
  background-color: black;
  /* background-image: url(${greathall_pixel}); */
  /* background-size: cover; */
  /* transition: 0.5s; */

  height: 60vh;

  margin: 5vw;
  padding: 2vh;

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
