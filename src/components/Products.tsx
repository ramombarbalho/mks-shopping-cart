import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useProducts } from "./useProducts";

const StyledProducts = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  max-width: 1000px;
  border: 1px solid black;
`;

const Products: React.FC = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <StyledProducts>
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProducts>
  );
};

export default Products;
