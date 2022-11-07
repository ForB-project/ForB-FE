import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { hogwart_logo } from "../static/index";

const PageTitle = ({ children }: { children: any }) => {
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

export default PageTitle;

const UpperStyled = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  top: 3%;
  left: 3%;
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
