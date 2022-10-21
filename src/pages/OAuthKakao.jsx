import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AccountAPI } from "../shared/api";
import {
  setRefreshToken,
  setAccessToken,
  setUserName,
} from "../shared/storage";
const OAuthKakao = () => {
  let code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const pathname = localStorage.getItem("pathname");
  const handleSubmit = async () => {
    const res = await AccountAPI.kakaoLogin(code);
    setAccessToken(res.headers["authorization"]);
    setRefreshToken(res.headers["refresh-token"]);
    setUserName(res.data.data.nickname);
    if (pathname) {
      navigate(pathname);
      localStorage.removeItem("pathname");
    } else {
      navigate("/");
    }
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

export default OAuthKakao;

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
  font-size: 10vmin;
  font-family: "neodgm", monospace;
  font-style: normal;

  background-color: white;
  background-size: cover;
`;
