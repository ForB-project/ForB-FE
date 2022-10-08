import React from "react";
import {useNavigate} from "react-router-dom"
import styled from "styled-components";
import { GreateHall } from "../../static/index";
import { hogwart_logo } from "../../static/index";

const MessageView = () => {
  const navigate =  useNavigate();
  return (
        <MessageViewLayout>

        </MessageViewLayout>
  );
};

export default MessageView;


const MessageViewLayout = styled.div`
width: 17vw;
  min-width:280px;
  height: 50vh;
  min-height: 440px;
margin: 5px auto 0px auto;
background-color: red;
`;