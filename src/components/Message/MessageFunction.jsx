import React, { useState,useEffect,useRef  } from "react";
import * as StompJs from "@stomp/stompjs";
import styled, {css} from "styled-components";
import { useSelector } from "react-redux";

// const ROOM_SEQ = 1;
const token = localStorage.getItem("access_token");

const MessageFunction = () => {
  const client = useRef({});
  const scrollRef = useRef(0);
  const inputFocus = useRef(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");
  const roomNum = useSelector((state)=>state.chat.roomNum.roomid);

  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: "ws://3.38.209.226/stomp", // 웹소켓 서버로 직접 접속
      connectHeaders: {
        Authorization: token.slice(7),
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 50000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });
    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    client.current.subscribe(
      `/sub/chat/room/${roomNum}`,
      ({ body }) => {
        setChatMessages((_chatMessages) => [
          ..._chatMessages,
          JSON.parse(body),
        ]);
      },
      {
        Authorization: token.slice(7),
      }
    );
  };

  const publish = (message) => {
    if (!client.current.connected || !message) {
      return;
    }
    client.current.publish({
      destination: "/pub/chat/message",
      body: JSON.stringify({ roomId: roomNum, message }),
      headers: {
        Authorization: token.slice(7),
      },
    });
    inputFocus.current.focus();
    setMessage("");
  };


 useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      publish(message);
    }
  };

  console.log(chatMessages);

  return (
    <MessageInnerLayout>
      <MessageViewLayout ref={scrollRef}>
        {chatMessages && chatMessages.length > 0 && (
          <div>
            {chatMessages.find((list) => list.roomId === roomNum)
              ? chatMessages.map((_chatMessage, index) => (
                  <Message key={index}>{_chatMessage.message}</Message>
                ))
              : null}
          </div>
        )}
      </MessageViewLayout>
      <MessageInputLayout>
        <MessageTextArea
          ref={inputFocus}
          type={"text"}
          placeholder={"message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleOnKeyPress}
        />
        <MessageButton onClick={() => publish(message)}>전송</MessageButton>
      </MessageInputLayout>
    </MessageInnerLayout>
  );
};

export default MessageFunction;


const MessageInnerLayout = styled.div`
  height: 53.4vh;
  min-height: 405px;
  margin: 5px auto 0px auto;
`;

const MessageViewLayout = styled.div`
  height: 45vh;
  min-height: 420px;
  margin: 0px auto 5px auto;
  display: flex;
  justify-content: end;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const Message = styled.p`
margin: 2px;
padding: 1px 5px;
background-color: white;
border: none;
border-radius: 5px;
`;

const MessageInputLayout = styled.div`
  width: 40vw;
  min-width: 450px;
  height: 2vh;
  min-height: 37px;
  margin: 0px auto 10px;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
`;

const MessageTextArea = styled.textarea`
width: 37vw;
min-width: 380px;
height: 30px;
resize: none;
font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 15px;
  color: black;
`;

const MessageButton = styled.button`
  width: 2.04vw;
  min-width: 41px;
  height: 35px;
  margin: auto;
  border: none;
  background-color: #10141b;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 12px;
  color: white;
  opacity: 0.8;
  
  &:hover{
    opacity: 1;
  }
`;
