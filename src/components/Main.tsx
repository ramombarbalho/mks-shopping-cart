import React from "react";
import styled from "styled-components";
import Products from "./Products";

const StyledMain = styled.main`
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 5px;
`;

const Main: React.FC = () => {
  return (
    <StyledMain>
      <Products />
    </StyledMain>
  );
};

export default Main;
