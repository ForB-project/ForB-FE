import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { GrSearchAdvanced } from "react-icons/gr";
import MyCommunityContent from "./MyCommunityContent";
import MyRoadmapContent from "./MyRoadmapContent";
interface Imypagebody {
  setCloseSearch: (x: boolean) => void;
  closeSearch: boolean;
}
const MypageBody = (props: Imypagebody) => {
  const [getCommunity, setCommunity] = useState(false);
  const [choseCategory, setChoseCategory] = useState(1);
  const [likeContent, setLikeContent] = useState(false);
  return (
    <React.Fragment>
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
              setCommunity(false);
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
              props.setCloseSearch(!props.closeSearch);
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
    </React.Fragment>
  );
};

export default MypageBody;

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
