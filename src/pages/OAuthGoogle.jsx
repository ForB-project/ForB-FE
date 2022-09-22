import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { AccountAPI } from "../shared/api";
const OAuthGoogle = () => {
  //   const [closeModal, setCloseModal] = useState(false);

  const getToken = async code => {
    const res = await AccountAPI.goolgeLogin(code);
    console.log(res);
  };

  const location = useLocation();
  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const authorizationCode = searchParams.get("code");
    getToken(authorizationCode);
  }, [location]);
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
