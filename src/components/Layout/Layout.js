import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <LayOutStyled>{children}</LayOutStyled>;
};

export default Layout;

const LayOutStyled = styled.div`
  background-color: black;
  position: relative;
  width: 100vw;
  height: 100vh;
`;
