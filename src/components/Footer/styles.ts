'use client'
import styled from "styled-components";
import { device } from '@/styles/breakpoints';

export const FooterContainer = styled.footer`
  padding: 4rem 5rem;
  background-color: #ffffff;
  margin-top: 4rem; 

   @media ${device.tablet} {
    padding: 2rem 2rem;
  }

  @media ${device.mobile} {
    padding: 1.5rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  @media ${device.mobile} {
    font-size: 1.2rem;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem; 

  @media ${device.tablet} {
    gap: 0.75rem;
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
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

  @media ${device.tablet} {
    padding: 1rem 1.5rem;
    strong {
      font-size: 1rem;
    }
  }

  @media ${device.mobile} {
    padding: 1rem;
    width: 80%; 
    strong {
      font-size: 0.9rem;
    }
  }
`;