import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { DoteS, DoteR, DoteG, DoteH } from "../../static";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { _getResult } from "../../redux/modules/ResultSlice";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { QuizResultAPI } from "../../shared/api";
import { getQuizResult } from "../../shared/storage";

const BodyResult = () => {
  // const param = useParams();
  const postResult = async data => {
    const res = await QuizResultAPI.postResult(data);

    return res.data?.data[0];
  };

  const data = getQuizResult();
  const resultQuery = useQuery("QuizResult", () => postResult(data));
  const resultData = resultQuery?.data;

  const selectImg = () => {
    let result = "";
    switch (resultData?.stackType) {
      case "S":
        result = DoteS;
        break;
      case "R":
        result = DoteR;
        break;
      case "G":
        result = DoteG;
        break;
      case "H":
        result = DoteH;
        break;
    }
    return result;
  };
  console.log(resultData?.title);
  const title = resultData?.title;

  return (
    <BodyStyled backImg={selectImg()}>
      <div className="BackImg"></div>
      <ContentsStyled>
        <Topstyled>
          <MarkdownPreview
            style={{
              fontSize: "3.5vmin",
              fontWeight: "900",
              lineHeight: "1.8rem",
              backgroundColor: "transparent",
              color: "white",
            }}
            source={title}
          />
        </Topstyled>
        <Bodystyled>
          <MarkdownPreview
            style={{
              fontSize: "2.4vmin",
              fontWeight: "900",
              lineHeight: "1.8rem",
              backgroundColor: "transparent",
              color: "white",
            }}
            source={resultData?.description1}
          />
        </Bodystyled>
        <Footerstyled>{resultData?.description2}</Footerstyled>
      </ContentsStyled>
    </BodyStyled>
  );
};

export default BodyResult;

const BodyStyled = styled.div`
  /* border: 1px solid black; */
  position: relative;
  border-radius: 50px;
  background-color: black;
  opacity: 0.95;
  transition: 0.5s;
  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
  width: 70vw;
  height: 70vh;
  text-align: center;
  .BackImg {
    position: absolute;
    top: 0;
    left: 25%;
    width: 50%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    background-image: url(${props => props.backImg});
    background-size: cover;
  }
`;

const ContentsStyled = styled.div`
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  filter: drop-shadow(-2px 0 0 black) drop-shadow(2px 0 0 black)
    drop-shadow(0 -2px 0 black) drop-shadow(0 2px 0 black);
`;
const Topstyled = styled.div`
  margin-top: 5%;
`;

const Bodystyled = styled.div`
  margin-top: 3%;
  width: 80%;
  word-break: keep-all;
  white-space: pre-line;
  text-align: left;
  font-size: 2.4vmin;
  line-height: 1.5rem;
`;

const Footerstyled = styled.div`
  margin-top: 4%;
  width: 80%;
  word-break: keep-all;
  white-space: pre-line;
  text-align: left;
  font-size: 2.5vmin;
  line-height: 1.5rem;
  font-weight: 900;
`;
