import React from "react";
import { useNavigate } from "react-router-dom";
import { MessageAPI } from "../../shared/api";

import * as S from "./styeld";
import { useDispatch } from "react-redux";
import {__chatList} from "../../redux/modules/ChatSlice";

const ContentCommunity = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          dispatch(__chatList());
          navigate(`/message`);
        }}
      >
        {props.data.nickname}
      </S.Author>
    </S.Line>
  );
};

export default ContentCommunity;
