'use client'
import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 4rem 5rem;
  background-color: #ffffff;
  margin-top: 4rem; // Espaço para separar do conteúdo principal
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem; // Espaço entre os cards
`;

export const CategoryCard = styled.div`
  background-color: #f0f0f5;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  border: 1px solid #e2e2e2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  strong {
    font-size: 1.1rem;
  }

  span {
    color: #737380;
  }
`;