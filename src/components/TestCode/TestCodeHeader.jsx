import React,{useState} from "react";
import styled,{keyframes} from "styled-components";
import Logo from "../../image/ForB_pixel_noback.png"

const TestCodeHeader = ({codeNumber,plusNum,codeList}) => {

  const plusClick = () =>{
    if(codeNumber==codeList-1){
      return null;
    }else{
      plusNum(codeNumber+1);
    }
  };
  const minusClick = () =>{
if(codeNumber==0){
      return null;
    }else{
       plusNum(codeNumber-1);
    }

  };

  console.log(codeList);
  return (
    <CodeHeader>
      <img className="Logo" src={Logo} />
      <CodeButtonLayout>
        <CodeButton  onClick={minusClick}>이전</CodeButton>
        <CodeButton onClick={plusClick}>다음</CodeButton>
      </CodeButtonLayout>
    </CodeHeader>
  );
};
export default TestCodeHeader;

const moving = keyframes`
0%{
  margin-bottom: 10px;
}
  25%{
     margin-bottom: 13px;
  }
  50%{
   margin-bottom: 10px;
  }
  75%{
    margin-bottom: 7px;
  }
  100%{
    margin-bottom: 10px;
  }
`;

const CodeHeader = styled.div`
width:100%;
height:100px;
margin:30px;
display: flex;
justify-content: center;
.Logo{
    width:100px;
    margin-left:50px;
    margin-bottom:-50px;
  }
`;

const CodeButtonLayout = styled.div`
width: 320px;
height: 60px;
margin: auto;
margin-right: 38px;
margin-bottom: -45px;
display: flex;
`;

const CodeButton = styled.button`
width: 130px;
height: 40px;
margin: auto;
cursor: pointer;
background-color: #10141b;
border: 4px dashed black;
font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 20px;
  color: white;
  opacity: 0.7;
  transition: 0.1s;
&:hover{
  animation: ${moving} 2s linear infinite;
  opacity: 1;
}
`;
