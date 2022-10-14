import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CommentAPI } from "../../shared/api";
import { setAccessToken } from "../../shared/storage";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useInput from "../../hooks/useInput";

const DetailHeader = props => {
  const navigate = useNavigate();
  return (
    <DetailHeaderStyled>
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <div className="backbutton"> 뒤로가기</div>
      </div>
      <div className="detailtitle">{props.CommunityQuery.data?.title}</div>
      <div>
        <div
          className="modifybutton"
          onClick={() => {
            navigate(`/edit/${props.contentId}`);
          }}
        >
          수정
        </div>
        {`  |  `}
        <div
          className="modifybutton"
          onClick={() => {
            if (window.confirm("삭제하시겠습니까?")) {
              props.DeleteCommunityContent(props.contentId);
              navigate("/community");
            }
          }}
        >
          삭제
        </div>
      </div>
    </DetailHeaderStyled>
  );
};

export default DetailHeader;
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
