import React from "react";
import {useDispatch, useSelector} from "react-redux"
import styled, {css} from "styled-components";
import {profile} from "../../static/index";

import {moveRoom} from "../../redux/modules/ChatSlice";

const MessageList = () => {
  const dispatch = useDispatch();
  const chatList = useSelector((state)=>state.chat.chatList);
  const roomId = useSelector((state)=>state.chat.roomNum);
  
  const changeNum = (num)=>{
    dispatch(moveRoom(num));
  }

  return (
    <MessageListLayout>
      <MessageListHeader>{`${localStorage.getItem(
        "username"
      )}`}</MessageListHeader>
      {chatList.map((list) => (
        <ChatList key={list.roomId} onClick={() => changeNum(list.roomId)}>
          <ProfileImageBox />
          <ProfileNameBox>{list.userName}</ProfileNameBox>
        </ChatList>
      ))}
    </MessageListLayout>
  );
};

export default MessageList;

const MessageListLayout = styled.div`
  width: 20vw;
  min-width: 242px;
  height: 61.3vh;
  min-height: 550px;
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
&:hover{
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
margin:auto 2px;
height: 40px;
display: flex;
align-items: center;
font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 15px;
  color: white;
`;

