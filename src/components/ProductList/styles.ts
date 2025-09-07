'use client'
import styled from "styled-components";
import { device } from '@/styles/breakpoints';

export const MainContainer = styled.main`
  padding: 2rem 5rem;

  @media ${device.tablet} {
    padding: 2rem 1rem;
  }
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

  @media ${device.tablet} 
    flex-direction: column;
    align-items: stretch; 
    gap: 1rem;
  }

  @media ${device.mobile} {
    flex-direction: column; 
    align-items: stretch; 
    gap: 1rem;
  }
`;

export const CategoryFilter = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid #dce2e5;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-size: 1rem;
  color: #41414b;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2341414B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 12px;

  @media ${device.mobile} {
    width: 100%; 
  }
`;

export const SortFilter = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  background-color: white;
  font-size: 1rem;
  cursor: pointer;

  @media ${device.mobile} {
    width: 100%; // 
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;


  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;