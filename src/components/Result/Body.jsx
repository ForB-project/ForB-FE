import React from "react";
import styled from "styled-components";

const Body = ({ children }) => {
  return (
    <BodyStyled>
      <ResultStyled>{children}</ResultStyled>
    </BodyStyled>
  );
};

export default Body;

const BodyStyled = styled.div`
  border: 1px dashed black;

  border-radius: 50px;
  background-color: black;
  opacity: 0.95;
  transition: 0.5s;

  margin: auto;
  width: 50vw;
  height: 50vh;
  padding-top: 1vh;

  text-align: center;
  line-height: 50vh; //line heitgth = height > 세로정렬
`;
const ResultStyled = styled.div`
  margin: 1%;

  font-size: 100px;
  font-weight: 700;
`;
