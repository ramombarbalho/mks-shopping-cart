import React from "react";
import styled from "styled-components";
import { ProductModel } from "../models/Product";
import { useShoppingCart } from "../context/CartProvider";
import { formatCurrency } from "../utilities/formatCurrency";

const StyledProductCard = styled.li`
  display: grid;
  grid-template-rows: auto 1fr auto;
  border: 1px solid black;
`;

const ProductCard: React.FC<{
  product: ProductModel;
}> = ({ product }) => {
  const { addItem, cartItems } = useShoppingCart();

  const { photo, id, name, price, description } = product;
  const inCart = cartItems.some((item) => item.id === id);

  function handleAddItem() {
    if (inCart) return;
    addItem(product);
  }

  return (
    <StyledProductCard>
      <img
        src={photo}
        alt={name}
        width="214"
        height="214"
        style={{ justifySelf: "center" }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p style={{ fontSize: "2rem" }}>{name}</p>
          <p style={{ backgroundColor: "#333", color: "white" }}>
            {formatCurrency(price)}
          </p>
        </div>
        <p style={{ color: "grey" }}>{description}</p>
      </div>
      <button
        style={{ width: "100%", color: "white", backgroundColor: "blue" }}
        onClick={handleAddItem}
      >
        icon {inCart ? "ITEM ADICIONADO" : "COMPRAR"}
      </button>
    </StyledProductCard>
  );
};

export default ProductCard;
