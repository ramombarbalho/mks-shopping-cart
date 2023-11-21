import React from "react";
import styled from "styled-components";
import { ProductModel } from "../models/Product";
import { useShoppingCart } from "../hooks/useShoppingCart";

const StyledShoppingCartItemActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #bfbfbf;
  height: 25px;
  border-radius: 5px;
  overflow: hidden;
  font-weight: 600;
`;

const StyledShoppingCartItemButton = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: #fff;
`;

const StyledShoppingCartItemQuantity = styled.span`
  color: black;
  text-align: center;
  width: 25px;
  border-left: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
`;

const ShoppingCartItemActions: React.FC<{ item: ProductModel }> = ({
  item,
}) => {
  const { decreaseItemQuantity, increaseItemQuantity } = useShoppingCart();
  return (
    <StyledShoppingCartItemActions>
      <StyledShoppingCartItemButton
        onClick={() => decreaseItemQuantity(item.id)}
      >
        -
      </StyledShoppingCartItemButton>
      <StyledShoppingCartItemQuantity>
        {item.quantity}
      </StyledShoppingCartItemQuantity>
      <StyledShoppingCartItemButton
        onClick={() => increaseItemQuantity(item.id)}
      >
        +
      </StyledShoppingCartItemButton>
    </StyledShoppingCartItemActions>
  );
};

export default ShoppingCartItemActions;
