'use client'
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { CgSpinner } from 'react-icons/cg';
import { device } from '@/styles/breakpoints';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(CgSpinner)`
  animation: ${spin} 1s linear infinite;
  font-size: 24px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);

  @media ${device.tablet} {
    padding: 1rem 2rem;
  }

  @media ${device.mobile} {
    flex-wrap: wrap; 
    justify-content: center;
    padding: 1rem 1rem;
  }
`;

export const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  color: #121214;
  text-decoration: none;
  flex-shrink: 0;

  @media ${device.mobile} {
    font-size: 1.5rem; 
    margin-bottom: 0.5rem; 
    width: 100%; 
    text-align: center;
  }
`;

export const SearchInput = styled.input`
  width: 350px;
  margin: 0 2rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #e2e2e2;
  background-color: #f3f5f6;
  font-size: 1rem;

   @media ${device.tablet} {
   flex-grow: 1;
    width: 100%;
    margin: 0 1rem;
  }

   @media ${device.mobile} {
    order: 3; 
    width: 100%;
    margin: 0.5rem 0; 
  }
`;

export const CartContainer = styled(Link).attrs({ role: 'status' })`
  position: relative;
  cursor: pointer;
  color: inherit;
  flex-shrink: 0; 

  @media ${device.mobile} {
    margin-left: auto; 
    margin-bottom: 0.5rem;
  }
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