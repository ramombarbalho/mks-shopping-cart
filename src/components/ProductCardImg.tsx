import React from "react";
import styled from "styled-components";

const StyledProductCardImg = styled.img`
  justify-self: center;
`;

const ProductCardImg: React.FC<{
  photo: string;
  name: string;
  size: { w: number; h: number };
}> = ({ photo, name, size }) => {
  return (
    <StyledProductCardImg
      src={photo}
      alt={name}
      width={size.w}
      height={size.h}
    />
  );
};

export default ProductCardImg;
