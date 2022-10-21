import React from "react";
import styled from "styled-components";

import Header from "../components/Layout/Header";
import Message from "../components/Message/Message";

const MessagePage = () => {
  return (
    <MessageWrapStyled>
      <Header/>
      <Message/>
    </MessageWrapStyled>
  );
};

export default MessagePage;

const MessageWrapStyled = styled.div`
  background-color: #10141b;
  width: 100vw;
  height: 100vh;
  display: flex;
`;