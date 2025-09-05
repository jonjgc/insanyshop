'use client'
import * as S from './styles';
interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <S.PaginationContainer>
      {pages.map(page => (
        <S.PageLink 
          key={page} 
          href={`/?page=${page}`} 
          $active={currentPage === page}
        >
          {page}
        </S.PageLink>
      ))}

    </S.PaginationContainer>
  );
}