'use client'
import styled from "styled-components";

export const Container = styled.main`
  padding: 2rem 5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductDetails = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  min-height: 500px;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.span`
  font-size: 1rem;
  color: #737380;
  text-transform: capitalize;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #41414D;
  margin-top: 0.5rem;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #09090A;
  margin-top: 1.5rem;
`;

export const DescriptionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #737380;
  margin-top: 3rem;
`;

export const DescriptionText = styled.p`
  font-size: 0.875rem;
  color: #41414D;
  line-height: 1.5;
  margin-top: 0.5rem;
  flex-grow: 1;
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
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #333;
  }
`;