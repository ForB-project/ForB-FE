import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {profile} from "../../static/index";
 
const MessageHeader = () => {
  const chatList = useSelector((state) => state.chat.chatList);
  const roomNum = useSelector((state) => state.chat.roomNum);

  return (
    <MessageHeaderLayout>
      <ProfileImageBox />
      <ProfileNameBox>
        {chatList.find((list) => list.roomId === roomNum.roomid).userName}
      </ProfileNameBox>
    </MessageHeaderLayout>
  );
};

export default MessageHeader;


const MessageHeaderLayout = styled.div`
  min-height: 70px;
  margin: 1px auto 0px auto;
  display: flex;
  flex-direction: row;
  box-shadow:0px 2px 3px black;
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