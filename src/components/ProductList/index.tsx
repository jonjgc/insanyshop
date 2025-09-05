'use client'
import { useState, useMemo } from 'react';
import { Category, Product } from "@/types";
import { CategoryFilter } from "../CategoryFilter";
import { ProductCard } from "../ProductCard";
import { Pagination } from "../Pagination";
import * as S from './styles';

interface ProductListProps {
  products: Product[];
  totalPages: number;
  currentPage: number;
  categories?: Category[];
  activeCategory?: string;
  title: string;
}

export function ProductList({ products, totalPages, currentPage, categories, activeCategory, title }: ProductListProps) {
  const [sortOrder, setSortOrder] = useState('news');

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortOrder) {
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      default:
        return sorted;
    }
  }, [products, sortOrder]);

  return (
    <S.MainContainer>
      <S.PageTitle>{title}</S.PageTitle>

      <S.FiltersContainer>
        {categories && <CategoryFilter categories={categories} activeCategory={activeCategory} />}
        <S.SortFilter value={sortOrder} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortOrder(e.target.value)}>
          <option value="news">Novidades</option>
          <option value="price-desc">Preço: Maior - menor</option>
          <option value="price-asc">Preço: Menor - maior</option>
        </S.SortFilter>
      </S.FiltersContainer>

      <S.ProductsGrid>
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductsGrid>

      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </S.MainContainer>
  );
}