import React from "react";
import styled from "styled-components";
import { useShoppingCart } from "../context/CartProvider";

const StyledCartButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const CartButton: React.FC = () => {
  const { openCart, cartItems } = useShoppingCart();
  return (
    <StyledCartButton>
      <button
        style={{ backgroundColor: "white", color: "black" }}
        onClick={openCart}
      >
        carrinho {cartItems.length}
      </button>
    </StyledCartButton>
  );
};

export default CartButton;
