import React from "react";
import styled from "styled-components";

const TestCode = () => {
  return (
    <CodeBackLayout>
      <CodeWindow>
        <CodeInputLayout>
          <CodeInput />
          <CodeInput />
        </CodeInputLayout>
        <CodeViewLayout>
            <CodeView/>
        </CodeViewLayout>
      </CodeWindow>
    </CodeBackLayout>
  );
};

export default TestCode;

const CodeBackLayout = styled.div`
  width: 90%;
  height: 800px;
  border-radius: 30px;
  background-color: white;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CodeWindow = styled.div`
  width: 1100px;
  height: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CodeInputLayout = styled.div`
  width: 510px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CodeInput = styled.input`
  width: 500px;
  height: 250px;
  background-color: #d7cbc1;
  margin: auto;
`;

const CodeViewLayout =styled.div`
width: 550px;
height: 700px;
margin:auto;
display: flex;
align-items: center;
`;

const CodeView = styled.div`
width: 520px;
height: 600px;
background-color: #d7cbc1;
margin: auto;
`;
