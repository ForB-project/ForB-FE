import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Lower = () => {
  const navigate = useNavigate();

  return (
    <LowerStyled>
      <LeftButtonStyled>
        <RoadmapButton onClick={() => navigate("/")}>Road map</RoadmapButton>
      </LeftButtonStyled>
      <CenterButtonStyled> </CenterButtonStyled>
      <RightButtonStyled>
        <CodingButton onClick={() => navigate("/community")}>
          let's Coding <Span>(community page)</Span>
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
  padding-top: 2vh;
`;
const LeftButtonStyled = styled.div`
  /* border: 1px dashed purple; */

  border-radius: 10px;
  background-color: #9e6c31;

  margin: 1vw;
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

  margin: 1vw;
  display: inline-block;
  width: 25vw;
`;
const CodingButton = styled.button`
  border: none;
  font-size: 20px;
  height: 5vh;
  background: none;
`;

const Span = styled.span`
  font-size: 5px;
`;
