import React from "react";
import styled from "styled-components";
import {profile} from "../../static/index";
 
const MessageHeader = () => {
  
  return (
    <MessageHeaderLayout>
      <ProfileImageBox/>
      <ProfileNameBox>(이름)</ProfileNameBox>
    </MessageHeaderLayout>
  );
};

export default MessageHeader;


const MessageHeaderLayout = styled.div`
  width: 17.9vw;
  min-width: 298px;
  min-height: 70px;
  margin: 5px auto 0px auto;
  display: flex;
  flex-direction: row;
  box-shadow:0px 2px 3px black ;
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