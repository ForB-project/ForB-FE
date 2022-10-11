import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MessageInput = () => {
  const navigate = useNavigate();
  return (
    <MessageInputLayout>
      <MessageTextArea />
      <MessageButton>전송</MessageButton>
    </MessageInputLayout>
  );
};

export default MessageInput;

const MessageInputLayout = styled.div`
  width: 17vw;
  min-width: 280px;
  height: 2vh;
  min-height: 35px;
  margin: auto;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
`;

const MessageTextArea = styled.textarea`
width: 14.5vw;
min-width: 230px;
height: 24px;
margin: auto;
resize: none;
`;

const MessageButton = styled.button`
  width: 2.04vw;
  min-width: 41px;
  height: 30px;
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
