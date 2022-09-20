import React from "react";
import styled from "styled-components";
import { GreateHall } from "../../static";
import Logo from "../../image/ForB_pixel_noback.png"
const TestCode = () => {
  return (
    <CodeBackLayout>
      <CodeHeader>
        <img className="Logo" src={Logo} />
      </CodeHeader>
      <CodeWindow>
        <CodeInputLayout>
          <CodeInput>코드 예제</CodeInput>
          <CodeInput>코드 연습</CodeInput>
        </CodeInputLayout>
        <CodeViewLayout>
            <CodeView>코드 출력창</CodeView>
        </CodeViewLayout>
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
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
z-index: -0;
`;

const CodeHeader = styled.div`
width:100%;
height:100px;
margin:30px;
.Logo{
    width:100px;
    height:100px;
    margin-left:50px;
    margin-bottom:-50px;
  }
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
  color: gray;
`;

const CodeInputLayout = styled.div`
  width: 510px;
  height: 645px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CodeInput = styled.div`
  width: 500px;
  height: 280px;
  border: 6px dashed black;
  background-color: #10141b;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
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
border: 8px dashed black;
background-color: #10141b;
margin: auto;
display: flex;
align-items: center;
justify-content: center;
`;
