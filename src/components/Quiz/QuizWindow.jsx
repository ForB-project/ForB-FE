import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { __quizResult } from "../../redux/modules/QuizSlice";

const QuizWindow = () => {
  const [quizId, setQuizId] = useState(0);
  const [forbCount, setForbCount] = useState(0);
  const [result, setResult] = useState([]);
  const list = useSelector((state) => state.quiz.quiz);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const forFrontBack = (answer) => {
    setQuizId(quizId + 1);
    setForbCount(answer);
  };

  const moveResult = (answer) => {
    navigate("/result");
    setForbCount(answer);
  };

  const resultFrontBack = (answer) => {
    if (answer / 100 > answer % 100) {
      result.push("F");
      setForbCount(0);
    } else {
      result.push("B");
      setForbCount(0);
    }
    setQuizId(quizId + 1);
  };

  const resultTendency = (answer) => {
      result.push(answer);
      dispatch(__quizResult(result));
      navigate('/result');   
  };

  return (
    <QuizWindowLayout>
      <QuizContent>
        {result.find((result) => result === "B")
          ? list[quizId + 3].quizTitle
          : list[quizId].quizTitle}
      </QuizContent>
      <QuizSelect>
        <QuizButton
          onClick={() =>
            result.find((result) => result === "F") ||
            result.find((result) => result === "B")
              ? quizId === 7 || quizId === 10
                ? setTimeout(() => resultTendency(forbCount + 100), 2000)
                : setTimeout(() => forFrontBack(forbCount + 100), 2000)
              : quizId === 4
              ? setTimeout(() => resultFrontBack(forbCount + 100), 2000)
              : setTimeout(() => forFrontBack(forbCount + 100), 2000)
          }
        >
          {result.find((result) => result === "B")
            ? list[quizId + 3].answerFront
            : list[quizId].answerFront}
        </QuizButton>
        <QuizButton
          className="leftButton"
          onClick={() =>
            result.find((result) => result === "F") ||
            result.find((result) => result === "B")
              ? quizId === 7 || quizId === 10
                ? setTimeout(() => resultTendency(forbCount + 1), 2000)
                : setTimeout(() => forFrontBack(forbCount + 1), 2000)
              : quizId === 4
              ? setTimeout(() => resultFrontBack(forbCount + 1), 2000)
              : setTimeout(() => forFrontBack(forbCount + 1), 2000)
          }
        >
          {result.find((result) => result === "B")
            ? list[quizId + 3].answerBack
            : list[quizId].answerBack}
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

const disappear = keyframes`
0%{
  opacity: 1;
}

  100%{
    opacity: 0;
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
  padding: 0px 5px;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
  box-shadow: 1px 5px 5px 1px black;
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
  border: 8px dashed black;
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
  &:focus {
    animation: ${disappear} 2.1s;
  }
`;
