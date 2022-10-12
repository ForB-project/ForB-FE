import React from "react";
import {useNavigate} from "react-router-dom"
import styled from "styled-components";
import { GreateHall } from "../../static/index";
import { hogwart_logo } from "../../static/index";

import {MessageView,MessageInput,MessageHeader} from "../index";

const Message = () => {
  const navigate =  useNavigate();
  return (
    <MessageBackLayout>
      <MessageWindowLayout>
        <MessageHeader/>
        <MessageView/>
        <MessageInput/>
      </MessageWindowLayout>
    </MessageBackLayout>
  );
};

export default Message;

const MessageBackLayout = styled.div`
  width: 85vw;
  height: 90vh;
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

const MessageWindowLayout = styled.div`
  width: 18vw;
  min-width:300px;
  height: 55vh;
  min-height: 480px;
  margin: auto;
  background-color: #10141b;
  border: 10px dashed black;
  .Logo {
    max-width: 9vw;
    max-height: 11vh;
    cursor: pointer;
  }
`;

