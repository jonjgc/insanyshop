'use client'
import { Product } from "@/types";
import { createContext, useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';

interface CartItem extends Product {
  quantity: number;
}

interface ICartContext {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  cartTotal: number;
  cartItemsCount: number;
}

const CartContext = createContext<ICartContext>({} as ICartContext);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('insanyshop-cart');
    if (storedCart) setCartItems(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('insanyshop-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const productInCart = prevItems.find(item => item.id === product.id);
      if (productInCart) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
      toast.success('Produto adicionado ao carrinho!');
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleQuantityChange = (productId: string, amount: number) => {
    setCartItems(prevItems => {
        return prevItems.map(item => {
            if (item.id === productId) {
                const newQuantity = item.quantity + amount;
                
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
            }
            return item;
        }).filter((item): item is CartItem => item !== null);
    });
  };

  const increaseQuantity = (productId: string) => handleQuantityChange(productId, 1);
  const decreaseQuantity = (productId: string) => handleQuantityChange(productId, -1);

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartTotal, cartItemsCount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
}