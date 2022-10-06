import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import LoginFunction from "./LoginFunction";
import React from "react";
const MainLoginModal = props => {
  //해당 사이트로 로그인 하고 인가코드 받아오기
  const GoogleClientId = process.env.REACT_APP_GOOGLE_ID;
  const KakaoId = process.env.REACT_APP_KAKAO_ID;
  const GoogleLoginURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GoogleClientId}&redirect_uri=${process.env.REACT_APP_REDIRECT_GOOGLE}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid`;
  const KakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KakaoId}&redirect_uri=${process.env.REACT_APP_REDIRECT_KAKAO}&response_type=code`;
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
