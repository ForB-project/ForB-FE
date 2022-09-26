import React from "react";
import styled from "styled-components";

const BodyResult = ({ children }) => {
  return (
    <BodyStyled>
      <ResultStyled>{children}</ResultStyled>
    </BodyStyled>
  );
};

export default BodyResult;

const BodyStyled = styled.div`
  border: 1px dashed black;

  border-radius: 50px;
  background-color: black;
  opacity: 0.95;
  transition: 0.5s;

  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
  width: 70vw;
  height: 70vh;

  text-align: center;
  line-height: 70vh; //line heitgth = height > 세로정렬
`;
const ResultStyled = styled.div`
  margin: 1%;

  font-size: 100px;
  font-weight: 700;
`;
