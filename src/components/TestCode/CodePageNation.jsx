import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import {
  __sendPracCode1,
  __sendPracCode2,
} from "../../redux/modules/TestCodeSlice";

const PageNation = ({
  movePage,
  frontPage,
  backPage,
  htmlPage,
  exampleCode,
  codePrac,
  codeNumber,
}) => {
  const dispatch = useDispatch();
  const [codeList, setCodeList] = useState({});

  const runBackCode = () => {
    const regex = /[^0-9]/g;
    if (exampleCode[codeNumber].id === 4) {
      const sendCodeInt = codePrac.split(/=|;/)[1].trim();
      const forIf = codePrac.replace(regex, "");
      const sendCodeIf = forIf.slice(sendCodeInt.length, forIf.length);
      setCodeList({
        ...codeList,
        inputInt1: Number(sendCodeInt),
        inputInt2: Number(sendCodeIf),
      });
    } else if (exampleCode[codeNumber].id === 5) {
      const forIf = codePrac.replace(regex, "");
      const firstInt = forIf.slice(-2);
      const secondInt = forIf.slice(-4, 3);
      setCodeList({
        ...codeList,
        inputInt1: Number(firstInt),
        inputInt2: Number(secondInt),
      });
    }
  };

  useEffect(() => {
    if (exampleCode[codeNumber].id === 4) {
      dispatch(__sendPracCode1(codeList));
    } else if (exampleCode[codeNumber].id === 5) {
      dispatch(__sendPracCode2(codeList));
    }
  }, [codeList]);

  return (
    <PageNationLayout>
      <FrontBackButton
        className="runButton"
        onClick={() => (exampleCode[0].id >= 4 ? runBackCode() : null)}
      >
        run
      </FrontBackButton>
      <PageNationNumLayout>
        <PageNationNum onClick={() => movePage(0)}>1</PageNationNum>
        <PageNationNum onClick={() => movePage(1)}>2</PageNationNum>
      </PageNationNumLayout>
      <FrontBackButton onClick={() => htmlPage()}>HTML</FrontBackButton>
      <FrontBackButton onClick={() => frontPage()}>Front</FrontBackButton>
      <FrontBackButton onClick={() => backPage()}>Back</FrontBackButton>
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
