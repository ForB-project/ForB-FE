import styled from "styled-components";
import {
  removeAccessToken,
  removeRefreshToken,
  removeUserName,
  removeQuizResult,
} from "../../shared/storage";
import { AccountAPI } from "../../shared/api";

const removeStorage = () => {
  removeAccessToken();
  removeRefreshToken();
  removeUserName();
  removeQuizResult();
};

const LogoutButton = props => {
  const logout = async () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      await AccountAPI.logout().then(res => {
        console.log(res);
        removeStorage();
        window.location.reload();
      });
    }
  };

  return (
    <LogoutButtonStlyed
      onClick={() => {
        logout();
      }}
    >
      <span>Logout</span>
    </LogoutButtonStlyed>
  );
};

export default LogoutButton;

const LogoutButtonStlyed = styled.div`
  font-family: "neodgm";
  font-size: 1.5rem;
  width: 20%;
  height: 9%;
  background-color: rgb(230, 230, 230);
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
