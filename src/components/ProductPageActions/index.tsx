'use client'
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types";
import { FiShoppingBag } from "react-icons/fi";
import { AddToCartButton } from "@/app/produto/[id]/styles";

interface ProductPageActionsProps {
    product: Product;
}

export function ProductPageActions({ product }: ProductPageActionsProps) {
    const { addToCart } = useCart();

    return (
        <AddToCartButton onClick={() => addToCart(product)}>
            <FiShoppingBag size={18} />
            Adicionar
        </AddToCartButton>
    )
}