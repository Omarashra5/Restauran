import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/app/context/CartContext';
import { useLanguage } from '@/app/context/LanguageContext';
import { ArrowRight, MapPin, Phone, User, CreditCard, Wallet, Banknote, CheckCircle, Package } from 'lucide-react';
import { stores } from '@/app/data/stores';

export function CheckoutPage() {
  const { cart, getCartTotal, clearCart } = useCart();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber] = useState(Math.floor(Math.random() * 10000));

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
    paymentMethod: 'cash'
  });

  const storesInCart = Array.from(
    new Set(cart.map(item => item.storeId))
  ).map(storeId => stores.find(s => s.id === storeId)!);

  const deliveryFee = storesInCart.length > 0 ? storesInCart[0].deliveryFee : 0;
  const subtotal = getCartTotal();
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    
    // Simulate order placement
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 text-center max-w-md shadow-2xl border border-gray-100 dark:border-gray-800">
          <div className="mb-6">
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="size-12 text-green-500 animate-bounce" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            {t('تم استلام طلبك بنجاح! 🎉', 'Order Received Successfully! 🎉')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t('سيصل طلبك خلال', 'Your order will arrive in')} {storesInCart[0]?.deliveryTime} {t('دقيقة', 'minutes')}
          </p>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 mb-6 border border-orange-200 dark:border-orange-800">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Package className="size-5 text-orange-500" />
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {t('رقم الطلب', 'Order Number')}
              </p>
            </div>
            <p className="text-3xl font-bold text-orange-500">
              #{orderNumber}
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6 border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {t('تتبع طلبك عبر رقم الطلب أعلاه', 'Track your order using the number above')}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <p>{t('جاري تحويلك للصفحة الرئيسية...', 'Redirecting to home page...')}</p>
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
          <Link to="/cart" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors">
            <ArrowRight className="size-5" />
            <span>{t('العودة للسلة', 'Back to Cart')}</span>
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
          {t('إتمام الطلب', 'Checkout')}
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Delivery Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Info */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                <User className="size-6 text-orange-500" />
                {t('المعلومات الشخصية', 'Personal Information')}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                    {t('الاسم الكامل *', 'Full Name *')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder={t('أدخل اسمك', 'Enter your name')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                    {t('رقم الهاتف *', 'Phone Number *')}
                  </label>
                  <div className="relative">
                    <Phone className={`absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 size-5 text-gray-400`} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full ${language === 'ar' ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                      placeholder="05XXXXXXXX"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                <MapPin className="size-6 text-orange-500" />
                {t('عنوان التوصيل', 'Delivery Address')}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                    {t('العنوان التفصيلي *', 'Detailed Address *')}
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder={t('الحي، الشارع، رقم المبنى...', 'District, Street, Building Number...')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                    {t('ملاحظات إضافية (اختياري)', 'Additional Notes (Optional)')}
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder={t('تعليمات خاصة للتوصيل...', 'Special delivery instructions...')}
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                <CreditCard className="size-6 text-orange-500" />
                {t('طريقة الدفع', 'Payment Method')}
              </h2>
              <div className="space-y-3">
                <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  formData.paymentMethod === 'cash'
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleChange}
                    className="w-5 h-5 text-orange-500"
                  />
                  <Banknote className="size-6 text-green-600 dark:text-green-400" />
                  <div>
                    <p className="font-medium dark:text-white">
                      {t('نقداً عند الاستلام', 'Cash on Delivery')}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t('ادفع عند استلام الطلب', 'Pay when you receive your order')}
                    </p>
                  </div>
                </label>
                <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  formData.paymentMethod === 'card'
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                    className="w-5 h-5 text-orange-500"
                  />
                  <CreditCard className="size-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-medium dark:text-white">
                      {t('بطاقة ائتمانية', 'Credit Card')}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t('ادفع إلكترونياً', 'Pay electronically')}
                    </p>
                  </div>
                </label>
                <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  formData.paymentMethod === 'wallet'
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="wallet"
                    checked={formData.paymentMethod === 'wallet'}
                    onChange={handleChange}
                    className="w-5 h-5 text-orange-500"
                  />
                  <Wallet className="size-6 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="font-medium dark:text-white">
                      {t('محفظة إلكترونية', 'Digital Wallet')}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t('STC Pay, Apple Pay, وغيرها', 'STC Pay, Apple Pay, etc.')}
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg sticky top-24 border border-gray-100 dark:border-gray-800">
              <h2 className="text-xl font-bold mb-4 dark:text-white">
                {t('ملخص الطلب', 'Order Summary')}
              </h2>
              
              <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm py-2 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-gray-600 dark:text-gray-400">
                      {language === 'ar' ? item.nameAr : item.name} x{item.quantity}
                    </span>
                    <span className="font-medium dark:text-white">
                      {(item.price * item.quantity).toFixed(2)} {t('جنية', 'L.E')}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t dark:border-gray-700 pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>{t('المجموع الفرعي', 'Subtotal')}</span>
                  <span>{subtotal.toFixed(2)} {t('جنية', 'L.E')}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>{t('رسوم التوصيل', 'Delivery Fee')}</span>
                  <span>{deliveryFee.toFixed(2)} {t('جنية', 'L.E')}</span>
                </div>
                <div className="border-t dark:border-gray-700 pt-3 flex justify-between font-bold text-xl">
                  <span className="dark:text-white">{t('المجموع الكلي', 'Total')}</span>
                  <span className="text-orange-500">{total.toFixed(2)} {t('جنية', 'L.E')}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg"
              >
                {t('تأكيد الطلب', 'Confirm Order')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
