import React, { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { GreateHall } from "../../static/index";

import TestCodeView from "./TestCodeView";
import TestCodeHeader from "./TestCodeHeader";

const TestCode = () => {
  const codeList = useSelector((state) => state.testCode.testCode);
  const [codeNumber, setCodeNumber] = useState(0);
  const [codePrac, setCodePrac] = useState("코드를 입력해볼까요?");
  const [savePracCode, setSavePracCode] = useState(codeList);

  const plusNum = (codeId) => {
    setCodeNumber(codeId);
    setCodePrac("코드를 입력해볼까요?");
  };

  console.log(codePrac);

  return (
    <CodeBackLayout>
      <TestCodeHeader
        codeNumber={codeNumber}
        plusNum={plusNum}
        codeList={codeList.length}
      />
      <CodeWindow>
        <CodeInputLayout>
          <CodeExample>{codeList[codeNumber].exampleCode}</CodeExample>
          <CodePractice
            value={codePrac}
            onChange={(e) => setCodePrac(e.target.value)}
          />
        </CodeInputLayout>
        <TestCodeView codePrac={codePrac} />
      </CodeWindow>
    </CodeBackLayout>
  );
};

export default TestCode;

const CodeBackLayout = styled.div`
  width: 85%;
  height: 800px;
  border: 20px solid black;
  border-radius: 30px;
  background-image: url(${GreateHall});
  background-size: cover;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -0;
`;

const CodeWindow = styled.div`
  width: 1100px;
  height: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 20px;
  color: white;
`;

const CodeInputLayout = styled.div`
  width: 600px;
  height: 645px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CodeExample = styled.div`
  width: 500px;
  height: 280px;
  border: 6px dashed black;
  background-color: #10141b;
  margin: auto;
  display: flex;
  align-items: center;
  white-space: pre-wrap;
`;

const CodePractice = styled.textarea`
  width: 500px;
  height: 280px;
  border: 6px dashed black;
  background-color: #10141b;
  margin: auto;
  font-size: 20px;
  font-weight: 700;
  color: white;
  resize: none;
`;
