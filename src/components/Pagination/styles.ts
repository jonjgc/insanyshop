'use client'

import styled, { css } from 'styled-components';

interface PageButtonProps {
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