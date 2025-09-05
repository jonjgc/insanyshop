'use client'

import { useRouter } from "next/navigation";
import { Category } from "@/types";
import * as S from './styles';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory?: string;
}

export function CategoryFilter({ categories, activeCategory }: CategoryFilterProps) {
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === 'all') {
      router.push('/');
    } else {
      router.push(`/categoria/${value}`);
    }
  };

  return (
    <S.FilterContainer>
      <S.FilterSelect value={activeCategory || 'all'} onChange={handleChange}>
        <option value="all">Todas as categorias</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </S.FilterSelect>
    </S.FilterContainer>
  );
}