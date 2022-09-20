import React from "react";
import styled from "styled-components";
import { GreateHall } from "../../static";
import QuizWindow from "./QuizWindow";

import Logo from "../../image/ForB_pixel_noback.png"
const Quiz = () => {
  return (
    <QuizBackLayout>
      <QuizWindowHeader>
        <img className="Logo" src={Logo} />
      </QuizWindowHeader>
      <QuizWindow />
    </QuizBackLayout>
  );
};

export default Quiz;

const QuizBackLayout = styled.div`
  width: 85%;
  height: 800px;
  border: 20px solid black;
  border-radius: 30px;
  background-image: url(${GreateHall});
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -0;

  
`;

const QuizWindowHeader = styled.div`
width:100%;
height:100px;
margin:30px;
.Logo{
    width:100px;
    height:100px;
    margin-left:50px;
  }
`;
