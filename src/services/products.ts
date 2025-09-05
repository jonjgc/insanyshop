import { Product } from "@/types";

const API_URL = 'https://api.insany.co/api/products';
const ITEMS_PER_PAGE = 6;

export async function fetchAllProducts(
  page: number = 1, 
  category?: string
): Promise<{ products: Product[], totalPages: number }> {
  try {
    const url = new URL(API_URL);
    url.searchParams.append('page', String(page));
    url.searchParams.append('limit', String(ITEMS_PER_PAGE));

    if (category) {
      url.searchParams.append('category', category);
    }

    const response = await fetch(url.toString(), {
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

export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Falha ao buscar o produto da API.');
    }

    const data = await response.json();

    return data.product || null;

  } catch (error) {
    console.error(error);
    return null;
  }
}