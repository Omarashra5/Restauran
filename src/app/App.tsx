import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/app/context/CartContext';
import { LanguageProvider } from '@/app/context/LanguageContext';
import { ThemeProvider } from '@/app/context/ThemeContext';
import { Header } from '@/app/components/Header';
import { HomePage } from '@/app/pages/HomePage';
import { StorePage } from '@/app/pages/StorePage';
import { CartPage } from '@/app/pages/CartPage';
import { CheckoutPage } from '@/app/pages/CheckoutPage';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <CartProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/store/:storeId" element={<StorePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </div>
          </CartProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}