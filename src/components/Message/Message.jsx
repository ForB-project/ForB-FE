import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { GreateHall,hogwart_logo } from "../../static/index";
import {MenuButton} from "../index";

import {MessageFunction,MessageHeader,MessageList} from "../index";

const Message = () => {
  const navigate =  useNavigate();
  const chatList = useSelector((state) => state.chat.chatList);
  const roomNum = useSelector((state) => state.chat.roomNum.room_Id);

  return (
    <MessageBackLayout>
      <MessageWindowLayout>
        <Header>
          <img
            className="Logo"
            src={hogwart_logo}
            onClick={() => navigate("/")}
          />
          <MenuButton className="menu" />
        </Header>
        <MessageInLayout>
          <MessageList />
          {chatList.length && roomNum!==1 ? (
            <MessageFunctionLayout>
              <MessageHeader />
              <MessageFunction />
            </MessageFunctionLayout>
          ) : (
            <MessageNoneLayout>{"!채팅방을 추가해주세요! \n \n채팅은 게시판에서 원하는 상대를 \n클릭해 시작 할 수 있습니다!"}</MessageNoneLayout>
          )}
        </MessageInLayout>
      </MessageWindowLayout>
    </MessageBackLayout>
  );
};

export default Message;

const MessageBackLayout = styled.div`
  width: 85vw;
  min-width: 950px;
  height: 90vh;
  min-height: 750px;
  border: 20px solid black;
  border-radius: 30px;
  background-image: url(${GreateHall});
  background-size: cover;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -0;
`;

const Header = styled.div`
  width: 59.95vw;
  min-width: 774px;
  height: 8vh;
  min-height: 70px;
  .Logo {
    width: 4vw;
    min-width: 65px;
    height: 6.5vh;
    min-height: 60px;
    margin: 5px;
    cursor: pointer;
  }
`;

const MessageWindowLayout = styled.div`
  width: 60vw;
  min-width:774px;
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
  height: 61.7vh;
  min-height: 554px;
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

