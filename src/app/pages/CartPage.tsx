import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/app/context/CartContext';
import { useLanguage } from '@/app/context/LanguageContext';
import { ArrowRight, Minus, Plus, Trash2, ShoppingBag, Percent } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { stores } from '@/app/data/stores';

export function CartPage() {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  // Get unique stores in cart
  const storesInCart = Array.from(
    new Set(cart.map(item => item.storeId))
  ).map(storeId => stores.find(s => s.id === storeId)!);

  const deliveryFee = storesInCart.length > 0 ? storesInCart[0].deliveryFee : 0;
  const minOrder = storesInCart.length > 0 ? storesInCart[0].minOrder : 0;
  const subtotal = getCartTotal();
  const total = subtotal + deliveryFee;
  const canCheckout = subtotal >= minOrder;

  const handleCheckout = () => {
    if (canCheckout) {
      navigate('/checkout');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors">
              <ArrowRight className="size-5" />
              <span>{t('العودة', 'Back')}</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <ShoppingBag className="size-24 mx-auto mb-4 text-gray-300 dark:text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              {t('سلة التسوق فارغة', 'Cart is Empty')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              {t('أضف بعض المنتجات لبدء الطلب', 'Add some products to start ordering')}
            </p>
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg"
            >
              {t('تصفح المتاجر', 'Browse Stores')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

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

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
          {t('سلة التسوق', 'Shopping Cart')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800"
              >
                <div className="flex gap-4">
                  <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0 border-2 border-gray-100 dark:border-gray-800">
                    <ImageWithFallback
                      src={item.image}
                      alt={language === 'ar' ? item.nameAr : item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg mb-1 dark:text-white">
                          {language === 'ar' ? item.nameAr : item.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                          {language === 'ar' ? item.descriptionAr : item.description}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 rounded-full bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 text-red-500 transition-colors"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    
                    {item.discount && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg px-2 py-1 text-xs font-bold flex items-center gap-1">
                          <Percent className="size-3" />
                          {item.discount}% {t('خصم', 'OFF')}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mt-3">
                      <div>
                        {item.discount ? (
                          <div>
                            <span className="text-xl font-bold text-orange-500">
                              {((item.price * (1 - item.discount / 100)) * item.quantity).toFixed(2)} {t('ريال', 'SAR')}
                            </span>
                            <span className="text-sm text-gray-400 line-through ml-2">
                              {(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ) : (
                          <span className="text-xl font-bold text-orange-500">
                            {(item.price * item.quantity).toFixed(2)} {t('جنية', 'L.E')}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-full px-3 py-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow-sm"
                        >
                          <Minus className="size-4 dark:text-white" />
                        </button>
                        <span className="font-bold w-8 text-center dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors shadow-sm"
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg sticky top-24 border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">
                {t('ملخص الطلب', 'Order Summary')}
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>{t('المجموع الفرعي', 'Subtotal')}</span>
                  <span className="font-medium">{subtotal.toFixed(2)} {t('جنية', 'L.E')}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>{t('رسوم التوصيل', 'Delivery Fee')}</span>
                  <span className="font-medium">{deliveryFee.toFixed(2)} {t('جنية', 'L.E')}</span>
                </div>
                <div className="border-t dark:border-gray-700 pt-4 flex justify-between font-bold text-xl">
                  <span className="dark:text-white">{t('المجموع الكلي', 'Total')}</span>
                  <span className="text-orange-500">{total.toFixed(2)} {t('جنية', 'L.E')}</span>
                </div>
              </div>

              {!canCheckout && (
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-4">
                  <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">
                    {t('الحد الأدنى للطلب', 'Minimum Order')} {minOrder} {t('جنية', 'L.E')}
                    <br />
                    <span className="text-amber-600 dark:text-amber-400">
                      {t('أضف', 'Add')} {(minOrder - subtotal).toFixed(2)} {t('جنية أخرى', 'L.E more')}
                    </span>
                  </p>
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={!canCheckout}
                className={`w-full py-4 rounded-full font-bold text-lg transition-all shadow-lg ${
                  canCheckout
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white hover:scale-105'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                }`}
              >
                {canCheckout 
                  ? t('إتمام الطلب', 'Proceed to Checkout')
                  : `${t('أضف', 'Add')} ${(minOrder - subtotal).toFixed(2)} ${t('جنية', 'L.E')}`
                }
              </button>

              <Link
                to="/"
                className="block text-center mt-4 text-orange-500 hover:underline font-medium"
              >
                {t('متابعة التسوق', 'Continue Shopping')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
