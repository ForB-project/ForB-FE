import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Lower = () => {
  const navigate = useNavigate();

  return (
    <LowerStyled>
      <LeftButtonStyled>
        <RoadmapButton onClick={() => navigate("/quiz")}>
          로드맵 보기(퀴즈)
        </RoadmapButton>
      </LeftButtonStyled>
      <CenterButtonStyled> </CenterButtonStyled>
      <RightButtonStyled>
        <CodingButton onClick={() => navigate("/community")}>
          코딩 테스트해보기
        </CodingButton>
      </RightButtonStyled>
    </LowerStyled>
  );
};

export default Lower;

const LowerStyled = styled.div`
  /* border: 1px dashed blue; */

  text-align: center;

  margin: 1vh;
  padding-top: 5vh;
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
