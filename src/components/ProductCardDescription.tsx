import React from "react";
import styled from "styled-components";

const StyledProductCardDescription = styled.span`
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0px;
`;

const ProductCardDescription: React.FC<{ children: string }> = ({
  children,
}) => {
  return (
    <StyledProductCardDescription>{children}</StyledProductCardDescription>
  );
};

export default ProductCardDescription;
