'use client'
import { FiShoppingBag } from 'react-icons/fi'; // Importando o ícone
import * as S from './styles';

export function Header() {
  return (
    <S.HeaderContainer>
      <S.Logo>InsanyShop</S.Logo>

      <S.SearchInput type="text" placeholder="Procurando por algo específico?" />

      <S.CartContainer>
        <FiShoppingBag size={24} />
        <S.CartBadge>0</S.CartBadge>
      </S.CartContainer>
    </S.HeaderContainer>
  )
}