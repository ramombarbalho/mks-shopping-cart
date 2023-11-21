import React from "react";
import styled from "styled-components";
import { ProductModel } from "../models/Product";
import { useShoppingCart } from "../hooks/useShoppingCart";
import ProductCardImg from "./ProductCardImg";
import ProductCardInfo from "./ProductCardInfo";
import PurshcaseIcon from "./PurshcaseIcon";
import ProductCardButton from "./ProductCardButton";

const StyledProductCard = styled.li`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 217.56px;
  height: 285px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 2px 8px 0px #00000022;
  overflow: hidden;
`;

const ProductCard: React.FC<{
  product: ProductModel;
}> = ({ product }) => {
  const { cartItems } = useShoppingCart();

  const { photo, id, name, price, description } = product;
  const inCart = cartItems.some((item) => item.id === id);

  return (
    <StyledProductCard>
      <ProductCardImg photo={photo} name={name} size={{ w: 145, h: 145 }} />
      <ProductCardInfo name={name} price={price} description={description} />
      <ProductCardButton product={product} inCart={inCart}>
        <PurshcaseIcon />
        {inCart ? "ADICIONADO" : "COMPRAR"}
      </ProductCardButton>
    </StyledProductCard>
  );
};

export default ProductCard;
