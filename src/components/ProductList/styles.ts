'use client'
import styled from "styled-components";

export const MainContainer = styled.main`
  padding: 2rem 5rem;
`;

export const PageTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const SortFilter = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  background-color: white;
  font-size: 1rem;
  cursor: pointer;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;