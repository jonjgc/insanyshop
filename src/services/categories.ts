import { Category } from "@/types";

const API_URL = 'https://api.insany.co/api/categories';

export async function fetchAllCategories(): Promise<Category[]> {
  try {
    const response = await fetch(API_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error('Falha ao buscar categorias.');
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}