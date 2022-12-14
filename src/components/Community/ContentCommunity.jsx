import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageAPI } from "../../shared/api";
import Modal from "../Modal/Modal";
import styled from "styled-components";
import * as S from "./styeld";
import { useDispatch } from "react-redux";
import { __chatList,moveRoom } from "../../redux/modules/ChatSlice";
import { getUserName } from "../../shared/storage";

const ContentCommunity = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [closeModal, setCloseModal] = useState(false);
  const joinroom = async memberId => {
    const res = await MessageAPI.joinroom(memberId);
  };

  return (
    <>
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
            setCloseModal(!closeModal);
          }}
        >
          {props.data.nickname}
        </S.Author>
      </S.Line>
      {closeModal && (
        <Modal closeModal={() => setCloseModal(!closeModal)}>
          <DeleteContentStyled>
            <div>{props.data.nickname}님에게</div>
            <div>메세지를 </div>
            <div>보내시겠습니까?</div>
          </DeleteContentStyled>
          <button
            id="deleteButton"
            onClick={() => {
              if (getUserName() === props.data.nickname) {
                window.alert("자기 자신에게는 메세지를 보낼 수 없습니다");
                setCloseModal(!closeModal);
              } else {
                joinroom(props.data.memberId);
                dispatch(__chatList());
                navigate(`/message`);
              }
            }}
          >
            Message
          </button>
          <button id="modalCloseBtn" onClick={() => setCloseModal(!closeModal)}>
            Cancel
          </button>
        </Modal>
      )}
    </>
  );
};

export default ContentCommunity;
const DeleteContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-top: 10px;
  font-size: 3vmin;
  color: black;
  div {
    margin-bottom: 15px;
  }
`;
