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
        <QuizButton
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
     margin-top: -5px;
  }
  50%{
   margin-top: 0px;
  }
  75%{
    margin-top: 5px;
  }
  100%{
    margin-top: 0px;
  }
`;

const QuizWindowLayout = styled.div`
  height: 500px;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 25px;
  color: white;
`;

const QuizContent = styled.div`
  height: 100px;
  background-color: #10141b;
  border-radius: 50px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  box-shadow: 1px 1px 1px #2c2c2c;
`;

const QuizSelect = styled.div`
  width: 700px;
  height: 150px;
  display: flex;
  margin: auto;
  margin-top: 50px;
`;

const QuizButton = styled.button`
  width: 230px;
  height: 300px;
  margin: auto;
  background-color: #10141b;
  border: 8px dashed black;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 20px;
  color: gray;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.1s;
  &:hover {
    width: 235px;
    height: 310px;
    opacity: 1;
    color: white;
    animation: ${moving} 4s linear infinite;
  }
`;
