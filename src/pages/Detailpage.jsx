import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CommentAPI, CommunityContentAPI } from "../shared/api";
import {
  setAccessToken,
  setRefreshToken,
  setUserName,
} from "../shared/storage";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useInput from "../hooks/useInput";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { CommentListComponent } from "../components";
const Detailpage = () => {
  const navigate = useNavigate();
  const param = useParams();
  const contentId = parseInt(param.id);
  //본문 내용 가져오기
  const getCommunityContent = async id => {
    const res = await CommunityContentAPI.getCommunityContent(id);

    return res.data?.data;
  };

  const CommunityQuery = useQuery(["CommunityContent", contentId], () =>
    getCommunityContent(contentId)
  );
  // 본문 삭제
  const DeleteCommunityContent = async id => {
    return CommunityContentAPI.deleteCommunityContent(id);
  };
  // 댓글 작성
  const [inputs, onChange] = useInput(null);
  const newComment = async data => {
    const res = await CommentAPI.addcomment(data.contentId, {
      content: data.content,
    });

    return res;
  };
  const queryClient = useQueryClient();
  const AddComment = useMutation(newComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["CommunityContent", contentId]);
    },
  });
  //댓글 삭제
  const deleteComment = async commentId => {
    const res = await CommentAPI.deletecomment(commentId);

    return res;
  };
  const DeleteComment = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["CommunityContent", contentId]);
    },
  });
  return (
    <WrapStyled>
      <ContainerStyled>
        <DetailHeaderStyled>
          <div
            onClick={() => {
              navigate("/community");
            }}
          >
            <div className="backbutton"> 뒤로가기</div>
          </div>
          <div className="detailtitle">{CommunityQuery.data?.title}</div>
          <div>
            <div
              className="modifybutton"
              onClick={() => {
                navigate(`/edit/${contentId}`);
              }}
            >
              수정
            </div>
            {`  |  `}
            <div
              className="modifybutton"
              onClick={() => {
                if (window.confirm("삭제하시겠습니까?")) {
                  DeleteCommunityContent(contentId);
                  navigate("/community");
                }
              }}
            >
              삭제
            </div>
          </div>
        </DetailHeaderStyled>
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
              backgroundColor: "#fbfdfc",
              borderBlockStyle: "none",
            }}
            source={CommunityQuery.data?.content}
          />
        </DetailBodyStyled>
        <CommentListComponent contentId={contentId} />
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
  background-color: rgb(255, 255, 255, 1);
`;

const DetailHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  width: 80%;
  height: 10vh;
  border: 1px solid transparent;
  font-family: "neodgm";
  font-size: 1.3rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detailtitle {
    font-size: 2rem;
  }
  .backbutton {
    border: 1px solid black;
    width: 80%;
    height: 50%;
    border-radius: 20px;
    transition: 0.3s;
    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
  .modifybutton {
    border: 1px solid transparent;
    width: 50%;
    height: 60%;
    border-radius: 20px;
    transition: 0.3s;
    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
`;
const DetailBodyStyled = styled.div`
  width: 75%;
  height: 50%;
  border: 1px solid transparent;
`;
