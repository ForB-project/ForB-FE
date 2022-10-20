import React from "react";
import styled from "styled-components";
import { goldBorder } from "../../static";
const MobileView = () => {
  return (
    <LayOutStyled>
      <img src={goldBorder}></img>
      <div className="back">
        <div>
          ForB는 웹에 <br />
          최적화되어있고
          <br />
          PC 또는 <br />
          테블릿에서만
          <br /> 이용이 가능합니다
          <br /> PC 경우 창의 크기를 키워주세요
        </div>
      </div>
    </LayOutStyled>
  );
};

export default MobileView;

const LayOutStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%;
  left: 20%;
  width: 80%;
  height: 40%;

  font-family: "neodgm";
  z-index: 10;
  color: white;
  img {
    position: absolute;
    top: -50%;
    left: 0%;
    width: 80%;
    height: 90vh;
  }
  .back {
    position: absolute;
    top: 30%;
    left: 10%;
    width: 60%;
    height: 40%;
    font-size: 3vmin;
    font-family: "neodgm";
    z-index: 13;
    line-height: 5vmin;
  }
`;
