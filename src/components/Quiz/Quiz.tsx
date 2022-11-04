import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GreateHall } from "../../static/index";
import QuizWindow from "./QuizWindow";
import { hogwart_logo } from "../../static/index";

const Quiz = () => {
  const navigate = useNavigate();
  return (
    <QuizBackLayout>
      <QuizWindowHeader>
        <img
          className="Logo"
          src={hogwart_logo}
          onClick={() => navigate("/")}
        />
      </QuizWindowHeader>
      <QuizWindow />
    </QuizBackLayout>
  );
};

export default Quiz;

const QuizBackLayout = styled.div`
  width: 100%;
  height: 94vh;
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

const QuizWindowHeader = styled.div`
  width: 75vw;
  height: 10%;
  margin: 2rem 0.5rem 3rem;
  .Logo {
    max-width: 13vmin;
    max-height: 13vmin;
    cursor: pointer;
  }
`;
