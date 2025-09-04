import { Product } from "@/types";

const API_URL = 'https://api.insany.co/api/products';

export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Falha ao buscar produtos da API.');
    }

    const data = await response.json();

    // console.log('ESTRUTURA DE UM PRODUTO DA API:', data.products[0]);
    return data.products || [];

  } catch (error) {
    console.error(error);
    return [];
  }
}