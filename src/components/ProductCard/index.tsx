'use client'
import Image from 'next/image';
import { Product } from '@/types';
import * as S from './styles';
import Link from 'next/link';
import { FiStar, FiShoppingCart } from 'react-icons/fi';

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
    <Link href={`/produto/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <S.CardContainer>
      <S.ImageContainer>
          <Image
            src={product.image}
            alt={product.name}
            fill 
            style={{ 
              objectFit: 'cover', 
              borderTopLeftRadius: '8px', 
              borderTopRightRadius: '8px' 
            }}
          />
        </S.ImageContainer>
        <S.CardContent>
          <S.InfoContainer>
            <S.Category>{product.category}</S.Category>
            <S.Rating>
              <FiStar size={16} color="#FFC107" />
              <span>{product.rating}</span>
            </S.Rating>
          </S.InfoContainer>

          <S.ProductName>{product.name}</S.ProductName>
          <S.ProductDescription>{product.description}</S.ProductDescription>

          <S.PriceContainer>
            <S.ProductPrice>{formatPrice(product.price)}</S.ProductPrice>
            <S.StockInfo>{product.stock} em estoque</S.StockInfo>
          </S.PriceContainer>

          <S.AddToCartButton>
            <FiShoppingCart size={18} />
            Adicionar
          </S.AddToCartButton>
        </S.CardContent>
      </S.CardContainer>
    </Link>
  );
}