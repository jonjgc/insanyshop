'use client'
import * as S from './styles';

const categories = [
  { name: 'Eletrônicos', count: 4 },
  { name: 'Roupas e Calçados', count: 4 },
  { name: 'Casa e Decoração', count: 3 },
  { name: 'Livros', count: 3 },
  { name: 'Esporte e Lazer', count: 3 },
];

export function Footer() {
  return (
    <S.FooterContainer>
      <S.Title>Principais categorias</S.Title>
      <S.CategoryList>
        {categories.map(category => (
          <S.CategoryCard key={category.name}>
            <strong>{category.name}</strong>
            <span>{category.count} produtos</span>
          </S.CategoryCard>
        ))}
      </S.CategoryList>
    </S.FooterContainer>
  )
}