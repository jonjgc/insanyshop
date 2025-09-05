'use client' 

import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import * as S from './styles';

export function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  }

  return (
    <S.BackButton onClick={handleGoBack}>
       <IoArrowBack size={24} /> 
      Voltar
    </S.BackButton>
  )
}