import React from "react";
import styled from "styled-components";
import MarkdownPreview from "@uiw/react-markdown-preview";

const WriteShow = ({ markdown, attachment, onClearPhot }) => {
  document.documentElement.setAttribute("data-color-mode", "light");

  return (
    <StyledDiv>
      <StyledInnerDiv>
        {attachment ? (
          <div className="ImgBox">
            <ImageBoxStyled>
              <ContentImageStlyed src={attachment} />
              <ClearButtonStyled onClick={onClearPhot}>⨉</ClearButtonStyled>
            </ImageBoxStyled>
          </div>
        ) : (
          <ImageBoxStyled>
            <ContentImageStlyed src={preImg} />
          </ImageBoxStyled>
        )}
        <div className="markdownview">
          <MarkdownPreview
            style={{
              fontSize: "25px",
              color: "#999998",
              backgroundColor: "#000000",
              Height: "100%",
              overflow: "auto",
            }}
            source={markdown}
          />
        </div>
      </StyledInnerDiv>
    </StyledDiv>
  );
};
export default WriteShow;

const StyledDiv = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  top: 0px;
  height: 95%;
  background-color: black;
`;
const StyledInnerDiv = styled.div`
  margin: 80px 50px 50px;
  font-size: 18px;
  .markdownview {
    display: flex;
    width: 100%;
    height: 100vh;
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
  width: 100%;
  height: 100%;
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
