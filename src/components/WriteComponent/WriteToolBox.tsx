import React, { useRef } from "react";
import styled from "styled-components";
import { TbH1, TbH2, TbH3, TbH4 } from "react-icons/tb";
import { BiBold, BiItalic } from "react-icons/bi";
import { MdFormatStrikethrough, MdCode } from "react-icons/md";
import { IoMdQuote, IoMdImage } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
interface Iprops {
  setImage: (x: File | null) => void;
  setHeader: (x: string) => void;
  setTextStyle: (x: string) => void;
  setAttachment: (x: string) => void;
}
const WriteToolBox = ({
  setImage,
  setHeader,
  setTextStyle,
  setAttachment,
}: Iprops) => {
  const [imageURL, setImageURL] = useState<File | null>(null);
  useEffect(() => {
    setImage(imageURL);
  }, [imageURL]);
  const upLoadImg = useRef<HTMLInputElement>(null);
  const openFile = () => {
    if (upLoadImg.current) {
      upLoadImg.current.click();
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const img = e.target.files[0];
      setImageURL(img);
      const reader = new FileReader();
      reader.onload = () => {
        setAttachment(reader.result as string); //https://youngble.tistory.com/73
      };
      reader.readAsDataURL(img);
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
          accept="image/jpg, image/png, image/jpeg, image/gif"
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

export default WriteToolBox;

const StyledDiv = styled.div`
  display: flex;
  div {
    display: flex;
    height: 5vh;
    width: 3.7vw;
    font-size: 28px;
    color: #d9e1e9;
    align-items: center;
    justify-content: center;
  }
  div:hover {
    background-color: #5f6366;
    border-radius: 30px;
    cursor: pointer;
  }
`;
const StyledDivision = styled.span`
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
