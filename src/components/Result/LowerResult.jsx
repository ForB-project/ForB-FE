import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";

const LowerResult = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <LowerStyled>
        <LeftButtonStyled>
          <CodingButton onClick={() => navigate("/testcode")}>
            코드체험 해보기
          </CodingButton>
        </LeftButtonStyled>
        <CenterButtonStyled> </CenterButtonStyled>
        <RightButtonStyled>
          <RoadmapButton onClick={() => navigate("/roadmap")}>
            로드맵 보기
          </RoadmapButton>
        </RightButtonStyled>
      </LowerStyled>
    </>
  );
};

export default LowerResult;

const LowerStyled = styled.div`
  /* border: 1px dashed blue; */

  text-align: center;

  margin: 1vh;
  padding-top: 2vh;
`;
const LeftButtonStyled = styled.div`
  /* border: 1px dashed purple; */

  border-radius: 10px;
  /* background-color: #9e6c31; */
  border: 8px dashed black;
  background-color: #10141b;
  opacity: 0.8;

  margin: 1vw;
  display: inline-block;
  width: 25vw;
`;
const CenterButtonStyled = styled.div`
  /* border: 1px dashed red;
   */
  margin: 1%;
  display: inline-block;
  width: 5vw;
`;
const RightButtonStyled = styled.div`
  /* border: 1px dashed green; */

  border-radius: 10px;
  /* background-color: #9e6c31; */
  border: 8px dashed black;
  background-color: #10141b;
  opacity: 0.8;

  margin: 1vw;
  display: inline-block;
  width: 25vw;
`;
const CodingButton = styled.button`
  border: none;

  color: gray;
  font-size: 20px;
  font-family: "neodgm";

  width: 100%;
  height: 5vh;
  background: none;

  cursor: pointer;
  &:hover {
    font-size: 21px;
    color: white;
    opacity: 1;
  }
`;
const RoadmapButton = styled.button`
  border: none;

  color: gray;
  font-size: 20px;
  font-family: "neodgm";

  width: 100%;
  height: 5vh;
  background: none;

  cursor: pointer;
  &:hover {
    font-size: 21px;
    color: white;
    opacity: 1;
  }
`;
