import React, { useState } from "react";

import { WriteShow, Write } from "../components";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CommunityContentAPI } from "../shared/api";
import { getAccessToken } from "../shared/storage";
import { GreateHall } from "../static/index";
const WritePage = () => {
  const navigate = useNavigate();
  const [markdown, setMarkdown] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const formData = new FormData();
  const onSubmitHandler = async e => {
    e.preventDefault();
    if (!title) {
      window.alert("제목을 적어주세요");
    } else {
    const data = {
      title: title,
      content: markdown,
    };
    const blob = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });
    formData.append("data", blob);
    if (image === null) {
      formData.delete("image");
    } else {
      formData.append("image", image);
    }
    const res = await CommunityContentAPI.postCommunityContent(formData);

    if (res.data.success) {
      navigate(`/community/${res.data.data.id}`);
    } else if (!res.data.success) {
      window.alert(
        "오류가 발생했습니다 일단 내용을 복사하고 새로고침해주세요!"
      );
    }
    }
  };
  const onClearPhot = () => {
    setAttachment(null);
    setImage(null);
  };
  useEffect(() => {
    if (!getAccessToken()) {
      navigate("/");
    }
  }, [getAccessToken()]);
  return (
    <Layout>
      <StyledDiv>
        <Write
          setMarkdown={setMarkdown}
          onSubmit={onSubmitHandler}
          setTitle={setTitle}
          setImage={setImage}
          setAttachment={setAttachment}
          // setTag={setTag}
          image={image}
        />
        <WriteShow
          attachment={attachment}
          onClearPhot={onClearPhot}
          markdown={markdown}
        />
      </StyledDiv>
    </Layout>
  );
};

export default WritePage;
const Layout = styled.div`
  background-image: url(${GreateHall});
  background-size: cover;
  width: 100%;

  min-height: 100%;
`;
const StyledDiv = styled.div`
  display: grid;
  background-color: black;
  grid-template-columns: 50% 50%;
  border: 12px solid black;
  padding-top: 5px;
  margin: auto;
  width: 90vw;
  min-height: 95vh;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
