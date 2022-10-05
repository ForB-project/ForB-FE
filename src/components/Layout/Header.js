import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { getRefreshToken, getUserName } from "../../shared/storage";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
import MainLoginModal from "../Modal/MainLoginModal";
import {
  removeAccessToken,
  removeRefreshToken,
  removeUserName,
  removeQuizResult,
} from "../../shared/storage";
import { AccountAPI } from "../../shared/api";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [haveToken, setHaveToken] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const removeStorage = () => {
    removeAccessToken();
    removeRefreshToken();
    removeUserName();
    removeQuizResult();
  };
  const logout = async () => {
    await AccountAPI.logout().then(res => {
      removeStorage();
      window.location.reload();
    });
  };

  useEffect(() => {
    if (getRefreshToken()) {
      setHaveToken(true);
    } else {
      setHaveToken(false);
    }
  }, []);
  return (
    <React.Fragment>
      {!menuActive && (
        <HeaderSyled
          onClick={() => {
            setMenuActive(true);
          }}
        >
          MENU
        </HeaderSyled>
      )}
      <MenuStyled menuActive={menuActive}>
        <span
          className="closeSideBar"
          onClick={() => {
            setMenuActive(false);
          }}
        >
          ✖
        </span>
        {haveToken ? (
          <>
            <div className="sideBar">
              <p>
                <span className="username">{getUserName()}</span>님 환영합니다
              </p>
              <p>
                <NavLink end to="/" activeclassname="active">
                  홈
                </NavLink>
              </p>
              <p>
                <NavLink to="/mypage">마이페이지</NavLink>
              </p>
              <p>
                <NavLink to="/roadmap">로드맵</NavLink>
              </p>
              <p>
                <NavLink to="/result">Test결과 </NavLink>
              </p>
              <p>
                <NavLink to="/quiz">Test</NavLink>
              </p>
              <p>
                <NavLink to="/testcode">코드체험</NavLink>
              </p>
              <p>
                <NavLink to="/community">게시판</NavLink>
              </p>
              <div
                className="logoutButton"
                onClick={() => {
                  logout();
                }}
              >
                로그아웃
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="needlogin">
              <p>로그인이 필요합니다</p>
              <p>
                <NavLink end to="/" activeclassname="active">
                  홈으로 가기
                </NavLink>
              </p>
              <span
                className=""
                onClick={() => {
                  setCloseModal(!closeModal);
                }}
              >
                로그인
              </span>
            </div>

            {closeModal && (
              <Modal closeModal={() => setCloseModal(!closeModal)}>
                <MainLoginModal closeModal={() => setCloseModal(!closeModal)} />
              </Modal>
            )}
          </>
        )}
      </MenuStyled>
    </React.Fragment>
  );
};

export default Header;

const HeaderSyled = styled.div`
  position: fixed;
  right: 5%;
  top: 5%;
  /* width: 50px;
  height: 50px; */
  padding: 10px;

  border: 4px dashed black;
  border-radius: 10px;
  background-color: #10141b;
  opacity: 0.8;

  z-index: 10;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: "neodgm";
  color: white;
`;

const MenuStyled = styled.div`
  font-family: "neodgm";
  position: fixed;
  top: 0%;
  padding-top: 4vh;
  width: 20%;
  height: 100%;

  border: 4px solid black;
  background-color: white;
  color: black;

  z-index: 20;
  transition: 0.5s;
  ${props =>
    props.menuActive === true
      ? css`
          right: 0%;
          .closeSideBar {
            position: fixed;
            top: 0;
            right: 17.5%;
            font-size: 1.5rem;
          }
        `
      : css`
          right: -22%;
          .closeSideBar {
            position: fixed;
            top: 0;
            right: -17.5%;
            font-size: 1.5rem;
          }
        `}
  .sideBar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a {
    font-size: 1.3rem;
    text-decoration: none;
    color: black;

    &.active {
      font-size: 2rem;
      font-weight: 400;
    }
  }
  .username {
    position: sticky;
    font-weight: 100;
    font-size: 1.5rem;
  }
  .needlogin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    span {
      margin-top: 50px;
      font-size: 1.3rem;
      border-radius: 20px;
      transition: 0.3s;
      &:hover {
        background-color: rgb(74, 159, 228);
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
  .logoutButton {
    margin-top: 50px;
    font-size: 1.3rem;
    border-radius: 20px;
    transition: 0.3s;
    &:hover {
      background-color: rgb(74, 159, 228);

      font-weight: 700;
      cursor: pointer;
    }
  }
`;
