import React from "react";
import styled from "styled-components";

const PageNation = ({movePage}) => {

  return (
    <PageNationLayout>
      <PageNationNum onClick={()=>movePage(0)}>1</PageNationNum>
      <PageNationNum onClick={()=>movePage(1)}>2</PageNationNum>
      <PageNationNum onClick={()=>movePage(2)}>3</PageNationNum>
    </PageNationLayout>
  );
};
export default PageNation;

const PageNationLayout = styled.div`
  width: 7vw;
  height: 30px;
  margin: auto;
  margin-top: -0.1vh;
  margin-bottom: -2vh;
  border: 2px dashed black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #10141b;
  
  

`;

const PageNationNum = styled.button`
width:20px;
height: 20px;
margin: 0px 5px;
background-color: #10141b;
border: none;
font-family: "neodgm", monospace;
  font-style: normal;
  font-size: calc(0.1em + 1.2vw);
  font-weight: 500;
  opacity: 0.6;
  color: white;
  cursor: pointer;
&:hover{
    opacity: 1;
  }
  &:focus{
    opacity: 1;
  }

display: flex;
  align-items: center;
  justify-content: center;
`;


