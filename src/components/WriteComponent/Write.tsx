import React from "react";
import { useState } from "react";
import styled from "styled-components";
import WriteFooter from "./WriteFooter";
import WriteTextArea from "./WriteTextArea";
import WriteTitle from "./WriteTitle";
interface Iprops {
  setMarkdown: (x: string) => void;
  onSubmit: () => void;
  setTitle: (x: string) => void;
  setImage: (x: File | null) => void;
  setAttachment: (result: string | null) => void;
  image: File | null;
  setContent?: (x: string) => void;
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const Write = (props: Iprops) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.setMarkdown(e.target.value);
  };
  const [header, setHeader] = useState<string | null>(null);
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
