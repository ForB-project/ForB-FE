import React from "react";
import { useState } from "react";
import styled from "styled-components";
import WriteFooter from "./WriteFooter";
import WriteTextArea from "./WriteTextArea";
import WriteTitle from "./WriteTitle";

const Write = props => {
  const handleChange = e => {
    props.setMarkdown(e.target.value);
  };
  const [header, setHeader] = useState("");
  const [textStyle, setTextStyle] = useState("");

  return (
    <StyledDiv>
      <StyledInnerDiv>
        <div>
          <WriteTitle
            setTitle={props.setTitle}
            setImage={props.setImage}
            setAttachment={props.setAttachment}
            setHeader={setHeader}
            setTextStyle={setTextStyle}
          />
        </div>
        <div>
          <WriteTextArea
            onChange={handleChange}
            setContent={props.setContent}
            setImage={props.setImage}
            image={props.image}
            header={header}
            setHeader={setHeader}
            setTextStyle={setTextStyle}
            textStyle={textStyle}
          />
        </div>
      </StyledInnerDiv>
      <div>
        <WriteFooter onSubmit={props.onSubmit} />
      </div>
    </StyledDiv>
  );
};

export default Write;

const StyledDiv = styled.div`
  height: 95%;
`;
const StyledInnerDiv = styled.div`
  margin: 3rem 2.5vw 0;
  overflow: hidden;
  height: 100%;
`;
