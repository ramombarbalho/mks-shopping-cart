import { useContext } from "react";
import { ShoppingCartContext } from "../context/CartProvider";

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (context === undefined)
    throw new Error(
      "ShoppingCartContext was used outside of ShoppingCartProvider"
    );
  return context;
};
