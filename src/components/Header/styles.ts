'use client'
import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

export const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  color: #121214;
  text-decoration: none;
`;

export const SearchInput = styled.input`
  width: 350px;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #e2e2e2;
  background-color: #f3f5f6;
  font-size: 1rem;
`;

export const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #de3838;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const SearchForm = styled.form`
  width: 350px;
`;