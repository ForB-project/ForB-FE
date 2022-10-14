import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styeld";

const ContentCommunity = props => {
  const navigate = useNavigate();

  return (
    <S.Line>
      <S.Title
        onClick={() => {
          navigate(`/community/${props.data?.id}`);
        }}
      >
        {props.data.title}
      </S.Title>
      <S.Author
        onClick={() => {
          navigate(`/community/${props.data?.id}`);
        }}
      >
        {props.data.nickname}
      </S.Author>
    </S.Line>
  );
};

export default ContentCommunity;
