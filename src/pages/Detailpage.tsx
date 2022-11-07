import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CommunityContentAPI } from "../shared/api";
import { useQuery } from "react-query";
import MarkdownPreview from "@uiw/react-markdown-preview";
import {
  CommentListComponent,
  DetailHeader,
  DetailSideHeader,
} from "../components";

const Detailpage = () => {
  const param = useParams();
  const contentId = parseInt(param?.id!);
  //본문 내용 가져오기
  const getCommunityContent = async (id: number) => {
    const res = await CommunityContentAPI.getCommunityContent(id);

    return res.data?.data;
  };

  const CommunityQuery = useQuery(
    ["CommunityContent", contentId],
    () => getCommunityContent(contentId),
    { refetchInterval: 1000 }
  );
  const createdAt = CommunityQuery?.data?.createdAt;
  // 본문 삭제
  const DeleteCommunityContent = async (id: number) => {
    return CommunityContentAPI.deleteCommunityContent(id);
  };
  //좋아요

  return (
    <WrapStyled>
      <ContainerStyled>
        <DetailHeader
          contentId={contentId}
          CommunityQuery={CommunityQuery}
          DeleteCommunityContent={DeleteCommunityContent}
        />
        <DetailSideHeader
          createdAt={createdAt}
          CommunityQuery={CommunityQuery}
        />

        <DetailBodyStyled>
          {CommunityQuery.data?.postImage ? (
            <div className="ImgBox">
              <ImageBoxStyled>
                <ContentImageStlyed src={CommunityQuery.data?.postImage} />
              </ImageBoxStyled>
            </div>
          ) : (
            ""
          )}
          <MarkdownPreview
            style={{
              fontSize: "1.3rem",
              color: "#999998",
              backgroundColor: "black",
              borderBlockStyle: "none",
            }}
            source={CommunityQuery.data?.content}
          />
        </DetailBodyStyled>
        <CommentListComponent
          contentId={contentId}
          CommentCount={CommunityQuery.data?.commentCount}
        />
      </ContainerStyled>
    </WrapStyled>
  );
};

export default Detailpage;

const ImageBoxStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
const ContentImageStlyed = styled.img`
  width: 100%;
  height: 70vh;
  border: none;
  /* border-radius: 20px; */
`;

const WrapStyled = styled.div`
  display: flex;
  background-color: black; // rgb(32, 8, 64, 1);
  width: 100%;
`;
const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  border: 20px solid black;
  flex-direction: column;
  width: 95%;

  margin: auto;
  border-radius: 60px;
  font-family: "neodgm", monospace;
  font-style: normal;
  background-color: black;
  .sideTitle {
    display: flex;
    height: 4vh;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 1vh;
    color: white;
    .likebox {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 3vh;
      width: 5vw;
      height: 4vh;
      color: black;
      border-radius: 10px;
      background-color: rgb(230, 230, 230, 0.9);
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const DetailBodyStyled = styled.div`
  width: 75%;
  height: 50%;
  border: 1px solid transparent;
`;
