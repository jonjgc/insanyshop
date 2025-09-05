'use client'
import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative; /
  width: 100%;
  height: 300px; 
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Category = styled.span`
  font-size: 0.75rem;
  color: #737380;
  text-transform: capitalize;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #41414D;
`;

export const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: #41414D;
  margin-bottom: 0.5rem;
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: #737380;
  line-height: 1.4;
  flex-grow: 1; 
  margin-bottom: 1rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #09090A;
`;

export const StockInfo = styled.span`
  font-size: 0.875rem;
  color: #737380;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #111;
  color: white;
  border: 2px solid transparent;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: white;
    color: #E74694;
    border-color: #E74694;
  }
`;