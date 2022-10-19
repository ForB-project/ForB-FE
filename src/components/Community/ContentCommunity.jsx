import React from "react";
import { useNavigate } from "react-router-dom";
import { MessageAPI } from "../../shared/api";

import * as S from "./styeld";

const ContentCommunity = props => {
  const navigate = useNavigate();
  const joinroom = async memberId => {
    const res = await MessageAPI.joinroom(memberId);
    console.log(res);
  };

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
          joinroom(props.data.memberId);
          navigate(`/message`);
        }}
      >
        {props.data.nickname}
      </S.Author>
    </S.Line>
  );
};

export default ContentCommunity;
