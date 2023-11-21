import React from "react";
import styled from "styled-components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import CartIcon from "./CartIcon";

const StyledCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 90px;
  height: 45px;
  border-radius: 8px;
  cursor: pointer;

  & span {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  }
`;

const CartButton: React.FC = () => {
  const { openCart, cartItems } = useShoppingCart();
  return (
    <StyledCartButton
      style={{ backgroundColor: "white", color: "black" }}
      onClick={openCart}
    >
      <CartIcon />
      <span>{cartItems.length}</span>
    </StyledCartButton>
  );
};

export default CartButton;
