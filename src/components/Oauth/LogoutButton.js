import styled from "styled-components";
import {
  removeAccessToken,
  removeRefreshToken,
  removeUserName,
  removeResult
} from "../../shared/storage";
import { AccountAPI } from "../../shared/api";

const removeStorage = () => {
  removeAccessToken();
  removeRefreshToken();
  removeUserName();
  removeResult();
};

const LogoutButton = props => {
  const logout = async () => {
    await AccountAPI.logout().then(res => {
      console.log(res);
      removeStorage();
      window.location.reload();
    });
  };

  return (
    <LogoutButtonStlyed>
      <span
        onClick={() => {
          logout();
        }}
      >
        Logout
      </span>
    </LogoutButtonStlyed>
  );
};

export default LogoutButton;

const LogoutButtonStlyed = styled.button`
  font-family: "neodgm";
  font-size: 1.5rem;
  width: 20%;
  height: 10%;
  background-color: rgb(230, 230, 230);
  border: 5px solid black;
  border-radius: 20%/60%;
  margin: 10px auto;
  transition: 0.2s;
  &:hover {
    background-color: rgb(74, 159, 228);
  }
  span {
    display: block;
    z-index: 2;
    color: white;
    width: auto;
    height: 100%;

    filter: drop-shadow(-2px 0 0 black) drop-shadow(2px 0 0 black)
      drop-shadow(0 -2px 0 black) drop-shadow(0 2px 0 black);
  }
`;
