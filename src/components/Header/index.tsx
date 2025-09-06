'use client'
import { useState, useEffect } from 'react'; 
import { useRouter, usePathname } from 'next/navigation';
import { FiShoppingBag } from 'react-icons/fi';
import { useCart } from '@/contexts/CartContext';
import * as S from './styles';

export function Header() {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const { cartItemsCount } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);


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

  const handleCartClick = (e: React.MouseEvent) => {
    if (pathname === '/carrinho') {
      return;
    }
    e.preventDefault();
    setIsLoading(true);
    router.push('/carrinho');
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

      <S.CartContainer href="/carrinho" onClick={handleCartClick}> 
        {isLoading ? <S.Spinner /> : <FiShoppingBag size={24} />}
        {cartItemsCount > 0 && <S.CartBadge>{cartItemsCount}</S.CartBadge>}
      </S.CartContainer>

    </S.HeaderContainer>
  )
}