import React from "react";
import {useNavigate} from "react-router-dom"
import styled from "styled-components";
import { GreateHall,hogwart_logo } from "../../static/index";
import {MenuButton} from "../index";

import {MessageFunction,MessageHeader} from "../index";

const Message = () => {
  const navigate =  useNavigate();
  return (
    <MessageBackLayout>
      <Header>
        <img className="Logo" src={hogwart_logo} onClick={()=>navigate('/')} />
        <MenuButton className="menu"/>
      </Header>
      <MessageWindowLayout>
        <MessageHeader/>
        <MessageFunction/>
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

const Header = styled.div`
  width: 75vw;
  height: 10vh;
  margin: 2rem 0.5rem -3rem;
  .Logo {
    max-width: 9vw;
    max-height: 11vh;
    cursor: pointer;
  }
`;

const MessageWindowLayout = styled.div`
  width: 18vw;
  min-width:300px;
  height: 56vh;
  min-height: 480px;
  margin: auto;
  background-color: #10141b;
  border: 10px dashed black;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 18px;
  color: black;
  .Logo {
    max-width: 9vw;
    max-height: 11vh;
    cursor: pointer;
  }
`;

