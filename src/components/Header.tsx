import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import CartButton from "./CartButton";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: blue;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo />
      <CartButton />
    </StyledHeader>
  );
};

export default Header;
