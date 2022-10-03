import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { RunBackButton, RunFrontButton } from "../index";

const PageNation = ({
  moveNum,
  movePage,
  exampleCode,
  codePrac,
  codeNumber,
}) => {
  const dispatch = useDispatch();

  return (
    <PageNationLayout>
      {exampleCode[0].id < 4 ? (
        exampleCode[0].id >= 2 ? (
          <RunFrontButton
            exampleCode={exampleCode}
            codePrac={codePrac}
            codeNumber={codeNumber}
          />
        ) : null
      ) : (
        <RunBackButton
          exampleCode={exampleCode}
          codePrac={codePrac}
          codeNumber={codeNumber}
        />
      )}

      <PageNationNumLayout>
        <PageNationNum onClick={() => moveNum(0)}>1</PageNationNum>
        <PageNationNum onClick={() => moveNum(1)}>2</PageNationNum>
      </PageNationNumLayout>
      <FrontBackButton onClick={() => movePage("h")}>HTML</FrontBackButton>
      <FrontBackButton onClick={() => movePage("f")}>Front</FrontBackButton>
      <FrontBackButton onClick={() => movePage("b")}>Back</FrontBackButton>
    </PageNationLayout>
  );
};
export default PageNation;

const PageNationLayout = styled.div`
  width: 62vw;
  height: 40px;
  display: flex;
  flex-direction: row;
`;

const PageNationNumLayout = styled.div`
  width: 5vw;
  min-width: 42px;
  height: 2vw;
  min-height: 22px;
  margin: -0.1vh 11vw -2vh auto;
  border: 2px dashed black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #10141b;
`;

const PageNationNum = styled.button`
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  background-color: #10141b;
  border: none;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: calc(0.1em + 1.2vw);
  font-weight: 500;
  opacity: 0.6;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 1;
  }
`;

const FrontBackButton = styled.button`
  width: 5vw;
  min-width: 42px;
  height: 2vw;
  min-height: 22px;
  margin: 0.5vw 0.2vw 0px 0.5vw;
  margin-top: -0.1vh;
  margin-bottom: -2vh;
  border: 2px dashed black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #10141b;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: calc(0.1em + 1.2vw);
  font-weight: 500;
  color: white;
  opacity: 0.6;
  cursor: pointer;
  .runButton {
    margin: -0.1vh 11vw -2vh 0px;
  }
  &:hover {
    opacity: 1;
  }
  &:focus {
    opacity: 1;
  }
`;
