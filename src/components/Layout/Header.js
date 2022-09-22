import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { getRefreshToken, getUserName } from "../../shared/Cookie";
import { NavLink } from "react-router-dom";
const Header = () => {
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
              <NavLink end to="/" activeClassName="active">
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

export default Header;

const HeaderSyled = styled.div`
  position: fixed;
  right: 5%;
  top: 5%;
  /* width: 50px;
  height: 50px; */
  padding: 10px;
  background-color: white;
  z-index: 10;
  font-size: 2rem;
  font-weight: 700;
  font-family: "neodgm";
`;

const MenuStyled = styled.div`
  font-family: "neodgm";
  position: fixed;
  top: 0%;
  width: 20%;
  height: 100%;
  background-color: white;
  z-index: 20;
  transition: 0.5s;
  ${props =>
    props.menuActive === true
      ? css`
          right: 0%;
          span {
            position: fixed;
            top: 0;
            right: 17.5%;
            font-size: 2rem;
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
    font-size: 1rem;
    text-decoration: none;
    color: black;
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
