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
  width: 450px;
  height: 700px;
  margin: auto;
  display: flex;
  align-items: center;
  margin-left: -5px;
`;

const CodeView = styled.div`
  width: 420px;
  height: 600px;
  border: 8px dashed black;
  background-color: #10141b;
  display: flex;
  align-items: center;
  justify-content: center;
`;
