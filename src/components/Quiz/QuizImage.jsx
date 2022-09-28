/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const QuizImage = ({quizId}) => {
  const list = useSelector((state)=>state.quiz.quiz);
  return (
    <QuizImageLayout>
      <img className="centerImage" src={list[quizId].image}/>
    </QuizImageLayout>
  );
  
};

export default QuizImage;

const QuizImageLayout = styled.div`
  width: 23vw;
  height: 27vh;
  background-color: #10141b;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
.centerImage{
 width: 22.3vw;
 height: 26.5vh;
 border: 5px dashed black;
}
`;