import React,{useState} from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { GreateHall } from "../../static";
import Logo from "../../image/ForB_pixel_noback.png"

import TestCodeView from "./TestCodeView"

const TestCode = () => {
  const [codePrac, setCodePrac] = useState(null);
  const codeList = useSelector((state)=>state.testCode.testCode);
 
  console.log(codePrac);
  return (
    <CodeBackLayout>
      <CodeHeader>
        <img className="Logo" src={Logo} />
      </CodeHeader>
      <CodeWindow>
        <CodeInputLayout>
          <CodeExample>{codeList[0].answerFront}</CodeExample>
          <CodePractice onChange={(e)=>setCodePrac(e.target.value) }/>
        </CodeInputLayout>
            <TestCodeView codePrac={codePrac}/>
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