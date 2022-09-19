import React from "react";
import styled from "styled-components";
import logo_black from "../image/logo_black.png";
import { Layout } from "../components";
import { Navigate, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();

  return (
    <WarperStyled>
      <UpperStyled>
        <UpperBoxstyled>
          <LogoStyled src={logo_black} onClick={() => navigate("/")} />
          <TitleleftStyled>Test Result</TitleleftStyled>
        </UpperBoxstyled>
      </UpperStyled>
      <BodyStyled>
        <ResultStyled>F / B</ResultStyled>
      </BodyStyled>
      <LowerStyled>
        <LeftButtonStyled>
          <RoadmapButton onClick={() => navigate("/")}>Road map</RoadmapButton>
        </LeftButtonStyled>
        <CenterButtonStyled> </CenterButtonStyled>
        <RightButtonStyled>
          <CodingButton onClick={() => navigate("/")}>
            let's Coding
          </CodingButton>
        </RightButtonStyled>
      </LowerStyled>
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
const UpperStyled = styled.div`
  /* border: 1px solid red; */

  height: 5vh;
`;
const UpperBoxstyled = styled.div`
  /* border: 1px dashed purple; */

  width: 85vw;
  height: 3vh;
`;
const LogoStyled = styled.img`
  height: 50px;
  width: 50px;
  border: none;
  float: left;
`;
const TitleleftStyled = styled.div`
  /* border: 1px dashed blue; */

  display: inline-block;
  color: #9e6c31;
  font-size: 30px;

  line-height: 5vh;
  margin-right: 65vw;
`;

const BodyStyled = styled.div`
  /* border: 1px dashed red; */

  border-radius: 20px;
  background-color: #9e6c31;

  font-size: 70px;

  margin: auto;
  width: 50vw;
  height: 40vh;
  line-height: 35vh; //line heitgth = height > 세로정렬
`;
const ResultStyled = styled.div`
  margin: 1%;
`;

const LowerStyled = styled.div`
  /* border: 1px dashed blue; */

  margin: 1%;
  padding-top: 2vh;
`;
const LeftButtonStyled = styled.div`
  /* border: 1px dashed purple; */

  border-radius: 10px;
  background-color: #9e6c31;

  margin: 1%;
  display: inline-block;
  width: 25vw;
`;
const RoadmapButton = styled.button`
  border: none;
  font-size: 20px;
  height: 5vh;
  background: none;
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
  background-color: #9e6c31;

  margin: 1%;
  display: inline-block;
  width: 25vw;
`;
const CodingButton = styled.button`
  border: none;
  font-size: 20px;
  height: 5vh;
  background: none;
`;
