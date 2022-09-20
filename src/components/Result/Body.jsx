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
  /* border: 1px dashed red; */

  border-radius: 20px;
  background-color: #9e6c31;

  margin: auto;
  width: 50vw;
  height: 43vh;
  line-height: 42vh; //line heitgth = height > 세로정렬
`;
const ResultStyled = styled.div`
  margin: 1%;

  font-size: 70px;
  font-weight: 700;
`;
