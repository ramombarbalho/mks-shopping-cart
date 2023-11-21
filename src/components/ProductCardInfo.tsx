import React from "react";
import styled from "styled-components";
import ProductCardName from "./ProductCardName";
import ProductCardPrice from "./ProductCardPrice";
import ProductCardDescription from "./ProductCardDescription";

const StyledProductCardInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
`;

const StyledProductCardLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
`;

const ProductCardInfo: React.FC<{
  name: string;
  price: number;
  description: string;
}> = ({ name, price, description }) => {
  return (
    <StyledProductCardInfo>
      <StyledProductCardLabel>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>{price}</ProductCardPrice>
      </StyledProductCardLabel>
      <ProductCardDescription>{description}</ProductCardDescription>
    </StyledProductCardInfo>
  );
};

export default ProductCardInfo;
