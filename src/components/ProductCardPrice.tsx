import React from "react";
import styled from "styled-components";
import { formatCurrency } from "../utilities/formatCurrency";

const StyledProductCardPrice = styled.span`
  background-color: #333;
  color: white;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  padding: 3px;
  border-radius: 5px;
`;

const ProductCardPrice: React.FC<{ children: number }> = ({ children }) => {
  return (
    <StyledProductCardPrice>{formatCurrency(children)}</StyledProductCardPrice>
  );
};

export default ProductCardPrice;
