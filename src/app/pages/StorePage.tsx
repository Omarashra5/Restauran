import { useParams, Link } from 'react-router-dom';
import { stores, products } from '@/app/data/stores';
import { useCart } from '@/app/context/CartContext';
import { useLanguage } from '@/app/context/LanguageContext';
import { Star, Clock, DollarSign, ArrowRight, Plus, ShoppingCart, Tag, TrendingUp, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';

export function StorePage() {
  const { storeId } = useParams();
  const { addToCart } = useCart();
  const { language, t } = useLanguage();
  const [addedProducts, setAddedProducts] = useState<Set<string>>(new Set());

  const store = stores.find(s => s.id === storeId);
  const storeProducts = products.filter(p => p.storeId === storeId);

  // Group products by category
  const productsByCategory = storeProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof storeProducts>);

  if (!store) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold mb-2 dark:text-white">
            {t('المتجر غير موجود', 'Store not found')}
          </h2>
          <Link to="/" className="text-orange-500 hover:underline">
            {t('العودة للرئيسية', 'Back to home')}
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = (product: typeof storeProducts[0]) => {
    addToCart(product);
    setAddedProducts(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedProducts(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 1500);
  };

  const popularProducts = storeProducts.filter(p => p.isPopular);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Back Button */}
      <div className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors">
            <ArrowRight className="size-5" />
            <span>{t('العودة', 'Back')}</span>
          </Link>
        </div>
      </div>

      {/* Store Header */}
      <div className="bg-white dark:bg-gray-900 shadow-sm mb-6">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-64 h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
              <ImageWithFallback
                src={store.image}
                alt={language === 'ar' ? store.nameAr : store.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2 dark:text-white">
                    {language === 'ar' ? store.nameAr : store.name}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {language === 'ar' ? store.descriptionAr : store.description}
                  </p>
                </div>
                {store.discount && (
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Tag className="size-5" />
                    <span className="font-bold text-lg">{store.discount}% {t('خصم', 'OFF')}</span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 px-4 py-3 rounded-xl border border-yellow-200 dark:border-yellow-800">
                  <Star className="size-6 fill-yellow-400 text-yellow-400" />
                  <div>
                    <span className="font-bold text-lg dark:text-white">{store.rating}</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('تقييم ممتاز', 'Excellent')}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-4 py-3 rounded-xl border border-blue-200 dark:border-blue-800">
                  <Clock className="size-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <span className="font-bold dark:text-white">{store.deliveryTime} {t('دقيقة', 'min')}</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('وقت التوصيل', 'Delivery Time')}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 px-4 py-3 rounded-xl border border-green-200 dark:border-green-800">
                  <DollarSign className="size-6 text-green-600 dark:text-green-400" />
                  <div>
                    <span className="font-bold dark:text-white">{store.deliveryFee} {t('جنية', 'L.E')}</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('رسوم التوصيل', 'Delivery Fee')}</p>
                  </div>
                </div>

                <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border ${
                  store.isOpen 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800' 
                    : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                }`}>
                  <CheckCircle className={`size-6 ${store.isOpen ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}`} />
                  <div>
                    <span className="font-bold dark:text-white">
                      {store.isOpen ? t('مفتوح الآن', 'Open Now') : t('مغلق', 'Closed')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl px-4 py-3">
                <p className="text-sm dark:text-gray-300">
                  {t('الحد الأدنى للطلب:', 'Minimum Order:')} <span className="font-bold text-orange-500 text-lg">{store.minOrder} {t('جنية', 'L.E')}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Products */}
      {popularProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="size-6 text-orange-500" />
            <h2 className="text-2xl font-bold dark:text-white">
              {t('الأكثر طلباً', 'Most Popular')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularProducts.map(product => (
              <div
                key={product.id}
                className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl overflow-hidden border-2 border-orange-200 dark:border-orange-800 shadow-lg"
              >
                <div className="relative h-32 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={language === 'ar' ? product.nameAr : product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white rounded-lg px-2 py-1 text-xs font-bold">
                      {product.discount}% {t('خصم', 'OFF')}
                    </div>
                  )}
                  <div className="absolute top-2 left-2 bg-white dark:bg-gray-800 rounded-lg px-2 py-1 flex items-center gap-1">
                    <Star className="size-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold dark:text-white">{product.rating}</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-sm mb-1 dark:text-white">
                    {language === 'ar' ? product.nameAr : product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-bold">
                      {product.price} {t('جنية', 'L.E')}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="p-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-all"
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Products by Category */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 dark:text-white">
              <span className="w-2 h-10 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></span>
              {category}
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                ({categoryProducts.length} {t('منتج', 'items')})
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map(product => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800"
                >
                  <div className="relative h-48 overflow-hidden group">
                    <ImageWithFallback
                      src={product.image}
                      alt={language === 'ar' ? product.nameAr : product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Discount Badge */}
                    {product.discount && (
                      <div className="absolute top-3 right-3 bg-red-500 text-white rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                        <Tag className="size-3" />
                        <span className="font-bold text-xs">{product.discount}% {t('خصم', 'OFF')}</span>
                      </div>
                    )}

                    {/* Rating Badge */}
                    <div className="absolute top-3 left-3 bg-white dark:bg-gray-800 rounded-full px-2 py-1 flex items-center gap-1 shadow-md">
                      <Star className="size-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-bold dark:text-white">{product.rating}</span>
                    </div>

                    {/* Popular Badge */}
                    {product.isPopular && (
                      <div className="absolute bottom-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg flex items-center gap-1">
                        <TrendingUp className="size-3" />
                        {t('الأكثر طلباً', 'Popular')}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1 dark:text-white">
                      {language === 'ar' ? product.nameAr : product.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                      {language === 'ar' ? product.descriptionAr : product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        {product.discount ? (
                          <div>
                            <span className="text-xl font-bold text-orange-500">
                              {(product.price * (1 - product.discount / 100)).toFixed(0)} {t('جنية', 'L.E')}
                            </span>
                            <span className="text-sm text-gray-400 line-through ml-2">
                              {product.price}
                            </span>
                          </div>
                        ) : (
                          <span className="text-xl font-bold text-orange-500">
                            {product.price} {t('جنية', 'L.E')}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`p-3 rounded-full transition-all shadow-lg ${
                          addedProducts.has(product.id)
                            ? 'bg-green-500 text-white scale-110'
                            : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white hover:scale-110'
                        }`}
                      >
                        {addedProducts.has(product.id) ? (
                          <CheckCircle className="size-5" />
                        ) : (
                          <Plus className="size-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {storeProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              {t('لا توجد منتجات متاحة حالياً', 'No products available')}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {t('تحقق مرة أخرى لاحقاً', 'Check back later')}
            </p>
          </div>
        )}
      </div>

      {/* Sticky Add to Cart Floating Button */}
      <Link
        to="/cart"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <ShoppingCart className="size-6" />
      </Link>
    </div>
  );
}
