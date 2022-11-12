import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { RunBackButton, RunFrontButton } from "../index";

const PageNation = ({
  moveNum,
  movePage,
  exampleCode,
  codePrac,
  codeIndex,
}) => {
  const [toggle, setToggle] = useState(true);

  ontoggle= () => {
    setToggle(!toggle);
  };
  return (
    <PageNationLayout>
      {exampleCode[0].id <= 1 ? null : exampleCode[0].id >= 4 ? (
        <RunBackButton
          exampleCode={exampleCode}
          codePrac={codePrac}
          codeIndex={codeIndex}
        />
      ) : (
        <RunFrontButton
          exampleCode={exampleCode}
          codePrac={codePrac}
          codeIndex={codeIndex}
        />
      )}

      <PageNationNumLayout>
        <PageNationNum
          toggle={codeIndex === 0 ? toggle : null}
          onClick={() => moveNum(0)}
        >
          1
        </PageNationNum>
        <PageNationNum
          toggle={codeIndex === 1 ? toggle : null}
          onClick={() => moveNum(1)}
        >
          2
        </PageNationNum>
      </PageNationNumLayout>
      <MoveButtonLayout>
        <FrontBackButton
          toggle={exampleCode[codeIndex].id <= 1 ? toggle : null}
          onClick={() =>
            exampleCode[codeIndex].id <= 1
              ? null
              : movePage("h")
          }
        >
          HTML
        </FrontBackButton>
        <FrontBackButton
        toggle={exampleCode[codeIndex].id === 2 || exampleCode[codeIndex].id === 3 ? toggle : null}
          onClick={() =>
            exampleCode[codeIndex].id === 2 || exampleCode[codeIndex].id === 3
              ? null
              : movePage("f")
          }
        >
          JavaScript
        </FrontBackButton>
        <FrontBackButton
        toggle={exampleCode[codeIndex].id >= 4 ? toggle : null}
          onClick={() =>
            exampleCode[codeIndex].id >= 4
              ? null
              : movePage("b")
          }
        >
          Java
        </FrontBackButton>
      </MoveButtonLayout>
    </PageNationLayout>
  );
};
export default PageNation;

const PageNationLayout = styled.div`
  width: 61.8vw;
  height: 40px;
  display: flex;
  flex-direction: row;
`;

const PageNationNumLayout = styled.div`
  width: 3.5vw;
  min-width: 50px;
  height: 2vw;
  min-height: 22px;
  margin: -0.1vh 0px -2vh auto;
  border: 2px dashed black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #10141b;
`;

const PageNationNum = styled.button`
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  background-color: #10141b;
  border: none;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: calc(0.2em + 0.8vw);
  font-weight: 500;
  opacity: ${(props) => (props.toggle ? 1 : 0.6)};
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:focus{
    opacity: 1;
  }
 
`;

const MoveButtonLayout = styled.div`
width: 29vw;
min-width: 180px;
display: flex;
justify-content: end;
`;

const FrontBackButton = styled.button`
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
  opacity: ${(props) => (props.toggle ? 1 : 0.8)};
  cursor: pointer;
  .runButton {
    margin: -0.1vh 11vw -2vh 0px;
  }
  &:hover {
    opacity: 1;
  }
  &:focus{
    opacity: 1;
  }
`;
