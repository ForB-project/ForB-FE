import React from "react";
import styled from "styled-components";
import { mainFirst } from "../../static";
const RoadmapContent = props => {
  return (
    <ContentStyled>
      <ContentImgStyled />

      <StackStyled>
        <span className="ContentTitle">{props.data.title}</span>
        <p className="ContentDesc">{props.data.desc}</p>
      </StackStyled>
    </ContentStyled>
  );
};

export default RoadmapContent;
const ContentStyled = styled.div`
  display: grid;
  width: 70%;
  height: 100px;
  grid-template-columns: 30% 70%;
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 10px;
  &:hover {
    border: none;
    background-color: black;
    cursor: pointer;
  }
`;
const ContentImgStyled = styled.div`
  grid-column-start: 1;
  border-radius: 10px;
  width: 95%;
  /* height: 100%; */
  background-image: url(${mainFirst});
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
  }
  .ContentDesc {
    font-size: 1rem;
    word-break: normal;
  }
`;
