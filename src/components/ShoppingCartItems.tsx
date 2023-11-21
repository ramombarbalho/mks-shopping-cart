import React from "react";
import styled from "styled-components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import ShoppingCartItem from "./ShoppingCartItem";

const StyledShoppingCartItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  overflow: auto;
  padding: 10px 30px;
`;

const ShoppingCartItems: React.FC = () => {
  const { cartItems } = useShoppingCart();
  return (
    <StyledShoppingCartItems>
      {cartItems.map((item) => (
        <ShoppingCartItem key={item.id} item={item} />
      ))}
    </StyledShoppingCartItems>
  );
};

export default ShoppingCartItems;
