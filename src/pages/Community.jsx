import React from "react";
import styled from "styled-components";
import Header from "../components/Layout/Header";
import { PageTitle } from "../elem/index";
import { BodyCommunity, LowerCommunity } from "../components/Community/index";
import { GreateHall } from "../static/index";
import { greathall_pixel } from "../static/index";

//재사용 component 파일위치 정리필

const Community = () => {
  return (
    <>
      <Header />
      <AllWrapStyled>
        <WarperStyled>
          <PageTitle>게시판</PageTitle>
          <BodyCommunity />
          <LowerCommunity />
        </WarperStyled>
      </AllWrapStyled>
    </>
  );
};

export default Community;

const AllWrapStyled = styled.div`
  background-color: #10141b;
  display: flex;
`;

const WarperStyled = styled.div`
  /* border: 1px solid gray; */
  border: 20px solid black;
  border-radius: 30px;

  background-image: url(${GreateHall});
  background-size: cover;

  width: 100vw;
  height: 100vh;

  /* margin: 5vw; */

  padding: 1.5vh;

  color: #ffffff;
  font-family: "neodgm";
`;
