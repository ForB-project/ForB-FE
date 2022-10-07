import React, { useState } from "react";
import styled from "styled-components";
import { ContentCommunity } from "./index";
import ContentModal from "../Modal/ContentModal";

const BodyCommunity = ({ title, author, stack }) => {
  //게시글 > modal창
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <BodyStyled>
        <div onClick={showModal}>
          <ContentCommunity
            title={`이거모에여`}
            author={"코린이"}
            stack={"badge"}
          />
        </div>
        {modalOpen && <ContentModal setModalOpen={setModalOpen} />}
      </BodyStyled>
    </>
  );
};

export default BodyCommunity;

const BodyStyled = styled.div`
  /* border: 1px dashed black; */

  border-radius: 50px;
  background-color: black;
  opacity: 0.95;
  transition: 0.5s;

  color: white;
  font-size: 1.5rem;
  font-family: "neodgm";

  margin: auto;
  width: 70vw;
  height: 70vh;
  padding-top: 1vh;

  text-align: center;
`;
