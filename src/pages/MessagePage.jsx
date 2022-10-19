import React from "react";
import styled from "styled-components";

import Message from "../components/Message/Message";

const MessagePage = () => {
  return (
    <MessageWrapStyled>
      <Message/>
    </MessageWrapStyled>
  );
};

export default MessagePage;

const MessageWrapStyled = styled.div`
  background-color: #10141b;
  width: 100%;
  height: 100%;
  min-height: 790px;
`;