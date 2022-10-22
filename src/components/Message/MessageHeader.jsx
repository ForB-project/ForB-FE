import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { api } from "../../shared/api";
import styled from "styled-components";
import { profile } from "../../static/index";
import { AiFillDelete } from "react-icons/ai";

import { MessageAPI } from "../../shared/api";

import { moveRoom } from "../../redux/modules/ChatSlice";

const MessageHeader = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [chat_list, setChatList] = useState([]);

  const reduxChatMessage = useSelector(state => state.chat.chatMessage);
  const roomNum = useSelector(state => state.chat.roomNum);

  const selectChat = chat_list.find(list => list.roomId === roomNum.room_Id);

  // (get메소드) 페이지 접속시 채팅 리스트 조회
  const queryGetApi = async () => {
    return await api.get(`/api/chat/Lists`);
  };

  const queryList = useQuery("chat_list", queryGetApi, {
    onSuccess: data => {
      setChatList(data.data.data);
    },
  });

  // (delete메소드) 채팅 삭제 기능
  const queryDeleteApi = async ListId => {
    return MessageAPI.deleteList(ListId);
  };

  const queryDeleteList = useMutation(queryDeleteApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("chat_list");
    },
  });

  // 채팅 삭제 함수
  const removeChat = roomNum => {
    if (window.confirm("채팅방을 나가시겠습니까?")) {
      queryDeleteList.mutate(roomNum);
      dispatch(moveRoom(0));
    }
  };

  // React-query로 상한 데이터 업데이트
  useEffect(() => {
    queryClient.invalidateQueries("chat_list");
  }, [chat_list]);

  if (queryList.isLoading) {
    return null;
  }

  return (
    <MessageHeaderLayout>
      <ProfileImageBox />
      <ProfileNameBox>
        {chat_list.length &&
        reduxChatMessage !== null &&
        selectChat
          ? selectChat.pubMember === localStorage.getItem("username")
            ? selectChat.subMember
            : selectChat.pubMember
          : null}
      </ProfileNameBox>
      <AiFillDelete
        onClick={() => removeChat(roomNum.room_Id)}
        className="deleteBox"
      />
    </MessageHeaderLayout>
  );
};

export default MessageHeader;

const MessageHeaderLayout = styled.div`
  min-height: 70px;
  margin: 1px auto 0px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 2px 3px black;
  .deleteBox {
    font-size: 30px;
    color: white;
    opacity: 0.8;
    display: flex;
    margin: auto 15px auto auto;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;

const ProfileImageBox = styled.div`
  width: 45px;
  height: 45px;
  border: 3px solid black;
  border-radius: 10px;
  background-color: white;
  background-image: url(${profile});
  background-size: cover;
  margin: 10px 5px;
`;

const ProfileNameBox = styled.p`
  margin: auto 2px;
  width: 200px;
  height: 40px;
  font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 15px;
  color: white;
`;
