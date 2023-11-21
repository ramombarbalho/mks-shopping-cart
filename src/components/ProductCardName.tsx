import React from "react";
import styled from "styled-components";

const StyledProductCardName = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`;

const ProductCardName: React.FC<{ children: string }> = ({ children }) => {
  return <StyledProductCardName>{children}</StyledProductCardName>;
};

export default ProductCardName;
