import React from "react";
import styled from "styled-components";
import { ProductModel } from "../models/Product";
import { formatCurrency } from "../utilities/formatCurrency";
import ShoppingCartItemActions from "./ShoppingCartItemActions";

const StyledShoppingCartItemValues = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const StyledShoppingCartItemPrice = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

const ShoppingCartItemValues: React.FC<{ item: ProductModel }> = ({ item }) => {
  return (
    <StyledShoppingCartItemValues>
      <ShoppingCartItemActions item={item} />
      <StyledShoppingCartItemPrice>
        {formatCurrency(item.price * item.quantity)}
      </StyledShoppingCartItemPrice>
    </StyledShoppingCartItemValues>
  );
};

export default ShoppingCartItemValues;
