import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <LayOutStyled>
      <Header />
      {children}
    </LayOutStyled>
  );
};

export default Layout;

const LayOutStyled = styled.div`
  /* background-color: #9e6c31; */

  background-color: #10141b;

  width: 100vw;
  height: 100vh;
`;
