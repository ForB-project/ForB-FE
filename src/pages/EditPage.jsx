import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { CommunityContentAPI } from "../shared/api";
import { Edit, Write, WriteShow } from "../components";
import { getAccessToken } from "../shared/storage";

const EditPage = () => {
  const navigate = useNavigate();
  const param = useParams();
  const contentId = parseInt(param.id);
  const [detail, setDetail] = useState(null);
  const [attachment, setAttachment] = useState(null);
  const getCommunityContent = async id => {
    const res = await CommunityContentAPI.getCommunityContent(id);
    setDetail(res.data?.data);
  };
  const [markdown, setMarkdown] = useState("로딩중");
  const [image, setImage] = useState(null);
  const formData = new FormData();
  const preImg = detail?.postImage;
  const preContent = detail?.content;
  useEffect(() => {
    getCommunityContent(contentId);
  }, []);
  useEffect(() => {
    if (!getAccessToken()) {
      navigate("/");
    }
  }, [getAccessToken()]);
  useEffect(() => {
    if (preContent) {
      setMarkdown(preContent);
    }
  }, [preContent]);

  const onSubmitHandler = async () => {
    const data = {
      title: detail?.title,
      content: detail?.content,
    };
    const blobs = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });
    formData.append("data", blobs);
    if (image === null) {
      formData.delete("image");
      // // const noimg = { image: null };
      // const img = new Blob([JSON.stringify("")], {
      //   type: "application/json",
      // });
      // formData.append("image", img);
    } else {
      formData.append("image", image);
    }
    const res = await CommunityContentAPI.petchCommunityContent(
      contentId,
      formData
    );
    // for (let value of formData.values()) {
    //   console.log(value);
    // } //값 확인하기
    if (res.data.success) {
      navigate(`/community/${contentId}`);
    } else if (!res.data.success) {
      window.alert("오류가 생겨서 내용을 일단 복사해주세요!");
    }
  };

  const editTitle = title => {
    setDetail(prev => ({ ...prev, title }));
  };
  const editContent = content => {
    setDetail(prev => ({ ...prev, content }));
  };

  const onClearPhot = () => {
    setAttachment(null);
    setImage(null);
  };
  return (
    <StyledDiv>
      <Edit
        setMarkdown={setMarkdown}
        setContent={editContent}
        onSubmit={onSubmitHandler}
        setTitle={editTitle}
        setImage={setImage}
        image={image}
        setAttachment={setAttachment}
        {...detail}
      />
      <WriteShow
        attachment={attachment}
        onClearPhot={onClearPhot}
        markdown={markdown}
        preImg={preImg}
      />
    </StyledDiv>
  );
};

export default EditPage;

const StyledDiv = styled.div`
  display: grid;
  background-color: white;
  grid-template-columns: 50% 50%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
