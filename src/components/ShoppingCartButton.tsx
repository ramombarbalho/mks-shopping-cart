import React from "react";
import styled from "styled-components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import toast from "react-hot-toast";

const StyledShoppingCartButton = styled.button`
  color: white;
  background-color: black;
  height: 97px;
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  cursor: pointer;
`;

const ShoppingCartButton: React.FC = () => {
  const { cartItems, clearCart } = useShoppingCart();
  const emptyCart = !Boolean(cartItems.length);

  const finalizeOrder = () => {
    if (emptyCart) return;
    toast.success(
      `Compra realizada!\nCódigo de rastreamento (${Math.round(
        Math.random() * 10 ** 7
      )}) enviado para seu Email`
    );
    clearCart();
  };

  return (
    <StyledShoppingCartButton onClick={finalizeOrder}>
      {emptyCart ? "Adicione Item" : "Finalizar Compra"}
    </StyledShoppingCartButton>
  );
};

export default ShoppingCartButton;
