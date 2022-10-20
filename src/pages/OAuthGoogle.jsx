import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { AccountAPI } from "../shared/api";
import {
  setAccessToken,
  setRefreshToken,
  setUserName,
} from "../shared/storage";
const OAuthGoogle = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const pathname = localStorage.getItem("pathname");
  // 페이지 redirect 해서 오면 인가코드 백엔드로 넘기고 토큰 받아와서 localstorage에 저장
  // 쿠키에 저장 안한 이유는 로그아웃할때 쿠기 삭제를 위해 로직을 만들었는데 쿠키가 바로 삭제 되지않고 남아있어 변경했다
  useEffect(() => {
    async function googleLogin() {
      const res = await AccountAPI.goolgeLogin(code);
      setAccessToken(res.headers["authorization"]);
      setRefreshToken(res.headers["refresh-token"]);
      setUserName(res.data.data.nickname);
      if (pathname) {
        navigate(pathname);
        localStorage.removeItem("pathname");
      } else {
        navigate("/");
      }
    }
    googleLogin();
  }, []);

  return (
    <WrapStyled>
      <ContainerStyled>구글로그인 중입니다.</ContainerStyled>
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
  font-size: 10vmin;
  font-family: "neodgm", monospace;
  font-style: normal;
  /* word-break: keep-all; */
  background-color: white;
  background-size: cover;
`;
