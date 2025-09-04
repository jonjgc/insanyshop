import { ProductList } from "@/components/ProductList";
import { fetchAllProducts } from "@/services/products";

export default async function HomePage() {
  const products = await fetchAllProducts();

  return (
    <ProductList products={products} />
  );
}