'use client'
import styled, { css } from 'styled-components';
import Link from 'next/link'; 
interface PageButtonProps {
  active?: boolean;
}
interface PageLinkProps {
  active?: boolean;
}

export const PaginationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
`;

export const PageButton = styled.button<PageButtonProps>`
  background-color: #e9e9f0;
  color: #737380;
  border: none;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #d1d1d6;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #ffffff;
      color: #f25d27;
      border: 2px solid #f25d27;
    `}
`;

export const PageLink = styled(Link)<PageLinkProps>`
  background-color: #e9e9f0;
  color: #737380;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none; // Remover sublinhado do link
  display: flex; // Para centralizar o número
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #d1d1d6;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #ffffff;
      color: #f25d27;
      border: 2px solid #f25d27;
    `}
`;