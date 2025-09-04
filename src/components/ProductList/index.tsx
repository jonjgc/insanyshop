'use client' 

import styled from "styled-components";
import { Product } from "@/types";
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
}

export function ProductList({ products }: ProductListProps) {
  return (
    <MainContainer>
      <PageTitle>Todos os produtos</PageTitle>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
      <Pagination />
    </MainContainer>
  );
}