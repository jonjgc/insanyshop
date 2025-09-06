import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyles } from '@/styles/GlobalStyles' 
import { Header } from '@/components/Header' 
import { Footer } from '@/components/Footer' 
import { CartProvider } from '@/contexts/CartContext';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InsanyShop',
  description: 'Seu e-commerce de produtos incríveis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <CartProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </StyledComponentsRegistry>
        </CartProvider>
      </body>
    </html>
  )
}