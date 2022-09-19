import React from "react";
import styled from "styled-components";

const Body = () => {
  return (
    <BodyStyled>
      <ResultStyled>
        <FSpan>F</FSpan> / <BSpan> B</BSpan>
      </ResultStyled>
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
  height: 40vh;
  line-height: 37vh; //line heitgth = height > 세로정렬
`;
const ResultStyled = styled.div`
  margin: 1%;

  font-size: 70px;
  font-weight: 700;
`;

const FSpan = styled.span`
  color: #3f428e;
`;
const BSpan = styled.span`
  color: #892525;
`;
