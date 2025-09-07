import { formatPrice } from './formatPrice';

describe('formatPrice', () => {
  it('should format a number into BRL currency', () => {
    expect(formatPrice(100)).toBe('R$ 100,00');
  });

  it('should format a number with decimals', () => {
    expect(formatPrice(89.99)).toBe('R$ 89,99');
  });

  it('should format zero correctly', () => {
    expect(formatPrice(0)).toBe('R$ 0,00');
  });
});