import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MessageInput = () => {
  const navigate = useNavigate();
  return (
    <MessageInputLayout>
      <MessageTextArea />
      <MessageButton />
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
  background-color: black;
  display: flex;
  flex-direction: row;
`;

const MessageTextArea = styled.textarea`
width: 1vw;
min-width: 200px;
`;

const MessageButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: blue;
`;
