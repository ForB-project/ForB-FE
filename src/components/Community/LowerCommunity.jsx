import React, { useState } from "react";
import styled from "styled-components";
import WriteModal from "../Modal/WriteModal";
import { useNavigate } from "react-router-dom";
import * as S from "./styeld";

const LowerCommunity = () => {
  const navigate = useNavigate();
  // 글쓰기 modal창
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <S.Lower>
        <S.Center>
          <S.WriteButton
            onClick={() => {
              navigate("/write");
            }}
          >
            글쓰기
          </S.WriteButton>
          {/* {modalOpen && <WriteModal setModalOpen={setModalOpen} />} */}
        </S.Center>
      </S.Lower>
    </>
  );
};

export default LowerCommunity;
