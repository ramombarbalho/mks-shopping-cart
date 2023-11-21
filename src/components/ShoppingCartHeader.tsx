import React from "react";
import styled from "styled-components";
import { useShoppingCart } from "../hooks/useShoppingCart";

const StyledShoppingCartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: white;
  width: 100%;
  font-size: 27px;
  font-weight: 700;
  line-height: 33px;
  padding: 30px 30px 10px 30px;
`;

const StyledCartTitle = styled.h2`
  font-size: 27px;
  font-weight: 700;
  line-height: 33px;
`;

const StyledCartCloseButton = styled.button`
  color: white;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
  font-size: 25px;
  font-weight: 400;
  line-height: 15px;
`;

const ShoppingCartHeader: React.FC = () => {
  const { closeCart } = useShoppingCart();
  return (
    <StyledShoppingCartHeader>
      <StyledCartTitle>Carrinho de compras</StyledCartTitle>
      <StyledCartCloseButton onClick={closeCart}>X</StyledCartCloseButton>
    </StyledShoppingCartHeader>
  );
};

export default ShoppingCartHeader;
