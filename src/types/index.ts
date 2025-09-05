export interface Product {
  id: string;
  name: string;
  description: string;
  image: string; 
  category: string;
  price: number;
  rating: number; 
  stock: number;  
}

export interface Category {
  id: string;
  name: string;
}