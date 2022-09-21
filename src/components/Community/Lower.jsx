import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//재사용 component rename필
const Lower = () => {
  const navigate = useNavigate();

  return (
    <>
      <LowerStyled>
        <LeftButtonStyled>
          <RoadmapButton onClick={() => navigate("/result")}>
            Result
          </RoadmapButton>
        </LeftButtonStyled>
        <CenterButtonStyled> </CenterButtonStyled>
        <RightButtonStyled>
          <CodingButton onClick={() => navigate("/testcode")}>
            let's Coding
          </CodingButton>
        </RightButtonStyled>
      </LowerStyled>
    </>
  );
};

export default Lower;

const LowerStyled = styled.div`
  /* border: 1px dashed green; */

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

  color: white;
  font-size: 20px;
  font-family: "neodgm";

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

  color: white;
  font-size: 20px;
  font-family: "neodgm";

  height: 5vh;
  background: none;
`;
