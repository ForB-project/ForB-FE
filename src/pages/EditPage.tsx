import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { CommunityContentAPI } from "../shared/api";
import { Edit, WriteShow } from "../components";
import { getAccessToken } from "../shared/storage";
import { GreateHall } from "../static/index";

interface Detail {
  postImage?: string;
  content?: string;
  title?: string;
}
const EditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const contentId = parseInt(id!);
  const [detail, setDetail] = useState<Detail>();
  const [attachment, setAttachment] = useState<string | null>(null);
  const getCommunityContent = async (ID: number) => {
    const res = await CommunityContentAPI.getCommunityContent(ID);

    setDetail(res.data?.data);
  };
  const [markdown, setMarkdown] = useState("로딩중");
  const [image, setImage] = useState<File | null>();
  const formData = new FormData();
  const preImg = detail?.postImage;
  const preContent = detail?.content;
  //게시글 데이터 가져오기
  useEffect(() => {
    if (typeof contentId === "number") {
      getCommunityContent(contentId);
    }
  }, []);
  // 토큰 없으면 홈으로
  useEffect(() => {
    if (!getAccessToken()) {
      navigate("/");
    }
  }, [getAccessToken()]);
  //가져온 데이터 뷰에 그리기
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
    } else {
      formData.append("image", image!);
    }
    const res = await CommunityContentAPI.petchCommunityContent(
      contentId,
      formData
    );

    if (res.data.success) {
      navigate(`/community/${contentId}`);
    } else if (!res.data.success) {
      window.alert("오류가 생겨서 내용을 일단 복사해주세요!");
    }
  };

  const editTitle = (title: string) => {
    setDetail(prev => ({ ...prev, title }));
  };
  const editContent = (content: string) => {
    setDetail(prev => ({ ...prev, content }));
  };

  const onClearPhot = () => {
    setAttachment(null);
    setImage(null);
  };
  return (
    <Layout>
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
    </Layout>
  );
};

export default EditPage;
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
