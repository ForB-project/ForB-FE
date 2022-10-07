import React from "react";
import styled from "styled-components";
import { DoteS, DoteR, DoteG, DoteH } from "../../static";
import { useQuery } from "react-query";
import { QuizResultAPI } from "../../shared/api";
import { getQuizResult } from "../../shared/storage";

const BodyResult = () => {
  const postResult = async (data) => {
    const res = await QuizResultAPI.postResult(data);
    console.log(res);
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
  return (
    <BodyStyled backImg={selectImg()}>
      <div className="BackImg"></div>
      <ContentsStyled>
        <Topstyled>{resultData?.title}</Topstyled>
        <Bodystyled>{resultData?.description1}</Bodystyled>
        <Footerstyled>{resultData?.description2}</Footerstyled>
      </ContentsStyled>
    </BodyStyled>
  );
};

export default BodyResult;

const BodyStyled = styled.div`
  /* border: 1px solid purple; */
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
    opacity: 0.15;
    background-image: url(${(props) => props.backImg});
    background-size: cover;
  }
`;

const ContentsStyled = styled.div`
  color: white;
  font-size: 1rem;
  font-family: "neodgm";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  filter: drop-shadow(-2px 0 0 black) drop-shadow(2px 0 0 black)
    drop-shadow(0 -2px 0 black) drop-shadow(0 2px 0 black);
`;
const Topstyled = styled.div`
  /* border: 1px dashed purple; */
  margin-top: 10%;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Bodystyled = styled.div`
  /* border: 1px dashed purple; */
  margin-top: 5%;
  width: 70%;
  word-break: keep-all;
  white-space: pre-line;
  text-align: left;
  font-size: 1rem;
  line-height: 2rem;
`;

const Footerstyled = styled.div`
  /* border: 1px dashed purple; */
  margin-top: 3%;
  width: 70%;
  word-break: keep-all;
  white-space: pre-line;
  text-align: left;
  font-size: 1rem;
  line-height: 2rem;
`;
