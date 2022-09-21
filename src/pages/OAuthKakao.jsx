import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { AccountAPI } from "../shared/api";
const OAuthKakao = () => {
  //   const [closeModal, setCloseModal] = useState(false);
  const getToken = async () => {
    const res = await AccountAPI.kakaoLogin();
    console.log(res);
  };
  const location = useLocation();
  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const authorizationCode = searchParams.get("code");
    getToken(authorizationCode);
    const parsed = location.search.split(/(\w+=[\w.-]+)/g);
  }, [location]);
  return (
    <WrapStyled>
      <ContainerStyled>카카오로그인 중입니다.</ContainerStyled>
    </WrapStyled>
  );
};

export default OAuthKakao;

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
