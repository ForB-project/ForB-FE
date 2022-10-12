import React, { useState,useEffect } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";

// const socket = io();

const MessageFunction = () => {
  

  const [chats , setChats] = useState([]);
  const [message, setMessage] = useState(null);

  const sendMessage = () => {
    if(!message){
      return;
    }
    // console.log(socket);
    setChats(chats.concat(`nickname:${message}`));
    // socket.emit('새로운 메세지입니다.',message);
    setMessage('');
  };

  useEffect(() => {
    // socket.on('receive message', payload => {
    //   console.log(payload);
    //   console.log("연결됨");
    // });
  }, []);

  console.log(message);
  console.log(chats);
  return (
    <MessageInnerLayout>
      <MessageViewLayout/>
      <MessageInputLayout>
        <MessageTextArea value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <MessageButton onClick={()=>sendMessage()}>전송</MessageButton>
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
  margin: 0px auto 5px auto;
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
