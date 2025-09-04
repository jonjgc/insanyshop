import { ProductList } from "@/components/ProductList";
import { fetchAllProducts } from "@/services/products";
export const dynamic = 'force-dynamic';

export default async function HomePage({ 
  searchParams 
}: { 
  searchParams: { page?: string } 
}) {
  const pageParam = searchParams.page;
  const currentPage = Number(pageParam) || 1;
  const { products, totalPages } = await fetchAllProducts(currentPage);

  return (
    <ProductList 
      products={products}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
}