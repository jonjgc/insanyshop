import { fetchProductById } from "@/services/products";
import Image from "next/image";
import * as S from './styles';
import { BackButton } from "@/components/BackButton";
import { FiShoppingCart } from "react-icons/fi";

const formatPrice = (price: number) => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProductById(params.id);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <S.Container>
      <BackButton />
      <S.ProductDetails>
        <S.ImageWrapper>
          <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
        </S.ImageWrapper>
        <S.InfoWrapper>
          <S.Category>{product.category}</S.Category>
          <S.Title>{product.name}</S.Title>
          <S.Price>{formatPrice(product.price)}</S.Price>
          <S.DescriptionTitle>DESCRIÇÃO</S.DescriptionTitle>
          <S.DescriptionText>{product.description}</S.DescriptionText>
          <S.AddToCartButton>
            <FiShoppingCart size={18} />
            Adicionar
          </S.AddToCartButton>
        </S.InfoWrapper>
      </S.ProductDetails>
    </S.Container>
  );
}