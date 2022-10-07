import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CommunityContentAPI } from "../shared/api";
import {
  setAccessToken,
  setRefreshToken,
  setUserName,
} from "../shared/storage";
import { useQuery } from "react-query";
const Detailpage = () => {
  const navigate = useNavigate();
  const param = useParams();
  const contentId = parseInt(param.id);

  const getCommunityContent = async id => {
    const res = await CommunityContentAPI.getCommunityContent(id);
    return res.data?.data;
  };

  const CommunityQuery = useQuery(["CommunityContent", contentId], () =>
    getCommunityContent(contentId)
  );
  console.log(CommunityQuery);
  return (
    <WrapStyled>
      <ContainerStyled>
        <DetailHeaderStyled>
          <div
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </div>
          <div>{CommunityQuery.data?.title}</div>
          <div>수정하기 버튼?</div>
        </DetailHeaderStyled>
        <DetailBodyStyled>{CommunityQuery.data?.content}</DetailBodyStyled>
        <DetailCommentStyled>
          <div className="CommentAddBox">
            <div>댓글작성</div>
            <div>댓글 내용</div>
            <div>댓글달기</div>
          </div>
          <div> 댓글 내용</div>
        </DetailCommentStyled>
      </ContainerStyled>
    </WrapStyled>
  );
};

export default Detailpage;

const WrapStyled = styled.div`
  display: flex;
  background-color: black; // rgb(32, 8, 64, 1);
  width: 100%;
  height: 100%;
`;
const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  border: 20px solid black;
  flex-direction: column;
  width: 95%;
  height: 95%;
  margin: auto;
  border-radius: 60px;
  font-family: "neodgm", monospace;
  font-style: normal;
  background-color: rgb(255, 255, 255, 0.7);
`;

const DetailHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  width: 80%;
  height: 8%;
  border: 1px solid black;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const DetailBodyStyled = styled.div`
  width: 75%;
  height: 50%;
  border: 1px solid black;
`;

const DetailCommentStyled = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;
  width: 75%;
  height: 37%;
  border: 1px solid black;
  .CommentAddBox {
    display: grid;
    grid-template-columns: 15% 70% 15%;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
