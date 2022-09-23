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
          <MoveRoadmapButton
            onClick={() => setTimeout(() => navigate("/roadmap"), 500)}
          >
            로드맵으로 가기
          </MoveRoadmapButton>
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
  margin-bottom: 16px;
}
  25%{
     margin-bottom: 19px;
  }
  50%{
   margin-bottom: 16px;
  }
  75%{
    margin-bottom: 13px;
  }
  100%{
    margin-bottom: 16px;
  }
`;

const CodeHeader = styled.div`
  width: 80vw;
  height: 11vh;
  margin-bottom: -0.8vh;
  display: flex;
  justify-content: center;
  .Logo {
    max-width: 10vh;
    max-height: 11vw;
  }
`;

const CodeButtonLayout = styled.div`
  width: 24vw;
  height: 8vh;
  margin: auto;
  margin-right: 9.5vw;
  display: flex;
  justify-content: end;
`;

const CodeButton = styled.button`
  width: 8rem;
  height: 4.5vh;
  margin: auto 0px auto 1vw;
  cursor: pointer;
  background-color: #10141b;
  border: 4px dashed black;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: calc(0.3em + 0.8vw);
  color: white;
  opacity: 0.8;
  transition: 0.1s;
  &:hover {
    animation: ${moving} 2s linear infinite;
    opacity: 1;
  }
`;

const MoveRoadmapButton = styled.button`
  width: 12rem;
  height: 4.5vh;
  margin: auto 0px auto 1vw;
  cursor: pointer;
  background-color: #10141b;
  border: 4px dashed black;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: calc(0.3em + 0.8vw);
  color: white;
  opacity: 0.8;
  transition: 0.1s;
  &:hover {
    animation: ${moving} 2s linear infinite;
    opacity: 1;
  }
`;

const InvisibleButton = styled.button`
  width: 8rem;
  height: 4.5vh;
  margin: auto;
  opacity: 0;
`;
