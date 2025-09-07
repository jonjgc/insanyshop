'use client'
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import * as S from './styles';
import { BackButton } from "@/components/BackButton";

const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export default function CartPage() {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, cartTotal } = useCart();
    const shippingCost = cartItems.length > 0 ? 40 : 0;
    const totalWithShipping = cartTotal + shippingCost;

    return (
        <S.Container>
            <BackButton />
            <S.ContentWrapper>
                <S.CartItemsList>
                    <h2>SEU CARRINHO</h2>
                    <p>Total ({cartItems.length} produtos) <strong>{formatPrice(cartTotal)}</strong></p>
                    {cartItems.length === 0 && (
                        <S.EmptyCartMessage>
                            Seu carrinho está vazio.
                        </S.EmptyCartMessage>
                    )}
                    {cartItems.map(item => (
                        <S.CartItem key={item.id}>
                            <S.ItemImage>
                                <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                            </S.ItemImage>
                            <S.ItemDetails>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <S.QuantityControl>
                                    <select
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const newQuantity = Number(e.target.value);
                                            if (newQuantity > item.quantity) {
                                                increaseQuantity(item.id);
                                            } else if (newQuantity < item.quantity) {
                                                decreaseQuantity(item.id);
                                            }
                                        }}
                                    >
                                        {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </S.QuantityControl>
                            </S.ItemDetails>
                            <S.ItemPriceAndActions>
                                <strong>{formatPrice(item.price * item.quantity)}</strong>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    aria-label={`Remover ${item.name} do carrinho`}
                                >
                                    <FiTrash2 />
                                </button>
                            </S.ItemPriceAndActions>
                        </S.CartItem>
                    ))}
                </S.CartItemsList>

                <S.OrderSummary>
                    <h3>RESUMO DO PEDIDO</h3>
                    <S.SummaryRow>
                        <span>Subtotal de produtos</span>
                        <span>{formatPrice(cartTotal)}</span>
                    </S.SummaryRow>
                    <S.SummaryRow>
                        <span>Entrega</span>
                        <span>{formatPrice(shippingCost)}</span>
                    </S.SummaryRow>
                    <S.SummaryTotal>
                        <span>Total</span>
                        <span>{formatPrice(totalWithShipping)}</span>
                    </S.SummaryTotal>
                    <S.CheckoutButton>FINALIZAR A COMPRA</S.CheckoutButton>

                    <S.HelpSection>
                        <S.HelpTitle>AJUDA</S.HelpTitle>
                        <S.HelpLink href="#">REEMBOLSOS</S.HelpLink>
                        <S.HelpLink href="#">ENTREGAS E FRETE</S.HelpLink>
                        <S.HelpLink href="#">TROCAS E DEVOLUÇÕES</S.HelpLink>
                    </S.HelpSection>
                </S.OrderSummary>
            </S.ContentWrapper>
        </S.Container>
    )
}