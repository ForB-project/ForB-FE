import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo_black from "../../image/logo_black.png";

const Upper = ({ children }) => {
  const navigate = useNavigate();

  return (
    <UpperStyled>
      <UpperBoxstyled>
        <LogoStyled src={logo_black} onClick={() => navigate("/")} />
        <TitleleftStyled>{children}</TitleleftStyled>
      </UpperBoxstyled>
    </UpperStyled>
  );
};

export default Upper;

const UpperStyled = styled.div`
  /* border: 1px solid red; */

  height: 5vh;
`;
const UpperBoxstyled = styled.div`
  /* border: 1px dashed purple; */

  width: 85vw;
  height: 3vh;
`;
const LogoStyled = styled.img`
  height: 50px;
  width: 50px;
  border: none;
  float: left;
`;
const TitleleftStyled = styled.div`
  /* border: 1px dashed blue; */

  display: inline-block;
  color: #9e6c31;
  font-size: 30px;

  line-height: 5vh;
  margin-right: 65vw;
`;
