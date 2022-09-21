import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo_black from "../../image/logo_black.png";
import hogwart_logo from "../../image/hogwart_logo.png";

const Upper = ({ children }) => {
  const navigate = useNavigate();

  return (
    <UpperStyled>
      <UpperBoxstyled>
        <LogoStyled src={hogwart_logo} onClick={() => navigate("/")} />
        <TitleleftStyled>{children}</TitleleftStyled>
      </UpperBoxstyled>
    </UpperStyled>
  );
};

export default Upper;

const UpperStyled = styled.div`
  /* border: 1px solid red; */

  height: 5vh;
  font-family: "neodgm";
`;
const UpperBoxstyled = styled.div`
  /* border: 1px dashed purple; */

  width: 85vw;
  height: 5vh;
`;
const LogoStyled = styled.img`
  height: 60px;
  width: 65px;
  border: none;
  float: left;
`;
const TitleleftStyled = styled.div`
  /* border: 1px dashed blue; */

  display: inline-block;
  color: white;
  /* color: #9e6c31; */

  margin-top: 1vh;
  margin-left: 1vw;

  font-size: 30px;
  text-align: right;
  line-height: 4vh;
`;
