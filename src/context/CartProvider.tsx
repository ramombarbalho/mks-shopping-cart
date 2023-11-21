import { createContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { ProductModel } from "../models/Product";

interface ShoppingCartModel {
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: ProductModel) => void;
  removeItem: (id: number) => void;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  clearCart: () => void;
  cartItems: ProductModel[];
}

const ShoppingCartContext = createContext({} as ShoppingCartModel);

const ShoppingCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<ProductModel[]>([]);

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  function addItem(item: ProductModel) {
    const inCart = cartItems.some((i) => i.id === item.id);
    if (inCart) return;
    setCartItems((cart) => [...cart, { ...item, quantity: 1 }]);
  }

  function removeItem(id: number) {
    setCartItems((cart) => cart.filter((item) => item.id !== id));
  }

  function increaseItemQuantity(id: number) {
    setCartItems((cart) => {
      const item = cart.find((i) => i.id === id);
      if (item) item.quantity++;
      return [...cart];
    });
  }

  function decreaseItemQuantity(id: number) {
    setCartItems((cart) => {
      const item = cart.find((i) => i.id === id);
      if (item) {
        item.quantity--;
        if (item.quantity <= 0) removeItem(id);
      }
      return [...cart];
    });
  }

  function clearCart() {
    setCartItems([]);
    closeCart();
  }

  const value: ShoppingCartModel = {
    openCart,
    closeCart,
    cartItems,
    addItem,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
