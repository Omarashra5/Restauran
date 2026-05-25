import { ShoppingCart, MapPin, Search, Languages, Sun, Moon } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import { useLanguage } from '@/app/context/LanguageContext';
import { useTheme } from '@/app/context/ThemeContext';
import { Link } from 'react-router-dom';

export function Header() {
  const { getCartCount } = useCart();
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <span className="text-white text-xl">🚀</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {t('ديليفري', 'Delivery')}
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t('أسرع ديلفري في مصر ', 'Fastest delivery in Egypt')}</p>
            </div>
          </Link>

          {/* Location */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <MapPin className="size-5 text-orange-500" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t('التوصيل إلى', 'Deliver to')}</p>
              <p className="font-medium dark:text-white">{t('أسيوط , مدينة مبارك', 'Assiut, Mubarek City')}</p>
            </div>
          </div>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className={`absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 size-5 text-gray-400`} />
              <input
                type="text"
                placeholder={t('ابحث عن مطعم أو منتج...', 'Search for restaurant or product...')}
                className={`w-full ${language === 'ar' ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2 rounded-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title={t('English', 'عربي')}
            >
              <Languages className="size-6 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title={t('الوضع المظلم', 'Dark Mode')}
            >
              {theme === 'light' ? (
                <Moon className="size-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="size-6 text-gray-300" />
              )}
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <ShoppingCart className="size-6 text-gray-700 dark:text-gray-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden mt-3">
          <div className="relative w-full">
            <Search className={`absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 size-5 text-gray-400`} />
            <input
              type="text"
              placeholder={t('ابحث عن مطعم أو منتج...', 'Search for restaurant or product...')}
              className={`w-full ${language === 'ar' ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2 rounded-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
