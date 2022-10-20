import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import { Logo, mainFirst } from "../../static";
import { LikeAPI } from "../../shared/api";
import { useMutation, useQueryClient } from "react-query";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const SearchModalContent = forwardRef((props, ref) => {
  const queryClient = useQueryClient();
  const thumbnail = props.data.thumbnail;
  function ContentHref() {
    window.open(props.data.link, "_blank");
  }
  const keyword = props.keyword;
  const contentLike = async contentId => {
    const res = await LikeAPI.togglelike(contentId);

    return res;
  };
  const toggleLike = useMutation(contentLike, {
    onSuccess: res => {
      queryClient.invalidateQueries(["SearchContentList", keyword]);
    },
  });
  return (
    <>
      <ContentStyled>
        <ContentImgStyled
          thumbnail={thumbnail}
          onClick={() => {
            ContentHref();
          }}
        />

        <StackStyled>
          <span className="ContentTitle">{props.data.title}</span>
          <p className="ContentDesc">{props.data?.desc}</p>
        </StackStyled>
        <div
          className="LikeContent"
          onClick={() => {
            toggleLike.mutate(props.data.id);
          }}
        >
          <div className="heartBox">
            {props.data.heartCheck ? (
              <FaHeart className="icon" />
            ) : (
              <FaRegHeart className="icon" />
            )}
          </div>
        </div>
        <div className="inviewref" ref={ref}></div>
      </ContentStyled>
    </>
  );
});

export default SearchModalContent;

const iconhover = keyframes`

        0% {
          font-size: 1rem;
        }
        50% {
          font-size: 1.5rem;
        }
        100% {
          font-size: 2rem;
        }
      `;
const ContentStyled = styled.div`
  display: grid;
  color: white;
  width: 90%;
  height: 100px;
  grid-template-columns: 30% 60% 10%;
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 10px;
  &:hover {
    border: 1px solid black;
    background-color: black;
    cursor: pointer;
  }
  .LikeContent {
    grid-column-start: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: black;
    }
    .heartBox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 60%;
    }
    .icon {
      transition: 0.2s;
      animation: ${iconhover} 1s 1s infinite linear alternate;
      &:hover {
        color: pink;
      }
    }
  }
`;

const ContentImgStyled = styled.div`
  grid-column-start: 1;
  border-radius: 10px;
  width: 200px;
  height: 100px;
  background-image: url(${props =>
    props.thumbnail ? props.thumbnail : mainFirst});
  background-size: cover;
`;
const StackStyled = styled.div`
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .ContentTitle {
    padding-top: 5px;
    font-size: 1.3rem;
    filter: drop-shadow(-2px 0 0 black) drop-shadow(2px 0 0 black)
      drop-shadow(0 -2px 0 black) drop-shadow(0 2px 0 black);
  }
  .ContentDesc {
    font-size: 1rem;
    word-break: normal;
  }
`;
