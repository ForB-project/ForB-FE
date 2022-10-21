import styled from "styled-components";
import { useMutation, useQueryClient } from "react-query";
import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { Inputplaceholer } from "../../elem";
import { RoadmapAPI } from "../../shared/api";
import useInput from "../../hooks/useInput";
import { emailCheck } from "../../shared/regExp";

const AddContentModal = props => {
  const [attachment, setAttachment] = useState(null); //파일 미리보기
  const [fileZero, setFileZero] = useState(null); //files의 첫번째 파일보낼때씀
  const [inputs, onChange] = useInput(null);
  const [ButtonDisable, setButtonDisable] = useState(false);
  const choseCategory = props.choseCategory;

  const onFileChange = event => {
    const files = event.target.files;
    const theFile = files[0];

    setFileZero(theFile);
    const reader = new FileReader();
    reader.onloadend = finishedEvent => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  //업로드할 이미지 지우기
  const onClearPhot = e => {
    setAttachment(null);
    setFileZero(null);
  };
  //모달 닫기
  function closeModal() {
    props.closeModal();
  }
  const AddContent = async data => {
    const res = await RoadmapAPI.postContent(choseCategory, data);
    return res;
  };
  const queryClient = useQueryClient();
  const { mutate } = useMutation(AddContent, {
    onSuccess: res => {
      queryClient.invalidateQueries(["contentList", choseCategory]);
      closeModal();
    },
  });
  // value들 서버로 보내기

  const onSubmiHandle = () => {
    if (emailCheck(inputs?.link) === false) {
      window.alert(
        `주소가 올바른 형식이 아닙니다
        https://www.xxx.com/ 형식으로 적어주세요`
      );
      return;
    } else if (!inputs?.title) {
      window.alert("설명을 적어주세요");
      return;
    } else if (!inputs?.desc) {
      window.alert("설명을 적어주세요");
      return;
    }
    setButtonDisable(true);
    const formData = new FormData();
    if (!fileZero) {
      const noimg = new Blob([JSON.stringify(fileZero)], {
        type: "application/json",
      });
      formData.append("file", noimg);
    } else {
      formData.append("file", fileZero);
    }

    const value = {
      title: inputs?.title,
      desc: inputs?.desc,
      link: inputs?.link,
    };

    const blob = new Blob([JSON.stringify(value)], {
      type: "application/json",
    });
    formData.append("contentReqDto", blob);
    // for (let value of formData.values()) {
    //   console.log(value);
    // } //값 확인하기
    mutate(formData);
    setButtonDisable(false);
  };
  return (
    <>
      <>
        <Inputplaceholer
          text="URL을 입력해주세요"
          name="link"
          onChange={onChange}
        />
        <Inputplaceholer
          text="제목을 입력해주세요"
          name="title"
          onChange={onChange}
        />
        <Inputplaceholer
          text="게시물을 간단히 설명해주세요"
          name="desc"
          onChange={onChange}
        />
      </>
      <BoxStyled>
        {attachment ? (
          <div className="ImgBox">
            <ImageBoxStyled>
              <ContentImageStlyed src={attachment} />
              <ClearButtonStyled onClick={onClearPhot}>⨉</ClearButtonStyled>
            </ImageBoxStyled>
          </div>
        ) : (
          <>
            <LabelBoxStyled>
              <label htmlFor="file">
                <AiOutlinePicture size="6rem" color="rgb(051, 153, 255, 0.7)" />
              </label>
              <span>아이콘을 눌러 사진을 추가해보세요</span>
              <span>1MB이하의 사진으로 올려주세요</span>
            </LabelBoxStyled>
          </>
        )}
        <ButtonBoxStyled>
          <button
            className="PostContent"
            onClick={() => {
              onSubmiHandle();
            }}
            disabled={ButtonDisable}
          >
            저장하기
          </button>
          <button className="CloseButton" onClick={closeModal}>
            Close
          </button>
        </ButtonBoxStyled>
      </BoxStyled>

      <FileInputStyled id="file" type="file" onChange={onFileChange} />
    </>
  );
};

export default AddContentModal;

const BoxStyled = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 40%;
  .ImgBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ButtonBoxStyled = styled.div`
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 50%;
    height: 60px;
    border: 2px solid black;
    outline: none;
    border-radius: 20%/70%;
    font-size: 1.3rem;
    background-color: transparent;
    transition: 0.3s;
    font-family: "neodgm";
  }
  .PostContent {
    &:hover {
      background-color: black;
      color: white;
    }
  }
  .CloseButton {
    margin-top: 10px;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const LabelBoxStyled = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='29' ry='29' stroke='%2387C3F1FF' stroke-width='7' stroke-dasharray='15%2c15%2c15%2c15' stroke-dashoffset='54' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 29px;

  /* padding: -5px 0 0 -10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: -10px;
  left: -10px;
  align-items: center;
  &:hover {
    position: relative;
    top: -10px;
    left: -10px;
    background-color: rgb(051, 153, 255, 0.1);
  }
  label {
    &:hover {
      + div {
        background-color: rgb(031, 123, 215, 0.9);
      }
    }
  }
  span {
    font-size: 0.8rem;
  }
`;

const ImageBoxStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 1;
  width: 100%;
  height: 100%;
`;
const ContentImageStlyed = styled.img`
  width: 300px;
  height: 200px;
  border: none;
  border-radius: 20px;
`;
const ClearButtonStyled = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 9999px;
  color: white;
  font-size: 1rem;
  border: 1px solid white;
  background-color: rgb(30, 30, 30, 0.6);
  &:hover {
    background-color: rgb(50, 50, 50, 0.9);
  }
`;
const FileInputStyled = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;
