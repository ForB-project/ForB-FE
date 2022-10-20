import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { CommentAPI, CommunityContentAPI } from "../../shared/api";

import { useMutation, useQuery, useQueryClient } from "react-query";
import { FaHeart, FaRegHeart, FaTrashAlt } from "react-icons/fa";
import useInput from "../../hooks/useInput";

const DetailSideHeader = props => {
  const param = useParams();
  const contentId = parseInt(param.id);
  const createdAt = props.createdAt;
  const togglelike = async postid => {
    const res = await CommunityContentAPI.likeCommunityContent(postid);

    return res;
  };
  const queryClient = useQueryClient();
  const likeQuery = useMutation(togglelike, {
    onSuccess: () => {
      queryClient.invalidateQueries(["CommunityContent", contentId]);
    },
  });
  return (
    <div className="sideTitle">
      <div>
        {createdAt &&
          ` 작성일자 : ${createdAt[0]}.${createdAt[1]}.${createdAt[2]}  ${createdAt[3]}:${createdAt[4]}`}
      </div>
      <div>
        <span
          onClick={() => {
            likeQuery.mutate(props.CommunityQuery.data.id);
          }}
        >
          {props.CommunityQuery.data?.checkLike ? (
            <div className="likebox">
              <FaHeart color="red" /> {props.CommunityQuery.data?.likes}
            </div>
          ) : (
            <div className="likebox">
              <FaHeart color="gray" /> {props.CommunityQuery.data?.likes}
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default DetailSideHeader;
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
