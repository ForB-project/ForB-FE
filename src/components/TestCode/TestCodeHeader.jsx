import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { hogwart_logo } from "../../static/index";
import { addComment } from "../../redux/modules/TestCodeSlice";

const TestCodeHeader = ({ codeNumber, plusNum, codeList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const plusClick = () => {
    if (codeNumber === codeList - 1) {
      return null;
    } else {
      plusNum(codeNumber + 1);
      dispatch(addComment);
    }
  };
  const minusClick = () => {
    if (codeNumber === 0) {
      return null;
    } else {
      plusNum(codeNumber - 1);
    }
  };

  console.log(codeList);
  return (
    <CodeHeader>
      <img className="Logo" src={hogwart_logo} />
      <CodeButtonLayout>
        {codeNumber ? (
          <CodeButton onClick={minusClick}>이전</CodeButton>
        ) : (
          <InvisibleButton />
        )}
        {codeNumber === codeList - 1 ? (
          <MoveRoadmap
            onClick={() => setTimeout(() => navigate("/roadmap"), 500)}
          >
            로드맵으로 가기
          </MoveRoadmap>
        ) : (
          <CodeButton onClick={plusClick}>다음</CodeButton>
        )}
      </CodeButtonLayout>
    </CodeHeader>
  );
};
export default TestCodeHeader;

const moving = keyframes`
0%{
  margin-bottom: 10px;
}
  25%{
     margin-bottom: 13px;
  }
  50%{
   margin-bottom: 10px;
  }
  75%{
    margin-bottom: 7px;
  }
  100%{
    margin-bottom: 10px;
  }
`;

const CodeHeader = styled.div`
  width: 100%;
  height: 100px;
  margin: 30px;
  display: flex;
  justify-content: center;
  .Logo {
    width: 100px;
    margin-left: 50px;
    margin-bottom: -50px;
  }
`;

const CodeButtonLayout = styled.div`
  width: 330px;
  height: 60px;
  margin: auto;
  margin-right: 38px;
  margin-bottom: -45px;
  display: flex;
`;

const CodeButton = styled.button`
  width: 130px;
  height: 40px;
  margin: auto;
  cursor: pointer;
  background-color: #10141b;
  border: 4px dashed black;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 20px;
  color: white;
  opacity: 0.8;
  transition: 0.1s;
  &:hover {
    animation: ${moving} 2s linear infinite;
    opacity: 1;
  }
`;

const MoveRoadmap = styled.button`
  width: 180px;
  height: 40px;
  margin: auto;
  margin-left: 20px;
  margin-right: 10px;
  cursor: pointer;
  background-color: #10141b;
  border: 4px dashed black;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 20px;
  color: white;
  opacity: 0.8;
  transition: 0.1s;
  &:hover {
    animation: ${moving} 2s linear infinite;
    opacity: 1;
  }
`;

const InvisibleButton = styled.button`
  width: 130px;
  height: 40px;
  margin: auto;
  opacity: 0;
`;
