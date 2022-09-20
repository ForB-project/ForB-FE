import React from "react";
import styled from "styled-components";

import TestCode from "../components/TestCode/TestCode";

const TestCodePage = () => {
  return (
    <CodeWrapStyled>
      <TestCode />
    </CodeWrapStyled>
  );
};

export default TestCodePage;

const CodeWrapStyled = styled.div`
background-color: #10141b;
width: 100%;
height: 100%;
display: flex;
item-align: center;
`;

