import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ShoppingCartHeader from "./ShoppingCartHeader";
import ShoppingCartItems from "./ShoppingCartItems";
import ShoppingCartTotalPrice from "./ShoppingCartTotalPrice";
import ShoppingCartButton from "./ShoppingCartButton";

const cartWidth = "486px";

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
  justify-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: ${cartWidth};
  height: 100%;
  gap: 10px;
  background-color: var(--color-blue);
  box-shadow: -5px 0px 6px 0px #00000021;

  @media (max-width: 486px) {
    width: 100%;
  }
`;

interface ShoppingCartProps {
  isOpen: boolean;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen }) => {
  return (
    <StyledShoppingCart
      initial={isOpen ? "visible" : "hidden"}
      animate={isOpen ? "visible" : "hidden"}
      variants={variants}
    >
      <ShoppingCartHeader />
      <ShoppingCartItems />
      <ShoppingCartTotalPrice />
      <ShoppingCartButton />
    </StyledShoppingCart>
  );
};

export default ShoppingCart;
