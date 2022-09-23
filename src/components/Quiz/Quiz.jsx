import React from "react";
import styled from "styled-components";
import { GreateHall } from "../../static/index";
import QuizWindow from "./QuizWindow";
import { hogwart_logo } from "../../static/index";

const Quiz = () => {
  return (
    <QuizBackLayout>
      <QuizWindowHeader>
        <img className="Logo" src={hogwart_logo} />
      </QuizWindowHeader>
      <QuizWindow />
    </QuizBackLayout>
  );
};

export default Quiz;

const QuizBackLayout = styled.div`
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

const QuizWindowHeader = styled.div`
  width: 75vw;
  height: 10vh;
  margin: 2rem 0.5rem 3rem;
  .Logo {
    max-width: 9vw;
    max-height: 11vh;
  }
`;
