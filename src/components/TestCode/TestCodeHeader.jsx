import React,{useState} from "react";
import styled from "styled-components";
import Logo from "../../image/ForB_pixel_noback.png"

const TestCodeHeader = () => {

  return (
    <CodeHeader>
      <img className="Logo" src={Logo} />
      <CodeButtonLayout></CodeButtonLayout>
    </CodeHeader>
  );
};
export default TestCodeHeader;

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

const CodeButtonLayout = styled.button`
width: 400px;
height: 60px;
background-color: black;
margin: auto;
margin-right: 50px;
margin-bottom: -30px;
`;
