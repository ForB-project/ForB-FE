import React, { useState } from "react";

import { WriteShow, Write } from "../components";
import styled from "styled-components";
// import { userApis } from "api/userApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CommunityContentAPI } from "../shared/api";
import { getAccessToken } from "../shared/storage";

const WritePage = () => {
  const navigate = useNavigate();
  const [markdown, setMarkdown] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  // const [tag, setTag] = useState([]);
  const formData = new FormData();
  const onSubmitHandler = async e => {
    e.preventDefault();

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
    console.log(res);
    if (res.data.success) {
      navigate(`/community/${res.data.data.id}`);
    } else if (!res.data.success) {
      window.alert(
        "오류가 발생했습니다 일단 내용을 복사하고 새로고침해주세요!"
      );
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
  );
};

export default WritePage;

const StyledDiv = styled.div`
  display: grid;
  background-color: white;
  grid-template-columns: 50% 50%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
