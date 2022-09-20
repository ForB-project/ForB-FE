import React from "react";
import styled from "styled-components";

import Quiz from "../components/Quiz/Quiz";

const QuizPage = () => {
  return (
    <QuizWrapStyled>
      <Quiz/>
    </QuizWrapStyled>
  );
};

export default QuizPage;

const QuizWrapStyled = styled.div`
  background-color: #10141b;
  width: 100%;
  height: 100%;
  display: flex;
  item-align: center;
`;