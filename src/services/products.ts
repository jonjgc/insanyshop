import { Product } from "@/types";

const API_URL = 'https://api.insany.co/api/products';
const ITEMS_PER_PAGE = 6;

export async function fetchAllProducts(page: number = 1): Promise<{ products: Product[], totalPages: number }> {
  try {
    const response = await fetch(`${API_URL}?page=${page}&limit=${ITEMS_PER_PAGE}`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Falha ao buscar produtos da API.');
    }

    const data = await response.json();

    return {
      products: data.products || [],
      totalPages: data.pagination.totalPages || 0
    };

  } catch (error) {
    console.error(error);
    
    return { products: [], totalPages: 0 };
  }
}