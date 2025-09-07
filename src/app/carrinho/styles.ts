'use client'
import styled from 'styled-components';
import Link from "next/link";
import { device } from '@/styles/breakpoints';

export const Container = styled.main`
  padding: 2rem 10rem; 
  max-width: 1440px;
  margin: 0 auto;
  background-color: #f0f0f5;
  min-height: calc(100vh - 100px);

  @media ${device.tablet} {
    padding: 2rem 1rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  margin-top: 24px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const CartItemsList = styled.div`
  flex: 1;
  h2 { 
    font-size: 24px;
    font-weight: 500;
    color: #41414B;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  p { 
    font-size: 16px; 
    color: #41414B; 
    margin-bottom: 24px;
    strong {
        font-weight: 600;
    }
  }
`;

export const CartItem = styled.div`
  display: flex;
  gap: 20px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);

  @media ${device.mobile} {
    flex-direction: column;
    height: auto;
  }
`;

export const ItemImage = styled.div`
  position: relative;
  width: 250px;
  height: 200px;
  flex-shrink: 0;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const ItemDetails = styled.div`
  padding: 16px 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 { 
    font-size: 20px;
    font-weight: 300;
    color: #41414B;
  }
  p { 
    font-size: 12px;
    color: #41414B; 
    margin-top: 8px;
    line-height: 150%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;

  select { 
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #A8A8B3;
    background-color: #F3F5F6;
    font-size: 16px;
    color: #41414B;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2341414B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 12px;
  }
`;

export const ItemPriceAndActions = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between; 

  strong { 
    font-size: 16px;
    font-weight: 600;
    color: #09090A;
  }
  button { 
    background: transparent; 
    border: none; 
    color: #DE3838; 
    cursor: pointer;
    padding: 0;
    svg {
        font-size: 20px;
    }
  }
`;

export const OrderSummary = styled.aside`
  flex: 0 0 320px;
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  height: fit-content;
  display: flex;
  flex-direction: column;

  h3 { 
    font-size: 20px; 
    font-weight: 600; 
    color: #41414B; 
    text-transform: uppercase; 
    margin-bottom: 28px;
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 16px;
  color: #41414B;

  &:last-of-type {
    margin-bottom: 24px;
  }
`;

export const SummaryTotal = styled(SummaryRow)`
  font-weight: 600;
  border-top: 1px solid #DCE2E5;
  padding-top: 8px;
  margin-top: 8px;
  font-size: 24px;
  color: #09090A;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 12px 0;
  background-color: #51B853;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 40px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #459C47;
  }

   &:disabled {
    background-color: #E9E9F0; 
    cursor: not-allowed;
    &:hover {
      background-color: #E9E9F0; 
    }
  }
`;

export const EmptyCartMessage = styled.div`
  padding: 2rem;
  text-align: center;
  color: #737380;
  font-size: 1.2rem;
`;

export const HelpSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 24px;
    border-top: 1px solid #DCE2E5;
    padding-top: 224px;
`;

export const HelpTitle = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #5D5D6D;
    text-transform: uppercase;
    margin-bottom: 12px;
    text-decoration: underline;
`;

export const HelpLink = styled(Link)`
    font-size: 14px;
    color: #5D5D6D;
    text-decoration: none;
    margin-bottom: 4px;
    margin-top: 10px;
    text-decoration: underline;

    &:hover {
        text-decoration: underline;
    }
`;