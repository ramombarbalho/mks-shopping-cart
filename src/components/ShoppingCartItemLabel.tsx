import React from "react";
import styled from "styled-components";
import { ProductModel } from "../models/Product";
import ProductCardImg from "./ProductCardImg";

const StyledShoppingCartItemLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;

  @media (max-width: 450px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const StyledShoppingCartItemName = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
`;

const ShoppingCartItemLabel: React.FC<{ item: ProductModel }> = ({ item }) => {
  return (
    <StyledShoppingCartItemLabel>
      <ProductCardImg
        name={item.name}
        photo={item.photo}
        size={{ w: 70, h: 70 }}
      />
      <StyledShoppingCartItemName>{item.name}</StyledShoppingCartItemName>
    </StyledShoppingCartItemLabel>
  );
};

export default ShoppingCartItemLabel;
