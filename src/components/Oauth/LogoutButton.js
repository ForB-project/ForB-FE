import styled from "styled-components";
import {
  removeAccessToken,
  removeRefreshToken,
  removeUserName,
  removeQuizResult,
} from "../../shared/storage";
import { AccountAPI } from "../../shared/api";
import { useState } from "react";
import Modal from "../Modal/Modal";

const removeStorage = () => {
  removeAccessToken();
  removeRefreshToken();
  removeUserName();
  removeQuizResult();
};

const LogoutButton = props => {
  const logout = async () => {
    await AccountAPI.logout().then(res => {
      removeStorage();
      window.location.reload();
    });
  };
  const [closeModal, setCloseModal] = useState(false);
  return (
    <>
      <LogoutButtonStlyed
        onClick={() => {
          setCloseModal(!closeModal);
        }}
      >
        <span>Logout</span>
      </LogoutButtonStlyed>
      {closeModal && (
        <Modal closeModal={() => setCloseModal(!closeModal)}>
          <DeleteContentStyled> 로그아웃하기</DeleteContentStyled>
          <button
            id="deleteButton"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
          <button id="modalCloseBtn" onClick={() => setCloseModal(!closeModal)}>
            Cancel
          </button>
        </Modal>
      )}
    </>
  );
};

export default LogoutButton;
const DeleteContentStyled = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  font-family: "neodgm";
  padding-top: 40px;
  font-size: 4vmin;
  font-weight: 800;
`;
const LogoutButtonStlyed = styled.div`
  font-family: "neodgm";
  font-size: 4vmin;
  width: 20%;
  height: 9%;
  background-color: rgb(178, 183, 187);
  border: 5px solid black;
  border-radius: 20%/60%;
  margin: 10px auto;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(74, 159, 228);
  }
  span {
    color: white;
    filter: drop-shadow(-2px 0 0 black) drop-shadow(2px 0 0 black)
      drop-shadow(0 -2px 0 black) drop-shadow(0 2px 0 black);
  }
`;
