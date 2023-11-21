import React, { ReactNode } from "react";
import styled from "styled-components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { ProductModel } from "../models/Product";

const StyledProductCardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 218px;
  height: 31.91px;
  background-color: var(--color-blue);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
`;

const ProductCardButton: React.FC<{
  children: ReactNode;
  product: ProductModel;
  inCart: boolean;
}> = ({ children, product, inCart }) => {
  const { addItem } = useShoppingCart();

  function handleAddItem() {
    if (inCart) return;
    addItem(product);
  }

  return (
    <StyledProductCardButton onClick={handleAddItem}>
      {children}
    </StyledProductCardButton>
  );
};

export default ProductCardButton;
