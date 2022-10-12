import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  __sendPracCode3,
  addFrontPracCode,
} from "../../redux/modules/TestCodeSlice";

const RunFrontButton = ({ exampleCode, codePrac, codeIndex }) => {
  const dispatch = useDispatch();
  const [frontResult, setFrontResult] = useState({});
  const [forSendResult, setForSendResult] = useState({});

  const runFrontCode = () => {
    const regex = /[^0-9]/g;
    if (exampleCode[codeIndex].id === 2) {
      const firstAnswer = codePrac.split(/=|;/)[1].trim();
      const forIf = codePrac.replace(regex, "");
      const secondAnswer = forIf.slice(firstAnswer.length, forIf.length);
      if (firstAnswer >= secondAnswer) {
        setFrontResult({
          ...frontResult,
          id: exampleCode[codeIndex].id,
          answer: "택시를 타고 가라",
          codePrac,
        });
      } else {
        setFrontResult({
          ...frontResult,
          id: exampleCode[codeIndex].id,
          answer: "걸어가라",
          codePrac,
        });
      }
    } else if (exampleCode[codeIndex].id === 3) {
      const sendCodeInt = codePrac.split(";");
      const firstInt = sendCodeInt[1].replace(regex, "");
      const secondInt = sendCodeInt[3].replace(regex, "");
      setFrontResult({
        ...frontResult,
        id: exampleCode[codeIndex].id,
        codePrac,
      });
      setForSendResult({
        ...forSendResult,
        inputInt1: Number(firstInt),
        inputInt2: Number(secondInt),
      });
    }
  };

  useEffect(() => {
    if (exampleCode[codeIndex].id === 2) {
      dispatch(addFrontPracCode(frontResult));
    } else if (exampleCode[codeIndex].id === 3) {
      dispatch(addFrontPracCode(frontResult));
      dispatch(__sendPracCode3(forSendResult));
    }
  }, [frontResult]);

  return (
    <RunFrontCode className="runButton" onClick={() => runFrontCode()}>
      run
    </RunFrontCode>
  );
};
export default RunFrontButton;

const RunFrontCode = styled.button`
  width: 5vw;
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
  opacity: 0.6;
  cursor: pointer;
  .runButton {
    margin: -0.1vh 11vw -2vh 0px;
  }
  &:hover {
    opacity: 1;
  }
`;
