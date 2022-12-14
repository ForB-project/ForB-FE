import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuizResult } from "../../shared/storage";
import { __quizResult } from "../../redux/modules/QuizSlice";
import QuizImage from "./QuizImage";

const QuizWindow = () => {
  const [quizId, setQuizId] = useState(0);
  const [forbCount, setForbCount] = useState(0);
  const [result, setResult] = useState([]);
  const list = useSelector(state => state.quiz.quiz);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //답변 선택 함수
  const forFrontBack = answer => {
    setQuizId(quizId + 1);
    setForbCount(answer);
  };
  
  //프론트&백 결과 함수
  const resultFrontBack = answer => {
    if (answer / 100 > answer % 100) {
      result.push("F");
      setForbCount(0);
      setQuizId(quizId + 1);
    } else {
      result.push("B");
      setForbCount(0);
      setQuizId(quizId + 4);
    }
  };

  //성향(ex:슬리데린,레번클로) 결과 함수
  const resultTendency = answer => {
    result.push(answer);
    dispatch(__quizResult(result));
    setQuizResult(result);
    navigate("/result");
  };

  return (
    <QuizWindowLayout>
      <QuizContent>{list[quizId]?.quizTitle}</QuizContent>
      <QuizSelect>
        <QuizButton
        className="leftButton"
          onClick={() =>
            result.find((result) => result === "F") ||
            result.find((result) => result === "B")
              ? quizId === 7 || quizId === 10
                ? resultTendency(forbCount + 100)
                : forFrontBack(forbCount + 100)
              : quizId === 4
              ? resultFrontBack(forbCount + 100)
              : forFrontBack(forbCount + 100)
          }
        >
          {result.find((result) => result === "B")
            ? list[quizId].answerFront
            : list[quizId].answerFront}
        </QuizButton>
        <QuizImage quizId={quizId} />
        <QuizButton
          className="rightButton"
          onClick={() =>
            result.find((result) => result === "F" || result === "B")
              ? quizId === 7 || quizId === 10
                ? resultTendency(forbCount + 1)
                : forFrontBack(forbCount + 1)
              : quizId === 4
              ? resultFrontBack(forbCount + 1)
              : forFrontBack(forbCount + 1)
          }
        >
          {result.find((result) => result === "B")
            ? list[quizId].answerBack
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

const QuizWindowLayout = styled.div`
  width: 100%;
  height: 50vh;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 2.5vmin;
  color: white;
`;

const QuizContent = styled.div`
  width: 55vw;
  min-width:650px;
  height: 10vh;
  background-color: #10141b;
  border-radius: 50px;
  margin: auto;
  display: flex;
  padding: 0px 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-wrap;
  box-shadow: 1px 5px 5px 1px black;
`;

const QuizSelect = styled.div`
  width: 60vw;
  min-width: 650px;
  height: 35vh;
  display: flex;
  margin: auto;
  margin-top: 2rem;
`;

const QuizButton = styled.button`
  width: 22.2vh;
  max-height: 34vh;
  height: calc(25em + 3vmin);
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
  white-space: pre-line;
  &:hover {
    opacity: 1;
    color: white;
    animation: ${moving} 2s linear infinite;
  }
`;
