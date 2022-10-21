import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
import { getAccessToken } from "../../shared/storage";
const LowerResult = () => {
  const navigate = useNavigate();
  const toTestCode = () => {
    if (!getAccessToken()) {
      window.alert("로그인이 필요합니다! 메뉴창을 통해 로그인가능합니다");
    } else {
      navigate("/testcode");
    }
  };
  const toRoadmap = () => {
    if (!getAccessToken()) {
      window.alert("로그인이 필요합니다! 메뉴창을 통해 로그인가능합니다");
    } else {
      navigate("/roadmap");
    }
  };
  return (
    <>
      <Header />
      <LowerStyled>
        <LeftButtonStyled>
          <CodingButton
            onClick={() => {
              toTestCode();
            }}
          >
            코드체험 해보기
          </CodingButton>
        </LeftButtonStyled>
        <CenterButtonStyled> </CenterButtonStyled>
        <RightButtonStyled>
          <RoadmapButton
            onClick={() => {
              toRoadmap();
            }}
          >
            로드맵 보기
          </RoadmapButton>
        </RightButtonStyled>
      </LowerStyled>
    </>
  );
};

export default LowerResult;

const LowerStyled = styled.div`
  text-align: center;
  margin: 1vh;
  padding-top: 2vh;
`;
const LeftButtonStyled = styled.div`
  border-radius: 10px;
  border: 8px dashed black;
  background-color: #10141b;
  opacity: 0.8;
  margin: 1vw;
  display: inline-block;
  width: 25vw;
`;
const CenterButtonStyled = styled.div`
  margin: 1%;
  display: inline-block;
  width: 5vw;
`;
const RightButtonStyled = styled.div`
  border-radius: 10px;
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
  font-size: 3vmin;
  font-family: "neodgm";
  width: 100%;
  height: 5vh;
  background: none;
  cursor: pointer;
  &:hover {
    font-size: 3vmin;
    color: white;
    opacity: 1;
  }
`;
const RoadmapButton = styled.button`
  border: none;
  color: gray;
  font-size: 3vmin;
  font-family: "neodgm";
  width: 100%;
  height: 5vh;
  background: none;
  cursor: pointer;
  &:hover {
    font-size: 3vmin;
    color: white;
    opacity: 1;
  }
`;
