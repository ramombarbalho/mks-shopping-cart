import React from "react";
import styled from "styled-components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { ProductModel } from "../models/Product";
import ShoppingCartItemLabel from "./ShoppingCartItemLabel";
import ShoppingCartItemValues from "./ShoppingCartItemValues";

const StyledShoppingCartItem = styled.li`
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;
  padding: 5px 20px;
  position: relative;
  height: 95px;
  width: 100%;
  box-shadow: -2px 2px 10px 0px #0000000d;
  border-radius: 8px;

  @media (max-width: 450px) {
    width: 180px;
    height: 180px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: 10px 10px;
  }
`;

const StyledRemoveItemButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  color: white;
  background-color: black;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  transform: translate(35%, -35%);
  cursor: pointer;
`;

const ShoppingCartItem: React.FC<{ item: ProductModel }> = ({ item }) => {
  const { removeItem } = useShoppingCart();
  return (
    <StyledShoppingCartItem>
      <ShoppingCartItemLabel item={item} />
      <ShoppingCartItemValues item={item} />
      <StyledRemoveItemButton onClick={() => removeItem(item.id)}>
        X
      </StyledRemoveItemButton>
    </StyledShoppingCartItem>
  );
};

export default ShoppingCartItem;
