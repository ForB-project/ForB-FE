import React, { useState } from "react";
import styled from "styled-components";

const RoadMap = () => {
  //   const [closeModal, setCloseModal] = useState(false);
  return (
    <WrapStyled>
      <ContainerStyled></ContainerStyled>
    </WrapStyled>
  );
};

export default RoadMap;

const WrapStyled = styled.div`
  display: flex;

  background-color: #9b6343; // rgb(32, 8, 64, 1);
  width: 100%;
  height: 100%;
  z-index: -5;
`;
const ContainerStyled = styled.div`
  display: flex;
  position: relative;
  border: 20px solid black;
  flex-direction: column;
  width: 90%;
  height: 90%;
  margin: auto;
  border-radius: 20px;
  font-family: "neodgm", monospace;
  font-style: normal;
  /* word-break: keep-all; */
  background-color: white;
  background-size: cover;
`;
