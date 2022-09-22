import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { AccountAPI } from "../shared/api";
const OAuthGoogle = () => {
  let code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const res = await AccountAPI.goolgeLogin(code);
    console.log(res);
    // setAccessToken(res.headers["authorization"]);
    // setRefreshToken(res.headers["refresh-token"]);
    // setUserName(res.data.data.nickname);
    // navigate("/");
  };
  React.useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <WrapStyled>
      <ContainerStyled>카카오로그인 중입니다.</ContainerStyled>
    </WrapStyled>
  );
};

export default OAuthGoogle;

const WrapStyled = styled.div`
  display: flex;

  background-color: black; // rgb(32, 8, 64, 1);
  width: 100%;
  height: 100%;
  z-index: -5;
`;
const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 20px solid black;
  flex-direction: column;
  width: 95%;
  height: 95%;
  margin: auto;
  border-radius: 20px;
  font-size: 6rem;
  font-family: "neodgm", monospace;
  font-style: normal;
  /* word-break: keep-all; */
  background-color: white;
  background-size: cover;
`;
