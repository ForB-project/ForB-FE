import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header, RoadmapGuide, SearchModal, MypageBody } from "../components";
import { GreateHall } from "../static";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../shared/storage";
import { PageTitle } from "../elem";
const Mypage = () => {
  const navigate = useNavigate();
  const [closeSearch, setCloseSearch] = useState(false);

  //로그인 안돼있으면 홈페이지로
  useEffect(() => {
    if (!getAccessToken()) {
      navigate("/");
    }
  }, [getAccessToken()]);

  return (
    <WrapStyled>
      <Header />

      {closeSearch && (
        <SearchModal closeSearch={() => setCloseSearch(!closeSearch)} />
      )}
      <ContainerStyled>
        <PageTitle>마이페이지</PageTitle>
        <div className="hr">
          <RoadmapGuide />
        </div>
        <MypageBody setCloseSearch={setCloseSearch} closeSearch={closeSearch} />
      </ContainerStyled>
    </WrapStyled>
  );
};

export default Mypage;

const WrapStyled = styled.div`
  display: flex;

  background-color: #10141b; // rgb(32, 8, 64, 1);
  width: 100%;
  height: 100%;
  z-index: -5;
`;
const ContainerStyled = styled.div`
  display: flex;
  position: relative;
  border: 20px solid black;
  flex-direction: column;
  width: 95%;
  height: 95%;
  margin: auto;
  color: white;
  border-radius: 20px;
  font-family: "neodgm", monospace;
  font-style: normal;
  /* word-break: keep-all; */
  background-image: url(${GreateHall});
  background-size: cover;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    height: 15%;
  }
  .hr {
    width: 90%;
    margin: 10% auto 0 auto;
    border-top: 1px solid rgb(230, 222, 222);
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ForB {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 10%;
    height: 5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1rem;
    font-family: "neodgm";
    color: white;
    background-color: transparent;
    transition: all 0.2s ease;
    &:hover {
      background-color: black;
      border: 1px solid black;
      cursor: pointer;
    }
  }
`;
