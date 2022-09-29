import React, { forwardRef } from "react";
import styled from "styled-components";
import { Logo, mainFirst } from "../../static";
import { LikeAPI } from "../../shared/api";
import { useMutation } from "react-query";
const RoadmapContent = forwardRef((props, ref) => {
  const thumbnail = props.data.thumbnail;
  function ContentHref() {
    window.open(props.data.link, "_blank");
  }

  const contentLike = async contentId => {
    const res = await LikeAPI.togglelike(contentId);
    console.log(res);
    return res;
  };
  const toggleLike = useMutation(contentLike);
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
          <p className="ContentDesc">{props.data.desc}</p>
        </StackStyled>
        <div
          className="LikeContent"
          onClick={() => {
            contentLike(props.data.id);
          }}
        >
          하트
        </div>
      </ContentStyled>
      <div ref={ref}></div>
    </>
  );
});

export default RoadmapContent;
const ContentStyled = styled.div`
  display: grid;
  width: 70%;
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
      background-color: #ffc;
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
