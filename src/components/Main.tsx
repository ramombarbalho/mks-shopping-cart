import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";

const StyledMain = styled.main`
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 5px;
  overflow: auto;
  background-color: #fafafa;
`;

const Main: React.FC = () => {
  return (
    <StyledMain>
      <ProductList />
    </StyledMain>
  );
};

export default Main;
