import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { hogwart_logo } from "../../static/index";

const TestCodeHeader = () => {
  const navigate = useNavigate();

  return (
    <CodeHeader>
      <img className="Logo" src={hogwart_logo} onClick={() => navigate("/")} />
      <CodeButtonLayout>
      </CodeButtonLayout>
    </CodeHeader>
  );
};
export default TestCodeHeader;

const CodeHeader = styled.div`
  width: 80vw;
  height: 11vh;
  margin-bottom: -0.8vh;
  display: flex;
  justify-content: center;
  .Logo {
    max-width: 10vh;
    max-height: 11vw;
    cursor: pointer;
  }
`;

const CodeButtonLayout = styled.div`
  width: 24vw;
  height: 8vh;
  margin: auto;
  margin-right: 9.5vw;
  display: flex;
  justify-content: end;
`;
