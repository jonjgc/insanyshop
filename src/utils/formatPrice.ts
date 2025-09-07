export const formatPrice = (price: number = 0) => {
  const formatted = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatted.replace(/\s/g, ' ');
};