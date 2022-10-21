import React, { useEffect, useState } from "react";
import { useQuery, useInfiniteQuery } from "react-query";
import styled, { keyframes } from "styled-components";
import {
  RoadmapContent,
  Header,
  ModalWide,
  AddContentModal,
  RoadmapGuide,
  SearchModal,
  MyRoadmapContent,
  MyCommunityContent,
} from "../components";
import { CommunityContentAPI, ContentAPI, RoadmapAPI } from "../shared/api";
import { GreateHall } from "../static";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { GrSearchAdvanced } from "react-icons/gr";
import { getAccessToken } from "../shared/storage";
import { PageTitle } from "../elem";
const Mypage = () => {
  const navigate = useNavigate();
  const [closeSearch, setCloseSearch] = useState(false);
  const [getCommunity, setCommunity] = useState(false);
  const [choseCategory, setChoseCategory] = useState(1);
  const [likeContent, setLikeContent] = useState(false);

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
        <BodyStyled>
          <div className="category">
            <CategoryStyled
              onClick={() => {
                setChoseCategory(1);
                setCommunity(false);
              }}
            >
              나의 로드맵 자료
            </CategoryStyled>
            <CategoryStyled
              onClick={() => {
                setChoseCategory(2);
                setCommunity();
              }}
            >
              좋아요 로드맵자료
            </CategoryStyled>
            <CategoryStyled
              onClick={() => {
                setCommunity(true);
                setLikeContent(false);
              }}
            >
              나의 게시판글
            </CategoryStyled>
            <CategoryStyled
              onClick={() => {
                setCommunity(true);
                setLikeContent(true);
              }}
            >
              좋아요 누른 게시판글
            </CategoryStyled>
          </div>
          <ContentContainerStyled>
            <button
              className="Search"
              onClick={() => {
                setCloseSearch(!closeSearch);
              }}
            >
              <GrSearchAdvanced />
            </button>

            <div className="ContentBorder">
              {getCommunity ? (
                <MyCommunityContent likeContent={likeContent} />
              ) : (
                <MyRoadmapContent querykey={choseCategory} />
              )}
            </div>
          </ContentContainerStyled>
        </BodyStyled>
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
const BodyStyled = styled.div`
  display: grid;
  width: 100%;
  height: 80%;
  grid-template-columns: 20% 80%;
  .category {
    grid-column-start: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid white;
  }
`;
const fontsize = keyframes`
0%{
  font-size: 2rem;
}
  25%{
    font-size: 3rem;
  }
  50%{
    font-size: 2rem;;
  }
  75%{
    font-size: 1rem;
  }
  100%{
    font-size: 2rem;
  }
`;
const ContentContainerStyled = styled.div`
  position: relative;
  grid-column-start: 2;
  overflow: auto;
  display: grid;
  grid-template-rows: 3% 97%;
  border: 1px solid white;
  width: 100%;
  .ContentBorder {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    grid-row-start: 2;
  }
  .Search {
    position: fixed;
    margin-top: 2%;
    margin-left: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    z-index: 5;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    &:hover {
      animation: ${fontsize} 2s ease-in infinite;
    }
  }
  .Addbutton {
    position: fixed;
    margin-top: 8%;
    margin-left: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    z-index: 5;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    transition: 0.3s;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const CategoryStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 5%;
  margin-top: 10px;
  border: 1px solid white;
  border-radius: 10px;
  transition: all 0.1s ease;
  &:hover {
    background-color: black;
    border: 1px solid black;
    cursor: pointer;
  }
`;
