import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { GreateHall } from "../../static/index";

import { MessageFunction, MessageHeader, MessageList } from "../index";
import { PageTitle } from "../../elem";

const Message = () => {
  const chatList = useSelector(state => state.chat.chatList);
  const roomNum = useSelector(state => state.chat.roomNum.room_Id);

  return (
    <MessageBackLayout>
      <PageTitle>메세지</PageTitle>
      <MessageWindowLayout>
        <MessageInLayout>
          <MessageList />
          {chatList.length && roomNum !== 0 ? (
            <MessageFunctionLayout>
              <MessageHeader />
              <MessageFunction />
            </MessageFunctionLayout>
          ) : (
            <MessageNoneLayout>
              {
                "!채팅방을 추가해주세요! \n \n채팅은 게시판에서 원하는 상대를 \n클릭해 시작 할 수 있습니다!"
              }
            </MessageNoneLayout>
          )}
        </MessageInLayout>
      </MessageWindowLayout>
    </MessageBackLayout>
  );
};

export default Message;

const MessageBackLayout = styled.div`
  width: 96vw;
  border: 20px solid black;
  border-radius: 30px;
  background-image: url(${GreateHall});
  background-size: cover;
  margin: 0px auto;
  padding: 1.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderLay = styled.div`
  width: 85vw;
  min-width: 774px;
  height: 10vh;
  min-height: 70px;
  margin: 0px 0px -40px 0px;
  .Logo {
    width: 6vw;
    min-width: 80px;
    height: 9.5vh;
    min-height: 80px;
    margin: 5px;
    position: fixed;
    z-index: 5;
    cursor: pointer;
  }
`;

const MessageWindowLayout = styled.div`
  width: 60vw;
  min-width: 774px;
  height: 70vh;
  min-height: 625px;
  margin: auto;
  background-color: #10141b;
  border: 10px dashed black;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 18px;
  color: black;
  display: flex;
  flex-direction: column;
  .Logo {
    max-width: 9vw;
    max-height: 11vh;
    cursor: pointer;
  }
`;

const MessageInLayout = styled.div`
  height: 70vh;
  min-height: 625px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const MessageFunctionLayout = styled.div`
  width: 65vw;
  border: 2px solid black;
`;

const MessageNoneLayout = styled.div`
  width: 65vw;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  white-space: pre-line;
`;
