import React from "react";
import styled from "styled-components";

const Line = ({ title, author, stack }) => {
  return (
    <LineStyled>
      <TitleStyled>{title}</TitleStyled>
      <AuthorStyled>{author}</AuthorStyled>
      <DateStyled>{stack}</DateStyled>
    </LineStyled>
  );
};

export default Line;

const LineStyled = styled.div`
  /* border: 1px dashed purple; */
  display: flex;

  margin-top: 1.5vh;
  margin-bottom: 1vh;
  padding-left: 2vw;
  padding-right: 2vw;

  line-height: 3vh;
`;
const TitleStyled = styled.div`
  /* border: 1px dashed yellow; */

  border-radius: 5px;
  background-color: #9e6c31;

  width: 45vw;
  height: 3vh;

  padding-left: 1vw;
  text-align: left;
`;
const AuthorStyled = styled.div`
  /* border: 1px dashed pink; */

  border-radius: 5px;
  background-color: #9e6c31;

  width: 15vw;
  margin-left: 1vw;
  height: 3vh;
`;
const DateStyled = styled.div`
  /* border: 1px dashed aqua; */

  border-radius: 5px;
  background-color: #9e6c31;

  width: 15vw;
  margin-left: 1vw;
  height: 3vh;
`;
