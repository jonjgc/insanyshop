'use client' 
import styled from "styled-components";
import { Product, Category } from "@/types";
import { CategoryFilter } from "../CategoryFilter";
import { ProductCard } from "../ProductCard";
import { Pagination } from "../Pagination"; 

const MainContainer = styled.main`
  padding: 2rem 5rem;
`;

const PageTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

interface ProductListProps {
  products: Product[];
  totalPages: number;
  currentPage: number;
  categories?: Category[];
  activeCategory?: string; 
  title: string;
}

export function ProductList({ products, totalPages, currentPage, categories, activeCategory, title }: ProductListProps) {
 
  return (
    <MainContainer>
      <PageTitle>{title}</PageTitle>
      {categories && <CategoryFilter categories={categories} activeCategory={activeCategory} />}
      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </MainContainer>
  );
}