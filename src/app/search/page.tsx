import { ProductList } from "@/components/ProductList";
import { searchProducts } from "@/services/products";

export const dynamic = 'force-dynamic';

export default async function SearchPage({
  searchParams
}: {
  searchParams: { q?: string, page?: string }
}) {
  const query = searchParams.q || '';
  const currentPage = Number(searchParams.page) || 1;

  if (!query) {
    return <div>Digite um termo para buscar.</div>
  }

  const { products, totalPages } = await searchProducts(query, currentPage);
  const pageTitle = `Resultados para: "${query}"`;

  return (
    <ProductList
      products={products}
      totalPages={totalPages}
      currentPage={currentPage}
      title={pageTitle}
    />
  );
}