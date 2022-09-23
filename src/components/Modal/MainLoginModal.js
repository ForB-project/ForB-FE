import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import LoginFunction from "./LoginFunction";
import React from "react";
import GoolgeLogin from "react-google-login";
const MainLoginModal = props => {
  const GoogleLoginURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${"1023463463380-doq31dj1a7l9mmp8e3qm7tp62etlrq4g.apps.googleusercontent.com"}&redirect_uri=${"http://localhost:3000/login/oauth2/code/google"}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid`;
  const KakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${"1292d3ba37e3caecf0ce708dccf32bb2"}&redirect_uri=${"http://localhost:3000/oauth/callback/kakao"}&response_type=code`;
  function closeModal() {
    props.closeModal();
  }
  return (
    <>
      <ContainerStyled>
        <button
          className="goolgeLogin"
          onClick={() => LoginFunction(GoogleLoginURL)}
        >
          <IconStlyed>
            <FcGoogle size="1.5rem" />
          </IconStlyed>
          Google Login
        </button>

        <button
          className="kakaoLogin"
          onClick={() => LoginFunction(KakaoLoginURL)}
        >
          <IconStlyed>
            {" "}
            <RiKakaoTalkFill size="1.5rem" />
          </IconStlyed>
          Kakao Login
        </button>
      </ContainerStyled>
      <button id="modalCloseBtn" onClick={closeModal}>
        Cancel
      </button>
    </>
  );
};

export default MainLoginModal;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    transition: 0.3s;
  }
  .goolgeLogin {
    width: 100%;
    height: 27%;
    border-radius: 10%/60%;
    border: 1px solid rgb(220, 220, 220);
    background-color: rgb(245, 245, 245);
    margin-bottom: 35px;
    margin-top: 20px;
    &:hover {
      background-color: rgb(245, 245, 245, 0.3);
    }
  }
  .kakaoLogin {
    width: 100%;
    height: 27%;
    border: none;
    border-radius: 10%/60%;
    background-color: rgb(255, 235, 0);
    &:hover {
      background-color: rgb(248, 248, 0);
    }
  }
`;
const IconStlyed = styled.div`
  display: block;
  padding-right: 5px;
`;
