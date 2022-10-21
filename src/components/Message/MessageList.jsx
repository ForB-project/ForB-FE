import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { api } from "../../shared/api";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { profile } from "../../static/index";

import { moveRoom, addRoom, __chatList } from "../../redux/modules/ChatSlice";

const MessageList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [chat_list, setChatList] = useState([]);
  const chatList = useSelector(state => state.chat.chatList);
  const roomNum = useSelector(state => state.chat.roomNum);

  const queryClient = useQueryClient();
  const queryGetApi = () => {
    return api.get(`/api/chat/Lists`);
  };

  const queryList = useQuery("chat_list", queryGetApi, {
    onSuccess: data => {
      dispatch(addRoom(data.data.data));
    },
  });

  useEffect(() => {
    queryClient.invalidateQueries("chat_list");
    if (!localStorage.getItem("access_token")) {
      window.confirm("로그인이 필요합니다");
      navigate("/");
    }
  }, [chatList]);

  if (queryList.isLoading) {
    return null;
  }

  //redux로 관리 되는 roomid 변경
  const changeNum = num => {
    dispatch(moveRoom(num));
  };

  return (
    <MessageListLayout>
      <MessageListHeader>
        {localStorage.getItem("username") || null}
      </MessageListHeader>
      {chatList.map(list =>
        list.subMember !== list.pubMember ? (
          list.pubMember === localStorage.getItem("username") ? (
            <ChatList key={list.roomId} onClick={() => changeNum(list.roomId)}>
              <ProfileImageBox />
              <ProfileNameBox>{list.subMember}</ProfileNameBox>
            </ChatList>
          ) : (
            <ChatList key={list.roomId} onClick={() => changeNum(list.roomId)}>
              <ProfileImageBox />
              <ProfileNameBox>{list.pubMember}</ProfileNameBox>
            </ChatList>
          )
        ) : null
      )}
    </MessageListLayout>
  );
};

export default MessageList;

const MessageListLayout = styled.div`
  width: 20vw;
  min-width: 242px;
  height: 69.5vh;
  min-height: 621px;
  border: 2px solid black;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const MessageListHeader = styled.div`
  min-height: 70px;
  margin: 2px auto 0px auto;
  box-shadow: 0px 2px 3px black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ChatList = styled.div`
  min-height: 70px;
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;

const ProfileImageBox = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid black;
  border-radius: 50px;
  background-color: white;
  background-image: url(${profile});
  background-size: cover;
  margin: 10px 5px;
`;

const ProfileNameBox = styled.p`
  margin: auto 2px;
  height: 40px;
  display: flex;
  align-items: center;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 15px;
  color: white;
`;
