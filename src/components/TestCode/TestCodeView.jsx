import React from "react";
import styled from "styled-components";

const TestCodeView = ({codePrac}) => {

  return (
    <CodeViewLayout>
      <CodeView dangerouslySetInnerHTML={{__html:codePrac}}></CodeView>
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
  height: 62.7vh;
  border: 8px dashed black;
  background-color: #10141b;
  display: flex;
  align-items: center;
  justify-content: center;
`;
