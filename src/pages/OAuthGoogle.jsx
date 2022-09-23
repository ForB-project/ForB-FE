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

  console.log(code);

  useEffect(() => {
    async function googleLogin() {
      const res = await axios.get(
        `http://3.38.209.226/login/oauth2/code/google?code=${code}`
      );
      setAccessToken(res.headers["authorization"]);
      setRefreshToken(res.headers["refresh-token"]);
      setUserName(res.data.data.nickname);
      navigate("/");
    }
    googleLogin();
  }, []);
  // const location = useLocation();
  // let code = new URL(window.location.href);
  // let postcode = code.searchParams.get("code");
  // // const parsed = location.search.split(/(\w+=[\w.-_]+)/g);
  // // let codes = parsed[1][5] + parsed[2];
  // // codes = codes.slice(0, -1);
  // // parsed[3] +
  // // parsed[4] +
  // // parsed[5] +
  // // parsed[6] +
  // // parsed[7];

  // const navigate = useNavigate();
  // const handleSubmit = async () => {
  //   const res = await AccountAPI.goolgeLogin(postcode);
  //   console.log(res);
  //   // setAccessToken(res.headers["authorization"]);
  //   // setRefreshToken(res.headers["refresh-token"]);
  //   // setUserName(res.data.data.nickname);
  //   // navigate("/");
  // };
  // React.useEffect(() => {
  //   handleSubmit();
  // }, []);

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
  font-size: 6rem;
  font-family: "neodgm", monospace;
  font-style: normal;
  /* word-break: keep-all; */
  background-color: white;
  background-size: cover;
`;
