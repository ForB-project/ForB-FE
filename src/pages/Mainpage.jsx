import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Modal, MainLoginModal, LogoutButton, Header } from "../components";
import { Mainimg, hogwart_logo, Logo } from "../static";
import { useNavigate } from "react-router-dom";
import {
  getRefreshToken,
  getExpiration,
  removeExpiration,
} from "../shared/storage";

const Mainpage = () => {
  const [closeModal, setCloseModal] = useState(false);
  const [isLogin, setIsLogin] = useState(getRefreshToken());
  const navigate = useNavigate();
  const expiration = getExpiration();
  useEffect(() => {
    if (expiration) {
      removeExpiration();
      window.alert("로그인이 만료되었습니다 다시 로그인해주세요");
    }
  }, []);
  return (
    <WrapStyled>
      <Header />
      <ContainerStyled>
        <img className="Logo" src={hogwart_logo} />
        <p className="Introduce"> 프론트 or 백 </p>
        <p className="Desc">
          개발을 시작하기전에 간단하게
          <br />
          나의 성향이 Front-End에 맞는지 Back-End에 <br />
          맞는지 확인 해보세요{" "}
        </p>
        <button>
          <span
            onClick={() => {
              navigate("/quiz");
            }}
          >
            Let's Start
          </span>
        </button>

        {isLogin ? (
          ""
        ) : (
          <button>
            <span
              onClick={() => {
                setCloseModal(!closeModal);
              }}
            >
              Login
            </span>
          </button>
        )}

        {isLogin && <LogoutButton></LogoutButton>}
      </ContainerStyled>
      {closeModal && (
        <Modal closeModal={() => setCloseModal(!closeModal)}>
          <MainLoginModal closeModal={() => setCloseModal(!closeModal)} />
        </Modal>
      )}
    </WrapStyled>
  );
};

export default Mainpage;

const WrapStyled = styled.div`
  display: flex;
  /* position: relative; */
  background-color: #10141b; // rgb(32, 8, 64, 1);
  width: 100%;
  height: 100vh;
  z-index: -5;
`;

const ContainerStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  box-sizing: border-box;

  border: 20px solid black;

  width: 100%;
  height: 100%;

  margin: auto;
  /* border-radius: 20px; */
  font-family: "neodgm", monospace;
  font-style: normal;
  /* word-break: keep-all; */
  background-image: url(${Mainimg});
  background-size: cover;
  transition: 0.5s;
  .Logo {
    position: absolute;
    border-radius: 500px;
    top: 2%;
    left: 2%;
    width: 15vmin;
  }
  .Introduce {
    font-size: 10vmin;
    color: transparent;
    font-weight: 700;
    background: linear-gradient(90deg, pink 0, orange 100%);
    margin: 80px auto 50px auto;
    -webkit-background-clip: text;
    filter: drop-shadow(-4px 0 0 black) drop-shadow(4px 0 0 black)
      drop-shadow(0 -4px 0 black) drop-shadow(0 4px 0 black);
  }
  .Desc {
    color: white;
    font-size: 4vmin;
    margin: 15px auto 130px auto;
    text-align: center;
    filter: drop-shadow(-2px 0 0 black) drop-shadow(2px 0 0 black)
      drop-shadow(0 -2px 0 black) drop-shadow(0 2px 0 black);
  }
  button {
    font-family: "neodgm";
    font-size: 4vmin;
    width: 20%;
    height: 10%;
    background-color: rgb(178, 183, 187);
    border: 5px solid black;
    border-radius: 20%/60%;
    margin: 10px auto;
    transition: 0.2s;
    &:hover {
      background-color: rgb(74, 159, 228);
      cursor: pointer;
    }
    span {
      display: block;

      color: white;
      width: auto;
      height: auto;

      filter: drop-shadow(-2px 0 0 black) drop-shadow(2px 0 0 black)
        drop-shadow(0 -2px 0 black) drop-shadow(0 2px 0 black);
    }
  }
`;
