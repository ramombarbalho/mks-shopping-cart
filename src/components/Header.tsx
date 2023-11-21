import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import CartButton from "./CartButton";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  padding: 5px 50px;
  background-color: var(--color-blue);
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
