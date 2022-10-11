import React, { useState } from "react";
import styled from "styled-components";
import EditFooter from "./EditFooter";
import EditTextArea from "./EditTextArea";
import EditTitle from "./EditTitle";

const Edit = props => {
  const handleChange = e => {
    props.setMarkdown(e.target.value);
    props.setContent(e.target.value);
  };
  const [header, setHeader] = useState("");
  const [textStyle, setTextStyle] = useState("");
  return (
    <StyledDiv>
      <StyledInnerDiv>
        <div>
          <EditTitle
            setTitle={props.setTitle}
            setImage={props.setImage}
            setTag={props.setTag}
            setHeader={setHeader}
            setTextStyle={setTextStyle}
            title={props.title}
            setAttachment={props.setAttachment}
          />
        </div>
        <div>
          <EditTextArea
            onChange={handleChange}
            setContent={props.setContent}
            setImage={props.setImage}
            image={props.image}
            header={header}
            setHeader={setHeader}
            setTextStyle={setTextStyle}
            textStyle={textStyle}
            content={props.content}
          />
        </div>
      </StyledInnerDiv>
      <div>
        <EditFooter onSubmit={props.onSubmit} />
      </div>
    </StyledDiv>
  );
};

export default Edit;
const StyledDiv = styled.div`
  height: 90%;
`;
const StyledInnerDiv = styled.div`
  margin: 3rem 2.5vw 0;
  overflow: hidden;
  height: 100%;
`;
