import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";
import ProductCardSkeleton from "./ProductCardSkeleton";

const StyledProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  max-width: 1000px;
  height: 601px;

  @media (max-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 730px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 486px) {
    grid-template-columns: 1fr;
  }
`;

const ProductList: React.FC = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading)
    return (
      <StyledProductList>
        {Array.from(Array(8), (_, x) => x).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </StyledProductList>
    );

  if (error) return <p>error</p>;

  return (
    <StyledProductList>
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
