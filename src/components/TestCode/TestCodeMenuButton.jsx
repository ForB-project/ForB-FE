import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { getRefreshToken, getUserName } from "../../shared/storage";
import { NavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
const MenuButton = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [haveToken, setHaveToken] = useState(false);

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
          className="closeButton"
          onClick={() => {
            setMenuActive(false);
          }}
        >
          ✖
        </span>
        {haveToken ? (
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
          </div>
        ) : (
          <p className="needlogin">로그인이 필요합니다</p>
        )}
      </MenuStyled>
    </React.Fragment>
  );
};

export default MenuButton;

const HeaderSyled = styled.div`
  position: fixed;
  right: 19.3%;
  top: 15%;
  border: 4px dashed black;
  border-radius: 8px;
  background-color: #10141b;
  width: 2.5vw;
  height: 2vh;
  padding: 6px 12px;
  display: flex;
  justify-content: center;
  color: white;
  z-index: 10;
  font-size: calc(0.4em + 0.9vw);
  font-family: "neodgm";
  cursor: pointer;
  opacity: 0.8;
  transition: 0.1s;
  &:hover {
    opacity: 1;
  }
`;

const MenuStyled = styled.div`
  font-family: "neodgm";
  position: fixed;
  top: 0%;
  width: 20%;
  height: 100%;
  color: white;
  background-color: #10141b;
  box-shadow: 6px 0px 10px 10px black;
  z-index: 20;
  transition: 0.5s;
  ${(props) =>
    props.menuActive === true
      ? css`
          right: 0%;
          span {
            position: fixed;
            top: 0;
            right: 17.5%;
            font-size: 2rem;
          }
          .closeButton {
            cursor: pointer;
            right: 18.2%;
            top: 0.8%;
            font-size: 1.5rem;
          }
        `
      : css`
          right: -20%;
          span {
            position: fixed;
            top: 0;
            right: -17.5%;
            font-size: 2rem;
          }
        `}

  .sideBar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a {
    font-size: rem;
    text-decoration: none;
    color: white;
    &.active {
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
  .username {
    position: sticky;
    font-weight: 600;
    font-size: 1.3rem;
  }
  .needlogin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
