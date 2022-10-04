import React from "react";
import styled from "styled-components";
const RoadmapContentHeader = props => {
  return (
    <ContentHeaderStyled>
      {props.contentHeader?.title} {">"} {props.contentHeader?.category}
      {" >"}
      <button onClick={() => props.setCloseModal(!props.closeModal)}>
        추가하기
      </button>
      {props.getSort === "heartCnt" ? (
        <button
          onClick={() => {
            props.setSort("id");
          }}
        >
          최신순 정렬하기
        </button>
      ) : (
        <button
          onClick={() => {
            props.setSort("heartCnt");
          }}
        >
          좋아요순 정렬하기
        </button>
      )}
    </ContentHeaderStyled>
  );
};

export default RoadmapContentHeader;

const ContentHeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  background-color: rgb(100, 100, 100, 0.9);
  button {
    margin-left: 30px;
    width: 200px;
    border: 3px solid white;
    border-radius: 10px;
    color: white;
    font-family: "neodgm";
    font-weight: 700;
    background-color: black;
    font-size: 1.2rem;
    &:hover {
      background-color: #424040;
      color: white;
      cursor: pointer;
    }
  }
`;
