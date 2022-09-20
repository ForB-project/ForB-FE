import React from "react";
import styled from "styled-components";

import ProgressBar from "./ProgressBar";

const Quiz = () => {
  return (
    <QuizBackLayout>
      <QuizWindow>
        <QuizContent></QuizContent>
        <QuizSelect>
          <QuizButton></QuizButton>
          <QuizButton></QuizButton>
        </QuizSelect>
      </QuizWindow>
      <ProgressBar/>
    </QuizBackLayout>
  );
};

export default Quiz;

const QuizBackLayout = styled.div`
  width: 85%;
  height: 800px;
  border-radius:30px;
  background-color: white;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
`;

const QuizWindow = styled.div`
  width: 500px;
  height: 500px;
`;

const QuizContent = styled.div`
  width: 500px;
  height: 300px;
  background-color: #D7CBC1;
  margin: auto;
`;

const QuizSelect = styled.div`
  width: 500px;
  height: 150px;
  display:flex;
`;

const QuizButton = styled.button`
  width: 200px;
  height: 50px;
  margin:auto;
  background-color: #D7CBC1;
  border:none;
  border-radius:20px;
`;
