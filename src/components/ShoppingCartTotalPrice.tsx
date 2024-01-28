import React from "react";
import styled from "styled-components";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../hooks/useShoppingCart";

const StyledShoppingCartTotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  padding: 20px 30px;
`;

const ShoppingCartTotalPrice: React.FC = () => {
  const { cartItems } = useShoppingCart();

  const total = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <StyledShoppingCartTotalPrice>
      <span>Total:</span>
      {formatCurrency(total)}
    </StyledShoppingCartTotalPrice>
  );
};

export default ShoppingCartTotalPrice;
