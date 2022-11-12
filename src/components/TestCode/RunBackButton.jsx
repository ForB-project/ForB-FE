import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  __sendJavaPracCode1,
  __sendJavaPracCode2,
  save_JavaScript_Java_PracCode
} from "../../redux/modules/TestCodeSlice";

const RunBackButton = ({ exampleCode, codePrac, codeIndex }) => {
  const dispatch = useDispatch();
  const [backResult, setBackResult] = useState(null);

  const runBackCode = () => {
    if (codePrac === "") return;
    const regex = /[^0-9]/g;
    if (exampleCode[codeIndex].id === 4) {
      const sendCodeInt = codePrac.split(/=|;/)[1].trim();
      const forIf = codePrac.replace(regex, "");
      const sendCodeIf = forIf.slice(sendCodeInt.length, forIf.length);
      setBackResult({
        ...backResult,
        inputInt1: Number(sendCodeInt),
        inputInt2: Number(sendCodeIf),
      });
    } else if (exampleCode[codeIndex].id === 5) {
      const sendCodeInt = codePrac.split(";");
      const firstInt = sendCodeInt[1].replace(regex, "");
      const secondInt = sendCodeInt[3].replace(regex, "");
      setBackResult({
        ...backResult,
        inputInt1: Number(firstInt),
        inputInt2: Number(secondInt),
      });
    }
  };

  useEffect(() => {
    const result = { id: exampleCode[codeIndex].id, codePrac };
    if (exampleCode[codeIndex].id === 4 && backResult !== null) {
      dispatch(__sendJavaPracCode1(backResult));
      dispatch(save_JavaScript_Java_PracCode(result));
    } else if (exampleCode[codeIndex].id === 5 && backResult !== null) {
      dispatch(__sendJavaPracCode2(backResult));
      dispatch(save_JavaScript_Java_PracCode(result));
    }
  }, [backResult]);

  return (
    <RunBackCode className="runButton" onClick={() => runBackCode()}>
      ▶︎ RUN
    </RunBackCode>
  );
};
export default RunBackButton;

const RunBackCode = styled.button`
  width: 6vw;
  min-width: 42px;
  height: 2vw;
  min-height: 22px;
  margin: 0.5vw 0.2vw 0px 0.2vw;
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
  opacity: 0.8;
  cursor: pointer;
  .runButton {
    margin: -0.1vh 11vw -2vh 0px;
  }
  &:hover {
    font-size: calc(0.1em + 1.3vw);
  }
`;
