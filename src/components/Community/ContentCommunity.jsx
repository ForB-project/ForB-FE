import React from "react";
import styled from "styled-components";

const ContentCommunity = ({ title, author, stack }) => {
  return (
    <LineStyled>
      <TitleStyled>{title}</TitleStyled>
      <AuthorStyled>{author}</AuthorStyled>
      <DateStyled>{stack}</DateStyled>
    </LineStyled>
  );
};

export default ContentCommunity;

const LineStyled = styled.div`
  /* border: 1px dashed purple; */
  display: flex;

  margin-top: 1.5vh;
  margin-bottom: 1.6vh;
  padding-left: 2vw;
  padding-right: 2vw;

  line-height: 3vh;

  opacity: 0.9;

  cursor: pointer;
  &:hover {
    font-size: 2.7rem;
    color: white;
    opacity: 1;
  }
`;
const TitleStyled = styled.div`
  /* border: 1px dashed yellow; */

  border-radius: 5px;
  background-color: #10141b;

  width: 45vw;
  height: 3vh;

  padding-left: 1vw;
  text-align: left;
`;
const AuthorStyled = styled.div`
  /* border: 1px dashed pink; */

  border-radius: 5px;
  background-color: #10141b;

  width: 15vw;
  margin-left: 1vw;
  height: 3vh;
`;
const DateStyled = styled.div`
  /* border: 1px dashed aqua; */

  border-radius: 5px;
  background-color: #10141b;

  width: 15vw;
  margin-left: 1vw;
  height: 3vh;
`;
