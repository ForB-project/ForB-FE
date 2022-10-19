import React from "react";
import {useSelector,useDispatch} from "react-redux";
import styled from "styled-components";
import {profile} from "../../static/index";
import { AiFillDelete } from "react-icons/ai";

import {__chatListDelete,__chatList} from "../../redux/modules/ChatSlice";
 
const MessageHeader = () => {
  const dispatch = useDispatch();
  const chatList = useSelector((state) => state.chat.chatList);
  const roomNum = useSelector((state) => state.chat.roomNum);

  const removeChat = (roomNum) =>{
    if (window.confirm("채팅방을 나가시겠습니까?")) {
      dispatch(__chatListDelete(roomNum));
    }
    dispatch(__chatList());
  }
  console.log(roomNum);

  return (
    <MessageHeaderLayout>
      <ProfileImageBox />
      <ProfileNameBox>
        {roomNum.roomid===1? null :chatList.find((list) => list.roomId === roomNum).subMember}
      </ProfileNameBox>
      <AiFillDelete onClick={()=>removeChat(roomNum) } className="deleteBox"/>
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
  box-shadow:0px 2px 3px black;
  .deleteBox{
    font-size: 30px;
    color:white;
    opacity: 0.8;
    display: flex;
    margin: auto 15px auto auto;
    cursor: pointer;
    &:hover{
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
margin:auto 2px;
width:200px;
height: 40px;
font-family: "neodgm", monospace;
  font-style: normal;
  font-size: 15px;
  color: white;
`;