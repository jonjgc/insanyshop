'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '@/contexts/CartContext';
import * as S from './styles';

export function Header() {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const { cartItems } = useCart();

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!searchValue.trim()) return;
    router.push(`/search?q=${searchValue}`);
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);

    if (newValue === '') {
      router.push('/');
    }
  }

  return (
    <S.HeaderContainer>
      <S.Logo href="/">InsanyShop</S.Logo>

      <S.SearchForm onSubmit={handleSearchSubmit}>
        <S.SearchInput 
          type="text" 
          placeholder="Procurando por algo específico?"
          value={searchValue}
          onChange={handleSearchChange} 
        />
      </S.SearchForm>

      <S.CartContainer>
        <FiShoppingCart size={24} />
        {cartItems.length > 0 && <S.CartBadge>{cartItems.length}</S.CartBadge>}
      </S.CartContainer>
    </S.HeaderContainer>
  )
}