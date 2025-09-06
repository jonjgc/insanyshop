'use client'

import { Product } from "@/types";
import { createContext, useState, useContext, useEffect } from "react";

interface CartItem extends Product {
  quantity: number;
}

interface ICartContext {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
}

const CartContext = createContext<ICartContext>({} as ICartContext);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('insanyshop-cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length >= 0) {
        localStorage.setItem('insanyshop-cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const productAlreadyInCart = prevItems.find(item => item.id === product.id);

      if (productAlreadyInCart) {
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
}