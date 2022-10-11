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

  // 댓글 작성
  const [inputs, onChange] = useInput(null);
  const newComment = async data => {
    const res = await CommentAPI.addcomment(data.contentId, {
      content: data.content,
    });
    console.log(res);
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
    console.log(res);
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
              navigate(-1);
            }}
          >
            뒤로가기
          </div>
          <div>{CommunityQuery.data?.title}</div>
          <div
            onClick={() => {
              navigate(`/edit/${contentId}`);
            }}
          >
            수정하기 버튼?
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
            style={{ fontSize: "25px", backgroundColor: "#fbfdfc" }}
            source={CommunityQuery.data?.content}
          />
        </DetailBodyStyled>
        <DetailCommentStyled>
          <div className="CommentAddBox">
            <div>댓글작성</div>
            <input placeholder="댓글작성" onChange={onChange} name="content" />
            <div
              onClick={() => {
                AddComment.mutate({ contentId, content: inputs.content });
              }}
            >
              댓글달기
            </div>
          </div>
          <div className="CommentBody">
            {CommunityQuery.data?.commentList.map(x => (
              <div className="CommentBodyMain" key={x.id}>
                <div>{x.nickname}</div>
                <div>{x.content}</div>
                <div
                  onClick={() => {
                    if (window.confirm("삭제하시겠습니까?")) {
                      DeleteComment.mutate(x.id);
                    }
                  }}
                >
                  삭제
                </div>
              </div>
            ))}
          </div>
        </DetailCommentStyled>
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
  background-color: rgb(255, 255, 255, 0.7);
`;

const DetailHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  width: 80%;
  height: 10vh;
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
  grid-template-rows: 15% 85%;
  width: 75%;
  height: 50vh;
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
  .CommentBody {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .CommentBodyMain {
      display: grid;
      grid-template-columns: 15% 70% 15%;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
