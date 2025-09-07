import { render, screen } from '@testing-library/react';
import { BackButton } from './index';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    back: jest.fn(),
  }),
}));

describe('BackButton', () => {
  it('should render the back button correctly', () => {
    render(<BackButton />);

    // Procura por um botão que tenha o texto "Voltar"
    const buttonElement = screen.getByRole('button', { name: /voltar/i });

    // Verifica se o botão está na tela
    expect(buttonElement).toBeInTheDocument();
  });
});