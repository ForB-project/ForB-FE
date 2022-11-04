import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Layout/Header";
import { PageTitle } from "../elem/index";
import { BodyCommunity, LowerCommunity } from "../components/Community/index";
import { GreateHall } from "../static/index";
import { getAccessToken } from "../shared/storage";
import { useNavigate } from "react-router-dom";
import CommunityGuide from "../components/Community/CommunityGuide";

//재사용 component 파일위치 정리필

const Community = () => {
  const navigate = useNavigate();
  //로그인 안돼있으면 홈페이지로
  useEffect(() => {
    if (!getAccessToken()) {
      navigate("/");
    }
  }, [getAccessToken()]);
  return (
    <>
      <Header />
      <AllWrapStyled>
        <WarperStyled>
          <PageTitle>게시판</PageTitle>
          <CommunityGuide />
          <BodyCommunity />
          <LowerCommunity />
        </WarperStyled>
      </AllWrapStyled>
    </>
  );
};

export default Community;

const AllWrapStyled = styled.div`
  background-color: #10141b;
  display: flex;
  height: 100vh;
`;

const WarperStyled = styled.div`
  border: 20px solid black;
  border-radius: 30px;
  background-image: url(${GreateHall});
  background-size: cover;
  width: 100vw;
  padding: 1.5vh;
  color: #ffffff;
  font-family: "neodgm";
`;
