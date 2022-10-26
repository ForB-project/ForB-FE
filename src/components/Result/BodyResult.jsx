import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { DoteS, DoteR, DoteG, DoteH,DoteRNone,DoteGNone, DoteHNone,DoteSNone } from "../../static";
import MarkdownPreview from "@uiw/react-markdown-preview";

import { useQuery,useQueryClient } from "react-query";
import { QuizResultAPI } from "../../shared/api";
import { getQuizResult } from "../../shared/storage";

const BodyResult = () => {
  const queryClient = useQueryClient();

  const postResult = async data => {
    const res = await QuizResultAPI.postResult(data);
    return res.data?.data[0];
  };

  const data = getQuizResult();
  const resultQuery = useQuery("QuizResult", () => postResult(data));
  const resultData = resultQuery?.data;
  console.log(resultData);

  useEffect(()=>{
    postResult(data);
    queryClient.prefetchQuery(["QuizResult"], () =>
    postResult(data)
      );
    console.log(resultData,'useEffect');
  },[])

  const selectImg = () => {
    let result = "";
    switch (resultData?.stackType) {
      case "S":
        result = {backImage:DoteS, badge:DoteSNone};
        break;
      case "R":
        result = {backImage:DoteR, badge:DoteRNone};
        break;
      case "G":
        result = {backImage:DoteG, badge:DoteGNone};
        break;
      case "H":
        result = {backImage:DoteH, badge:DoteHNone};
        break;
    }
    return result;
  };
  const title = resultData?.title;

  return (
    <BodyStyled backImg={selectImg().backImage}>
      <div className="BackImg"></div>
      <ContentsStyled>
        <TitleLayout>
          <Dormitory>{resultData?.title1}
          </Dormitory>
          <img src={selectImg().badge} />
        </TitleLayout>
        <Topstyled>
          <MarkdownPreview
            style={{
              fontSize: "3.5vmin",
              fontWeight: "900",
              lineHeight: "1.8rem",
              backgroundColor: "transparent",
              color: "white",
            }}
            source={resultData?.title2}
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

const TitleLayout = styled.div`
width: 50vw;
min-width:850px;
height: 100px;
display: flex;
align-items: center;
margin-top:70px;
img{
  width: 4.5vw;
}
`;

const Dormitory = styled.h1`
font-size: calc(2.0em + 2.5vmin);
line-height: "1.8rem",
`;

const BodyStyled = styled.div`
  position: relative;
  border-radius: 50px;
  background-color: black;
  opacity: 0.95;
  transition: 0.5s;
  margin-top: 6vh;
  margin-left: auto;
  margin-right: auto;
  width: 70vw;
  min-width: 1120px;
  height: 70vh;
  min-height: 600px;
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
  margin-top: 4%;
  word-break: keep-all;
  white-space: pre-wrap;
`;

const Bodystyled = styled.div`
  margin-top: 3%;
  width: 65%;
  word-break: keep-all;
  white-space: pre-line;
  text-align: left;
  font-size: 2.4vmin;
  line-height: 1.5rem;
`;

const Footerstyled = styled.div`
  margin-top: 4%;
  width: 75%;
  min-width:850px;
  word-break: keep-all;
  white-space: pre-line;
  text-align: center;
  font-size: 2.5vmin;
  line-height: 1.5rem;
  font-weight: 900;
`;
