'use client'
import Image from 'next/image';
import { Product } from '@/types';
import * as S from './styles';

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number) => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <S.CardContainer>
      <Image
        src={product.image}
        alt={product.name}
        width={256}
        height={300}
        style={{ objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
      />
      <S.CardContent>
        <S.ProductName>{product.name}</S.ProductName>
        <S.Divider />
        <S.ProductPrice>{formatPrice(product.price)}</S.ProductPrice>
        <S.AddToCartButton>Adicionar</S.AddToCartButton>
      </S.CardContent>
    </S.CardContainer>
  );
}