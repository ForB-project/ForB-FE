import React from "react";
import styled from "styled-components";
import { greathall_pixel } from "../../image";

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

  border-radius: 50px;
  /* background-color: #9e6c31; */
  background-color: black;
  /* background-image: url(${greathall_pixel}); */
  /* background-size: cover; */
  transition: 0.5s;

  margin: auto;
  width: 50vw;
  height: 43vh;

  text-align: center;
  line-height: 42vh; //line heitgth = height > 세로정렬
`;
const ResultStyled = styled.div`
  margin: 1%;

  font-size: 70px;
  font-weight: 700;
`;
