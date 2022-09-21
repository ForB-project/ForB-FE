import React from "react";
import styled from "styled-components";
import { mainFirst } from "../../static";
const RoadmapContent = props => {
  return (
    <ContentStyled>
      <ContentImgStyled />
      <StackStyled>{props.data.content}</StackStyled>
    </ContentStyled>
  );
};

export default RoadmapContent;
const ContentStyled = styled.div`
  display: grid;
  width: 70%;
  height: 15%;
  grid-template-columns: 25% 75%;
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 10px;
`;
const ContentImgStyled = styled.div`
  grid-column-start: 1;
  width: 95%;
  height: 100%;
  background-image: url(${mainFirst});
  background-size: cover;
`;
const StackStyled = styled.div`
  grid-column-start: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
