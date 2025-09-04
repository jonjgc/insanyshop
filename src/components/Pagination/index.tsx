'use client'

import * as S from './styles';

export function Pagination() {
  return (
    <S.PaginationContainer>
      <S.PageButton>{"<"}</S.PageButton>
      <S.PageButton active>{1}</S.PageButton>
      <S.PageButton>{2}</S.PageButton>
      <S.PageButton>{3}</S.PageButton>
      <S.PageButton>{4}</S.PageButton>
      <S.PageButton>{5}</S.PageButton>
      <S.PageButton>{">"}</S.PageButton>
    </S.PaginationContainer>
  );
}