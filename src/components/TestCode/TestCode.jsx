import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { GreateHall } from "../../static/index";
import { TestCodeView, Header, PageNation } from "../index";
import {
  saveHTMLPracCode,
  save_JavaScript_Java_PracCode
} from "../../redux/modules/TestCodeSlice";
import { PageTitle } from "../../elem";

const TestCode = () => {
  const dispatch = useDispatch();

  const testCodeList = useSelector(state => state.testCode.testCode);
  const javaScriptCodeList = useSelector(state => state.testCode.frontCode);
  const javaCodeList = useSelector(state => state.testCode.backCode);
  const result = useSelector(state => state.testCode.result);
  
  const [codeIndex, setCodeIndex] = useState(0);
  const [exampleCode, setExampleCode] = useState(testCodeList);
  const [codePrac, setCodePrac] = useState("");
  const resultPracCode = {
    id: exampleCode[codeIndex].id,
    codePrac,
  };

  // 페이지 네이션 기능
  const moveNum = codeIndex => {
    setCodeIndex(codeIndex);
    // 사용자가 쓴 예제코드, 출력 저장 용도
    if (exampleCode[codeIndex].id >= 2) {
      dispatch(save_JavaScript_Java_PracCode(resultPracCode));
    } else {
      dispatch(saveHTMLPracCode(resultPracCode));
    }
  };

  // 체험 코드 유형 변경 기능
  const movePage = (page) => {
    if (page === "h") {
      setExampleCode(testCodeList);
    }
    else if (page === "f") {
      setExampleCode(javaScriptCodeList);
    }
    else if (page === "b") {
      setExampleCode(javaCodeList);
    }
    if (exampleCode[codeIndex].id <= 1) {
      dispatch(saveHTMLPracCode(resultPracCode));
    } else {
      dispatch(save_JavaScript_Java_PracCode(resultPracCode));
    }
    setCodeIndex(0);
  };

  // 사용자가 쓴 예제코드, 출력 저장 용도
  useEffect(() => {
    setCodePrac(
      result.find(list => list.id === exampleCode[codeIndex].id).pracCode
    );
  }, [exampleCode, codeIndex]);

  return (
    <CodeBackLayout>
      <Header />
      <PageTitle>코드체험</PageTitle>
      <CodeWindow>
        <CodeInputLayout>
          <CodeExample>{exampleCode[codeIndex].exampleCode}</CodeExample>
          <CodePractice
            placeholder="코드를 입력해볼까요?"
            value={codePrac}
            onChange={e => setCodePrac(e.target.value)}
          />
        </CodeInputLayout>
        <TestCodeView
          exampleCode={exampleCode}
          codeIndex={codeIndex}
          codePrac={codePrac}
        />
      </CodeWindow>
      <PageNation
        moveNum={moveNum}
        movePage={movePage}
        exampleCode={exampleCode}
        codePrac={codePrac}
        codeIndex={codeIndex}
      />
    </CodeBackLayout>
  );
};

export default TestCode;

const CodeBackLayout = styled.div`
  width: 100%;
  height: 94vh;
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
  width: 65vw;
  height: 68vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: calc(0.1em + 1.1vw);
  color: white;
`;

const CodeInputLayout = styled.div`
  width: 45vw;
  height: 66vh;
  min-height: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CodeExample = styled.div`
  width: 28vw;
  min-width: 263px;
  height: 30vh;
  min-height: 140px;
  border: 6px dashed black;
  background-color: #10141b;
  margin: auto;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  white-space: pre-wrap;
  font-size: calc(0.5em + 0.4vw);
`;

const CodePractice = styled.textarea`
  width: 28vw;
  min-width: 259px;
  height: 30vh;
  min-height: 140px;
  border: 6px dashed black;
  background-color: #10141b;
  margin: auto;
  font-size: 2vmin;
  font-weight: 700;
  color: white;
  resize: none;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: grey;
  }
  ::-webkit-scrollbar-track {
    background-color: #2f3542;
  }
`;
