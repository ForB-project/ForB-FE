import React, { useState,useEffect,useRef  } from "react";
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import styled, {css} from "styled-components";

const ROOM_SEQ = 1;
const token = localStorage.getItem("access_token");

const MessageFunction = () => {
  const client = useRef({});
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: "ws://3.38.209.226/stomp", // 웹소켓 서버로 직접 접속
      connectHeaders: {
        Authorization: token.slice(7)
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 50000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
        console.log("됨");
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
    client.current.subscribe(`/sub/chat/room/1`, ({ body }) => {
      setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
      console.log(body,JSON.parse(body));
    },{
      Authorization: token.slice(7)
    });
    console.log('sub 됨');
  };

  const publish = (message) => {
    if (!client.current.connected) {
      return;
    }
    client.current.publish({
      destination: "/pub/chat/message",
      body: JSON.stringify({ roomId: ROOM_SEQ, message }),
      headers: {
        Authorization: token.slice(7),
      },
    });
    setMessage("");
    console.log(message);
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      publish(message); 
    }
  };
  console.log(message);
  return (
    <MessageInnerLayout>
      <MessageViewLayout>
        {chatMessages && chatMessages.length > 0 && (
          <p>
            {chatMessages.map((_chatMessage, index) => (
              <Message primary className="myMessage" key={index}>{_chatMessage.message}</Message>
            ))}
          </p>
        )}
      </MessageViewLayout>
      <MessageInputLayout>
        <MessageTextArea
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
  width: 17vw;
  min-width: 280px;
  height: 45vh;
  min-height: 370px;
  margin: 5px auto 0px auto;
`;

const MessageViewLayout = styled.div`
  width: 17vw;
  min-width: 280px;
  height: 41vh;
  min-height: 345px;
  margin: -10px auto 15px auto;
  display: flex;
  justify-content: end;
`;

const Message = styled.p`
max-width: 9vw;
margin: 0px;
padding: 1px 5px;
background-color: black;
`;

const MessageInputLayout = styled.div`
  width: 17vw;
  min-width: 280px;
  height: 2vh;
  min-height: 40px;
  margin: auto;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
`;

const MessageTextArea = styled.textarea`
width: 14.5vw;
min-width: 230px;
height: 30px;
margin: auto;
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
