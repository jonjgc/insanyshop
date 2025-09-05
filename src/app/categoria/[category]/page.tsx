import { ProductList } from "@/components/ProductList";
import { fetchAllProducts } from "@/services/products";
import { fetchAllCategories } from "@/services/categories";

export const dynamic = 'force-dynamic';

export default async function CategoryPage({ 
  params,
  searchParams 
}: { 
  params: { category: string },
  searchParams: { page?: string } 
}) {
  const currentPage = Number(searchParams.page) || 1;
  const { products, totalPages } = await fetchAllProducts(currentPage, params.category);
  const categories = await fetchAllCategories();
  const currentCategory = categories.find(cat => cat.id === params.category);
  const pageTitle = currentCategory ? currentCategory.name : "Produtos";

  return (
    <ProductList 
      products={products}
      totalPages={totalPages}
      currentPage={currentPage}
      activeCategory={params.category}
      categories={categories}
      title={pageTitle}
    />
  );
}