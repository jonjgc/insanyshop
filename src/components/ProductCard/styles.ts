'use client'
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

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

export const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  color: #41414D;
  flex-grow: 1;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #DCE2E6;
  margin: 0.5rem 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: #09090A;
  margin-bottom: 1rem;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #111;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  transition: background-color 0.2s;

  &:hover {
    background-color: #555;
  }
`;