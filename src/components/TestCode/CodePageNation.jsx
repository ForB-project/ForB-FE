import React from "react";
import styled from "styled-components";

const PageNation = ({movePage,frontPage,backPage,htmlPage}) => {

  return (
<PageNationLayout>
    <PageNationNumLayout>
      <PageNationNum onClick={()=>movePage(0)}>1</PageNationNum>
      <PageNationNum onClick={()=>movePage(1)}>2</PageNationNum>
    </PageNationNumLayout>
    <FrontBackButton onClick={()=>htmlPage()}>HTML</FrontBackButton>
    <FrontBackButton onClick={()=>frontPage()}>Front</FrontBackButton>
    <FrontBackButton onClick={()=>backPage()}>Back</FrontBackButton>
    </PageNationLayout>
  );
};
export default PageNation;

const PageNationLayout = styled.div`
width: 62vw;
height: 40px;
display: flex;
flex-direction: row;
`;

const PageNationNumLayout = styled.div`
  width: 5vw;
  min-width: 42px;
  height: 2vw;
  min-height: 22px;
  margin:-0.1vh 11vw -2vh auto ;
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
`;

const FrontBackButton = styled.button`
 width: 5vw;
  min-width: 42px;
  height: 2vw;
  min-height: 22px;
  margin: 0.5vw 0.2vw 0px 0.5vw;
  margin-top: -0.1vh;
  margin-bottom: -2vh;
  border: 2px dashed black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #10141b;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: calc(0.1em + 1.2vw);
  font-weight: 500;
  color: white;
  cursor: pointer;
`;


