import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const QuizWindow = () => {
  const [quizId, setQuizId] = useState(0);
  const [forbCount, setForbCount] = useState(0);
  const list = useSelector((state) => state.quiz.quiz);
  const navigate = useNavigate();

  const forResult = (answer) => {
    setQuizId(quizId + 1);
    setForbCount(answer);
  };

  return (
    <QuizWindowLayout>
      <QuizContent>{list[quizId].quizTitle}</QuizContent>
      <QuizSelect>
        <QuizButton
          onClick={() =>
            quizId == 2
              ? setTimeout(() => navigate("/result"), 2000)
              : forResult(forbCount + 1)
          }
        >
          {list[quizId].answerFront}
        </QuizButton>
        <QuizButton className="leftButton"
          onClick={() =>
            quizId == 2
              ? setTimeout(() => navigate("/result"), 2000)
              : forResult(forbCount - 1)
          }
        >
          {list[quizId].answerBack}
        </QuizButton>
      </QuizSelect>
    </QuizWindowLayout>
  );
};

export default QuizWindow;

const moving = keyframes`
0%{
  margin-top: 0px;
}
  25%{
     margin-top: -3px;
  }
  50%{
   margin-top: 0px;
  }
  75%{
    margin-top: 3px;
  }
  100%{
    margin-top: 0px;
  }
`;

const QuizWindowLayout = styled.div`
  max-height: 500px;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: calc(0.45em + 1vw);
  color: white;
`;

const QuizContent = styled.div`
  max-width: 60vw;
  height: 10vh;
  background-color: #10141b;
  border-radius: 50px;
  margin: auto;
  display: flex;
  padding:0px 5px;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px #2c2c2c;
`;

const QuizSelect = styled.div`
  width: 50vw;
  height: 35vh;
  display: flex;
  margin: auto;
  margin-top: 2rem;
`;

const QuizButton = styled.button`
  width: 22vh;
  max-height: 34vh;
  height: calc(25em + 3vw);
  margin: auto;
  background-color: #10141b;
  border: 9px dashed black;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: calc(0.7em + 0.2vw);
  color: gray;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.1s;
  &:hover {
    opacity: 1;
    color: white;
    animation: ${moving} 2s linear infinite;
  }
`;
