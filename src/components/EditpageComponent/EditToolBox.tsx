import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TbH1, TbH2, TbH3, TbH4 } from "react-icons/tb";
import { BiBold, BiItalic } from "react-icons/bi";
import { MdFormatStrikethrough, MdCode } from "react-icons/md";
import { IoMdQuote, IoMdImage } from "react-icons/io";
import { userApis } from "api/userApi";

const EditToolBox = ({ setImage, setHeader, setTextStyle }) => {
  const [imageURL, setImageURL] = useState([]);
  useEffect(() => {
    setImage([...imageURL, imageURL]);
  }, []);
  const upLoadImg = useRef();
  const openFile = () => {
    upLoadImg.current.click();
  };
  const onChange = e => {
    e.preventDefault();
    if (e.target.files) {
      const img = e.target.files[0];
      const formData = new FormData();
      formData.append("image", img);
      userApis
        .uploadImage(formData)
        .then(res => {
          const image = res.data.data;
          const pushImage = img => {
            setImageURL([...imageURL, img]);
          };
          pushImage(image);
        })
        .catch(err => {});
    }
  };

  return (
    <StyledDiv>
      <div
        onClick={() => {
          setHeader("# ");
        }}
      >
        <TbH1 />
      </div>
      <div>
        <TbH2
          onClick={() => {
            setHeader("## ");
          }}
        />
      </div>
      <div>
        <TbH3
          onClick={() => {
            setHeader("### ");
          }}
        />
      </div>
      <div>
        <TbH4
          onClick={() => {
            setHeader("#### ");
          }}
        />
      </div>
      <StyledDivision>|</StyledDivision>
      <div>
        <BiBold
          onClick={() => {
            setTextStyle("**");
          }}
        />
      </div>
      <div>
        <BiItalic
          onClick={() => {
            setTextStyle("_");
          }}
        />
      </div>
      <div>
        <MdFormatStrikethrough
          onClick={() => {
            setTextStyle("~~");
          }}
        />
      </div>
      <StyledDivision>|</StyledDivision>
      <div>
        <IoMdQuote
          onClick={() => {
            setHeader("> ");
          }}
        />
      </div>
      <div>
        <input
          type="file"
          accept="image/*"
          ref={upLoadImg}
          style={{ display: "none" }}
          onChange={onChange}
        />
        <IoMdImage onClick={openFile} />
      </div>
      <div>
        <MdCode
          onClick={() => {
            setTextStyle("```");
          }}
        />
      </div>
    </StyledDiv>
  );
};

export default EditToolBox;

const StyledDiv = styled.div`
  display: flex;
  div {
    display: flex;
    height: 5vh;
    width: 3.7vw;
    font-size: 28px;
    color: #868e96;
    align-items: center;
    justify-content: center;
  }
  div:hover {
    background-color: #f8f9fa;
  }
`;
const StyledDivision = styled.p`
  font-weight: 100;
  display: flex;
  height: 5vh;
  width: 1vw;
  font-size: 30px;
  color: #d3dbe3;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;
