import { useState } from 'react';
import { Link } from 'react-router-dom';
import { stores } from '@/app/data/stores';
import { Utensils, ShoppingBag, Store, Star, Clock, DollarSign, Tag, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useLanguage } from '@/app/context/LanguageContext';

type Category = 'all' | 'restaurant' | 'supermarket' | 'grocery';

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const { language, t } = useLanguage();

  const filteredStores = selectedCategory === 'all'
    ? stores
    : stores.filter(store => store.category === selectedCategory);

  const categories = [
    { id: 'all', name: t('الكل', 'All'), nameEn: 'All', nameAr: 'الكل', icon: Store },
    { id: 'restaurant', name: t('مطاعم', 'Restaurants'), nameEn: 'Restaurants', nameAr: 'مطاعم', icon: Utensils },
    { id: 'supermarket', name: t('سوبرماركت', 'Supermarket'), nameEn: 'Supermarket', nameAr: 'سوبرماركت', icon: ShoppingBag },
    { id: 'grocery', name: t('بقالة', 'Grocery'), nameEn: 'Grocery', nameAr: 'بقالة', icon: Store }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            {t('اطلب وجبتك المفضلة', 'Order Your Favorite Meal')}
          </h1>
          <p className="text-xl md:text-2xl text-orange-50 mb-8">
            {t('توصيل سريع من أفضل المطاعم والمتاجر في منطقتك', 'Fast delivery from the best restaurants and stores in your area')}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full">
              <Clock className="size-5" />
              <span>{t('توصيل في 30 دقيقة', 'Delivery in 30 min')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full">
              <DollarSign className="size-5" />
              <span>{t('أسعار مناسبة', 'Affordable Prices')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full">
              <Star className="size-5" />
              <span>{t('جودة عالية', 'High Quality')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full">
              <TrendingUp className="size-5" />
              <span>{t('أفضل العروض', 'Best Offers')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Categories */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            {t('التصنيفات', 'Categories')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id as Category)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 shadow-lg scale-105'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-orange-300 hover:shadow-md'
                  }`}
                >
                  <Icon className={`size-8 mx-auto mb-2 ${
                    selectedCategory === category.id ? 'text-orange-500' : 'text-gray-600 dark:text-gray-400'
                  }`} />
                  <p className={`font-medium ${
                    selectedCategory === category.id ? 'text-orange-500' : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {category.name}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stores Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold dark:text-white">
              {selectedCategory === 'all' ? t('جميع المتاجر', 'All Stores') : 
               selectedCategory === 'restaurant' ? t('المطاعم', 'Restaurants') :
               selectedCategory === 'supermarket' ? t('السوبرماركت', 'Supermarkets') : 
               t('البقالات', 'Grocery Stores')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              {filteredStores.length} {t('متجر', 'store')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStores.map(store => (
              <Link
                key={store.id}
                to={`/store/${store.id}`}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={store.image}
                    alt={language === 'ar' ? store.nameAr : store.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm dark:text-white">{store.rating}</span>
                  </div>

                  {/* Discount Badge */}
                  {store.discount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                      <Tag className="size-3" />
                      <span className="font-bold text-xs">{store.discount}% {t('خصم', 'OFF')}</span>
                    </div>
                  )}

                  {/* Open/Closed Badge */}
                  <div className={`absolute bottom-3 left-3 ${store.isOpen ? 'bg-green-500' : 'bg-gray-500'} text-white rounded-full px-3 py-1 text-xs font-medium shadow-lg`}>
                    {store.isOpen ? t('مفتوح', 'Open') : t('مغلق', 'Closed')}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1 dark:text-white">
                    {language === 'ar' ? store.nameAr : store.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {language === 'ar' ? store.descriptionAr : store.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <Clock className="size-4 text-blue-500" />
                      <span>{store.deliveryTime} {t('دقيقة', 'min')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="size-4 text-green-500" />
                      <span>{store.deliveryFee} {t('جنية', 'L.E')}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2">
                    {t('الحد الأدنى:', 'Min order:')} <span className="font-bold text-orange-500">{store.minOrder} {t('جنية', 'L.E')}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredStores.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              {t('لا توجد متاجر في هذا التصنيف', 'No stores in this category')}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {t('جرب تصنيفاً آخر', 'Try another category')}
            </p>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
              <Clock className="size-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">
              {t('توصيل سريع', 'Fast Delivery')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('نوصل طلبك في أقل من 30 دقيقة', 'We deliver your order in less than 30 minutes')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <Star className="size-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">
              {t('جودة مضمونة', 'Quality Guaranteed')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('نختار لك أفضل المطاعم والمتاجر', 'We select the best restaurants and stores for you')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <Tag className="size-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">
              {t('عروض حصرية', 'Exclusive Offers')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('خصومات وعروض يومية على طلباتك', 'Daily discounts and offers on your orders')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
