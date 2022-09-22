import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Modal, MainLoginModal, LogoutButton, Header } from "../components";
import { MainBackImg, FEvsBE, mainFirst, main3, main2, Logo } from "../static";
import { useNavigate } from "react-router-dom";
import { getRefreshToken, getUserName } from "../shared/Cookie";

const Mainpage = () => {
  const [closeModal, setCloseModal] = useState(false);
  const [gameMode, setGameMode] = useState(false);
  const navigate = useNavigate();

  return (
    <WrapStyled>
      <Header />
      <ContainerStyled fullScreen={gameMode}>
        <img
          className="Logo"
          src={Logo}
          onClick={() => {
            setGameMode(false);
          }}
        />
        <p className="Introduce"> 프론트냐 백이냐 </p>
        <p className="Desc">
          개발을 시작하기전에 간단하게
          <br />
          나의 성향이 Front-End에 맞는지 Back-End에 <br />
          맞는지 확인 해보세요{" "}
        </p>
        <button>
          <span
            onClick={() => {
              if (!gameMode) {
                setGameMode(true);
              } else {
                navigate("/quiz");
              }
            }}
          >
            Let's Start
          </span>
        </button>
        {!gameMode && (
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
        {getRefreshToken() && <LogoutButton></LogoutButton>}
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
  background-color: #9b6343; // rgb(32, 8, 64, 1);
  width: 100%;
  height: 100%;
  z-index: -5;
`;

const ContainerStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
  ${props =>
    props.fullScreen === true
      ? css`
          width: 100%;
          height: 100%;
          border: 20px solid black;
        `
      : css`
          border: 20px solid black;
          width: 100%;
          height: 100%;
        `}
  margin: auto;
  /* border-radius: 20px; */
  font-family: "neodgm", monospace;
  font-style: normal;
  /* word-break: keep-all; */
  background-image: url(${mainFirst});
  background-size: cover;
  transition: 0.5s;
  .Logo {
    position: absolute;
    border-radius: 500px;
    top: 2%;
    left: 2%;
    width: 100px;
    height: 100px;
  }
  .Introduce {
    font-size: 4rem;
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
    font-size: 1.8rem;
    margin: 15px auto 130px auto;
    text-align: center;
    filter: drop-shadow(-2px 0 0 black) drop-shadow(2px 0 0 black)
      drop-shadow(0 -2px 0 black) drop-shadow(0 2px 0 black);
  }
  button {
    font-family: "neodgm";
    font-size: 1.5rem;
    width: 20%;
    height: 10%;
    background-color: rgb(230, 230, 230);
    border: 5px solid black;
    border-radius: 20%/60%;
    margin: 10px auto;
    transition: 0.2s;
    &:hover {
      background-color: rgb(74, 159, 228);
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
