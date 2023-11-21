import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw;
`;

const AppLayout: React.FC = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Main />
      <Footer />
    </StyledAppLayout>
  );
};

export default AppLayout;
