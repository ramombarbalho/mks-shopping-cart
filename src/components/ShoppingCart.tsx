import React from "react";
import styled from "styled-components";
import { useShoppingCart } from "../context/CartProvider";
import { formatCurrency } from "../utilities/formatCurrency";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const cartWidth = "400px";

const variants = {
  visible: {
    opacity: 1,
    x: "0px",
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    x: cartWidth,
    transition: {
      duration: 0.3,
    },
  },
};

const StyledShoppingCart = styled(motion.section)`
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: absolute;
  top: 0;
  right: 0;
  width: ${cartWidth};
  height: 100%;
  gap: 10px;
  background-color: blue;
`;

interface ShoppingCartProps {
  isOpen: boolean;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen }) => {
  const {
    closeCart,
    cartItems,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
  } = useShoppingCart();

  const emptyCart = !Boolean(cartItems.length);

  const finalizeOrder = () => {
    if (emptyCart) return;
    toast.success(
      `Compra realizada!\nCódigo de rastreamento (${Math.round(
        Math.random() * 10 ** 7
      )}) enviado para seu Email`
    );
    clearCart();
  };

  return (
    <StyledShoppingCart
      initial={isOpen ? "visible" : "hidden"}
      animate={isOpen ? "visible" : "hidden"}
      variants={variants}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
          padding: "10px",
        }}
      >
        <h2>Carrinho de compras</h2>
        <button
          style={{
            color: "white",
            backgroundColor: "black",
          }}
          onClick={closeCart}
        >
          X
        </button>
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          overflow: "auto",
          padding: "10px",
        }}
      >
        {cartItems.map((item) => (
          <li
            key={item.id}
            style={{
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "5px",
              position: "relative",
            }}
          >
            <img src={item.photo} alt={item.name} width={100} />
            <p>{item.name}</p>
            <button onClick={() => decreaseItemQuantity(item.id)}>-</button>
            <p>{item.quantity}</p>
            <button onClick={() => increaseItemQuantity(item.id)}>+</button>
            <button
              style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                color: "white",
                backgroundColor: "black",
              }}
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
            <p>{formatCurrency(item.price * item.quantity)}</p>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
          padding: "10px",
        }}
      >
        <p>Total:</p>
        {formatCurrency(
          cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0)
        )}
      </div>
      <button
        onClick={finalizeOrder}
        style={{
          color: "white",
          backgroundColor: "black",
        }}
      >
        {emptyCart ? "Adicione Item" : "Finalizar Compra"}
      </button>
    </StyledShoppingCart>
  );
};

export default ShoppingCart;
