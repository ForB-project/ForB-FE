import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import styled from "styled-components";

import {
  __sendPracCode1,
  __sendPracCode2,
} from "../../redux/modules/TestCodeSlice";

const RunFrontButton = ({
  exampleCode,
  codePrac,
  codeIndex,
}) => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.testCode.result.data);
  const [saveAnswer, setSaveAnswer] = useState([]);
  const [codeList, setCodeList] = useState({});

  const runFrontCode = () => {
    const regex = /[^0-9]/g;
    if (exampleCode[codeIndex].id === 2) {
      const sendCodeInt = codePrac.split(/'/)
      console.log(sendCodeInt);
    } else if (exampleCode[codeIndex].id === 3) {
      const forIf = codePrac.replace(regex, "");
      const firstInt = forIf.slice(-2);
      const secondInt = forIf.slice(-4, 3);
      setCodeList({
        ...codeList,
        inputInt1: Number(firstInt),
        inputInt2: Number(secondInt),
      });
      setSaveAnswer([{answer:result,id:exampleCode[codeIndex].id}])
    }
  };

  useEffect(() => {
    if (exampleCode[codeIndex].id === 4) {
      dispatch(__sendPracCode1(codeList));
    } else if (exampleCode[codeIndex].id === 5) {
      dispatch(__sendPracCode2(codeList));
    }
  }, [codeList]);
  
  return (
        <RunFrontCode
          className="runButton"
          onClick={()=>runFrontCode()}
        >
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
