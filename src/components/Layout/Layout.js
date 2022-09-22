import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <LayOutStyled>{children}</LayOutStyled>;
};

export default Layout;

const LayOutStyled = styled.div`
  /* background-color: #9e6c31; */

  background-color: #10141b;
  position: relative;
  width: 100vw;
  height: 100vh;
`;
