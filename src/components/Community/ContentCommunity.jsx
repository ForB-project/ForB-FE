import React from "react";
import * as S from "./styeld";

const ContentCommunity = ({ title, author, stack }) => {
  return (
    <S.Line>
      <S.Title>{title}</S.Title>
      <S.Author>{author}</S.Author>
      <S.Date>{stack}</S.Date>
    </S.Line>
  );
};

export default ContentCommunity;
