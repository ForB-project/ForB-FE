import React, { useState } from "react";
import styled from "styled-components";
import dompurify from "dompurify";
import { useSelector } from "react-redux";

const TestCodeView = ({ codePrac, exampleCode, codeNumber }) => {
  //보안 문제로 인해 dompurify패키지 사용했습니다.
  const sanitizer = dompurify.sanitize;

  const result = useSelector((state) => state.testCode.result.data);
  const [resultBack, setResultBack] = useState(result);

  console.log(resultBack);
  console.log(exampleCode[codeNumber].id);
  return (
    <CodeViewLayout>
      {codePrac === "" ? (
        <CodeView>코드를 입력해볼까요?</CodeView>
      ) : exampleCode[codeNumber].id === 4 ||
        exampleCode[codeNumber].id === 5 ? (
        <CodeView dangerouslySetInnerHTML={{ __html: result }} />
      ) : (
        <CodeView dangerouslySetInnerHTML={{ __html: sanitizer(codePrac) }} />
      )}
    </CodeViewLayout>
  );
};
export default TestCodeView;

const CodeViewLayout = styled.div`
  width: 45vw;
  height: 66.3vh;
  min-height: 300px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CodeView = styled.div`
  width: 28vw;
  height: 63.4vh;
  border: 8px dashed black;
  background-color: #10141b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
