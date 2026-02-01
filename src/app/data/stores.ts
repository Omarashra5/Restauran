export interface Store {
  id: string;
  name: string;
  nameAr: string;
  category: 'restaurant' | 'supermarket' | 'grocery';
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  description: string;
  descriptionAr: string;
  isOpen: boolean;
  discount?: number;
}

export interface Product {
  id: string;
  storeId: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  discount?: number;
  isPopular?: boolean;
}

export const stores: Store[] = [
  {
    id: '1',
    name: 'Burger House',
    nameAr: 'بيت البرجر',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1761315414125-2ce6a9e7d590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBidXJnZXIlMjBtZWFsJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3Njk5NzY3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    deliveryTime: '20-30',
    deliveryFee: 15,
    minOrder: 50,
    description: 'The best burgers in town',
    descriptionAr: 'أفضل برجر في المدينة',
    isOpen: true,
    discount: 20
  },
  {
    id: '2',
    name: 'Pizza Palace',
    nameAr: 'قصر البيتزا',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1575150741130-fd1529c52913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHNsaWNlcyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY5OTEyNzU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    deliveryTime: '25-35',
    deliveryFee: 10,
    minOrder: 60,
    description: 'Authentic Italian pizza',
    descriptionAr: 'بيتزا إيطالية أصلية',
    isOpen: true
  },
  {
    id: '3',
    name: 'Shawarma Express',
    nameAr: 'شاورما إكسبريس',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1665989215795-f67f4723087d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjBzaGF3YXJtYSUyMHBsYXRlfGVufDF8fHx8MTc2OTk3Njc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    deliveryTime: '15-25',
    deliveryFee: 5,
    minOrder: 30,
    description: 'Delicious Middle Eastern food',
    descriptionAr: 'طعام شرق أوسطي لذيذ',
    isOpen: true,
    discount: 15
  },
  {
    id: '4',
    name: 'Sushi Master',
    nameAr: 'سوشي ماستر',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1712183718471-dab51f0748ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGxzJTIwamFwYW5lc2V8ZW58MXx8fHwxNzY5ODY0OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    deliveryTime: '30-40',
    deliveryFee: 20,
    minOrder: 80,
    description: 'Fresh sushi & Japanese cuisine',
    descriptionAr: 'سوشي طازج ومطبخ ياباني',
    isOpen: true
  },
  {
    id: '5',
    name: 'Chicken Delight',
    nameAr: 'دجاج ديلايت',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1672856399624-61b47d70d339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGNoaWNrZW4lMjBjcmlzcHl8ZW58MXx8fHwxNzY5ODYzMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    deliveryTime: '20-30',
    deliveryFee: 10,
    minOrder: 40,
    description: 'Crispy fried chicken',
    descriptionAr: 'دجاج مقرمش',
    isOpen: true,
    discount: 10
  },
  {
    id: '6',
    name: 'Fresh Mart',
    nameAr: 'فريش مارت',
    category: 'supermarket',
    image: 'https://images.unsplash.com/photo-1609952578538-3d454550301d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBzdXBlcm1hcmtldHxlbnwxfHx8fDE3Njk5NzY3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.4,
    deliveryTime: '40-50',
    deliveryFee: 20,
    minOrder: 100,
    description: 'Fresh fruits & vegetables',
    descriptionAr: 'فواكه وخضروات طازجة',
    isOpen: true
  },
  {
    id: '7',
    name: 'Super Store',
    nameAr: 'سوبر ستور',
    category: 'supermarket',
    image: 'https://images.unsplash.com/photo-1651488201726-bbb9577778ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk5NzY3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.3,
    deliveryTime: '45-60',
    deliveryFee: 25,
    minOrder: 150,
    description: 'Everything you need',
    descriptionAr: 'كل ما تحتاجه',
    isOpen: true,
    discount: 5
  },
  {
    id: '8',
    name: 'Corner Shop',
    nameAr: 'البقالة',
    category: 'grocery',
    image: 'https://images.unsplash.com/photo-1558784019-0dade423278b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMGZvb2QlMjBib3hlc3xlbnwxfHx8fDE3Njk5NzY3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    deliveryTime: '15-20',
    deliveryFee: 5,
    minOrder: 20,
    description: 'Quick daily essentials',
    descriptionAr: 'احتياجاتك اليومية السريعة',
    isOpen: true
  }
];

export const products: Product[] = [
  // Burger House - 8 products
  {
    id: 'p1',
    storeId: '1',
    name: 'Classic Burger',
    nameAr: 'برجر كلاسيك',
    description: 'Beef patty with lettuce, tomato, cheese',
    descriptionAr: 'لحم بقري مع خس وطماطم وجبنة',
    price: 45,
    image: 'https://images.unsplash.com/photo-1582295523904-8ab53717447c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2VidXJnZXIlMjBnb3VybWV0JTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3Njk5NzczMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Burgers',
    rating: 4.7,
    isPopular: true,
    discount: 20
  },
  {
    id: 'p2',
    storeId: '1',
    name: 'Double Cheese Burger',
    nameAr: 'برجر دبل تشيز',
    description: 'Two patties, double cheese',
    descriptionAr: 'قطعتين لحم وجبنة مضاعفة',
    price: 65,
    image: 'https://images.unsplash.com/photo-1761315414125-2ce6a9e7d590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBidXJnZXIlMjBtZWFsJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3Njk5NzY3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Burgers',
    rating: 4.8,
    isPopular: true
  },
  {
    id: 'p3',
    storeId: '1',
    name: 'Chicken Burger',
    nameAr: 'برجر دجاج',
    description: 'Grilled chicken breast',
    descriptionAr: 'صدر دجاج مشوي',
    price: 40,
    image: 'https://images.unsplash.com/photo-1761545832737-bc8d52aa2001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbnVnZ2V0cyUyMGdvbGRlbnxlbnwxfHx8fDE3Njk5NzczMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Burgers',
    rating: 4.5
  },
  {
    id: 'p4',
    storeId: '1',
    name: 'French Fries',
    nameAr: 'بطاطس مقلية',
    description: 'Crispy golden fries',
    descriptionAr: 'بطاطس مقرمشة ذهبية',
    price: 15,
    image: 'https://images.unsplash.com/photo-1734774797087-b6435057a15e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBmcmllcyUyMGNyaXNweXxlbnwxfHx8fDE3Njk5NTMwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sides',
    rating: 4.6
  },
  {
    id: 'p5',
    storeId: '1',
    name: 'Onion Rings',
    nameAr: 'حلقات البصل',
    description: 'Crispy fried onion rings',
    descriptionAr: 'حلقات بصل مقرمشة',
    price: 18,
    image: 'https://images.unsplash.com/photo-1766589152198-38630c391dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmlvbiUyMHJpbmdzJTIwZnJpZWR8ZW58MXx8fHwxNzY5OTc3MzI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sides',
    rating: 4.4
  },
  {
    id: 'p6',
    storeId: '1',
    name: 'Cola Drink',
    nameAr: 'مشروب كولا',
    description: 'Refreshing cola drink',
    descriptionAr: 'مشروب كولا منعش',
    price: 8,
    image: 'https://images.unsplash.com/photo-1735643434124-f51889fa1f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xhJTIwc29kYSUyMGRyaW5rfGVufDF8fHx8MTc2OTg5Mjk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Drinks',
    rating: 4.3
  },
  {
    id: 'p7',
    storeId: '1',
    name: 'Chicken Nuggets',
    nameAr: 'ناجتس دجاج',
    description: '10 pieces crispy nuggets',
    descriptionAr: '10 قطع ناجتس مقرمش',
    price: 35,
    image: 'https://images.unsplash.com/photo-1761545832737-bc8d52aa2001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbnVnZ2V0cyUyMGdvbGRlbnxlbnwxfHx8fDE3Njk5NzczMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sides',
    rating: 4.5
  },
  {
    id: 'p8',
    storeId: '1',
    name: 'Steak Burger',
    nameAr: 'برجر ستيك',
    description: 'Premium beef steak burger',
    descriptionAr: 'برجر بلحم ستيك فاخر',
    price: 85,
    image: 'https://images.unsplash.com/photo-1693422660544-014dd9f3ef73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGdyaWxsZWQlMjBtZWF0fGVufDF8fHx8MTc2OTk1MzAxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Burgers',
    rating: 4.9,
    isPopular: true
  },

  // Pizza Palace - 6 products
  {
    id: 'p9',
    storeId: '2',
    name: 'Margherita Pizza',
    nameAr: 'بيتزا مارجريتا',
    description: 'Classic tomato and mozzarella',
    descriptionAr: 'طماطم وموزاريلا كلاسيك',
    price: 55,
    image: 'https://images.unsplash.com/photo-1702716059239-385baacdabdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBzbGljZXxlbnwxfHx8fDE3Njk5NDYyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pizza',
    rating: 4.6,
    isPopular: true
  },
  {
    id: 'p10',
    storeId: '2',
    name: 'Pepperoni Pizza',
    nameAr: 'بيتزا ببروني',
    description: 'Spicy pepperoni slices',
    descriptionAr: 'شرائح ببروني حارة',
    price: 70,
    image: 'https://images.unsplash.com/photo-1672856399643-47ddf6b2d6d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMGhvdHxlbnwxfHx8fDE3Njk5NzczMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pizza',
    rating: 4.8,
    isPopular: true
  },
  {
    id: 'p11',
    storeId: '2',
    name: 'Four Cheese Pizza',
    nameAr: 'بيتزا أربع أجبان',
    description: 'Blend of 4 Italian cheeses',
    descriptionAr: 'خليط من 4 أجبان إيطالية',
    price: 75,
    image: 'https://images.unsplash.com/photo-1575150741130-fd1529c52913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHNsaWNlcyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY5OTEyNzU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pizza',
    rating: 4.7
  },
  {
    id: 'p12',
    storeId: '2',
    name: 'Pasta Carbonara',
    nameAr: 'باستا كاربونارا',
    description: 'Creamy Italian pasta',
    descriptionAr: 'باستا إيطالية كريمية',
    price: 50,
    image: 'https://images.unsplash.com/photo-1714383611462-f730359f9145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMHNwYWdoZXR0aSUyMGl0YWxpYW58ZW58MXx8fHwxNzY5OTc3MzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pasta',
    rating: 4.5
  },
  {
    id: 'p13',
    storeId: '2',
    name: 'Garlic Bread',
    nameAr: 'خبز بالثوم',
    description: 'Toasted garlic bread',
    descriptionAr: 'خبز محمص بالثوم',
    price: 20,
    image: 'https://images.unsplash.com/photo-1663904460424-91895028aa9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZCUyMGxvYWYlMjBmcmVzaHxlbnwxfHx8fDE3Njk4NzgwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sides',
    rating: 4.4
  },
  {
    id: 'p14',
    storeId: '2',
    name: 'Water Bottle',
    nameAr: 'زجاجة ماء',
    description: 'Mineral water',
    descriptionAr: 'ماء معدني',
    price: 5,
    image: 'https://images.unsplash.com/photo-1544509925-a45ab789916b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjB3YXRlciUyMGJvdHRsZXxlbnwxfHx8fDE3Njk5NzczMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Drinks',
    rating: 4.2
  },

  // Shawarma Express - 7 products
  {
    id: 'p15',
    storeId: '3',
    name: 'Chicken Shawarma',
    nameAr: 'شاورما دجاج',
    description: 'Marinated chicken with garlic sauce',
    descriptionAr: 'دجاج متبل مع صلصة الثوم',
    price: 25,
    image: 'https://images.unsplash.com/photo-1760888548893-bc2f7e09e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwc2hhd2FybWElMjB3cmFwfGVufDF8fHx8MTc2OTk3NzMyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Shawarma',
    rating: 4.8,
    isPopular: true,
    discount: 15
  },
  {
    id: 'p16',
    storeId: '3',
    name: 'Beef Shawarma',
    nameAr: 'شاورما لحم',
    description: 'Tender beef with tahini',
    descriptionAr: 'لحم طري مع طحينة',
    price: 30,
    image: 'https://images.unsplash.com/photo-1665989215795-f67f4723087d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjBzaGF3YXJtYSUyMHBsYXRlfGVufDF8fHx8MTc2OTk3Njc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Shawarma',
    rating: 4.7
  },
  {
    id: 'p17',
    storeId: '3',
    name: 'Falafel Sandwich',
    nameAr: 'ساندويش فلافل',
    description: 'Crispy falafel with vegetables',
    descriptionAr: 'فلافل مقرمش مع خضار',
    price: 20,
    image: 'https://images.unsplash.com/photo-1655735199893-7661677955e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWxhZmVsJTIwc2FuZHdpY2glMjBzdHJlZXR8ZW58MXx8fHwxNzY5OTc3MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Vegetarian',
    rating: 4.6
  },
  {
    id: 'p18',
    storeId: '3',
    name: 'Kebab Plate',
    nameAr: 'صحن كباب',
    description: 'Grilled kebab with rice',
    descriptionAr: 'كباب مشوي مع أرز',
    price: 45,
    image: 'https://images.unsplash.com/photo-1673238111115-18d3da6ec22b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwa2ViYWIlMjBwbGF0ZXxlbnwxfHx8fDE3Njk5NzczMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Grills',
    rating: 4.9,
    isPopular: true
  },
  {
    id: 'p19',
    storeId: '3',
    name: 'Hummus',
    nameAr: 'حمص',
    description: 'Chickpea hummus dip',
    descriptionAr: 'صلصة حمص بالحمص',
    price: 12,
    image: 'https://images.unsplash.com/photo-1608753478723-494e2dc286f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBmcmVzaCUyMGRhaXJ5fGVufDF8fHx8MTc2OTk3NzMzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sides',
    rating: 4.5
  },
  {
    id: 'p20',
    storeId: '3',
    name: 'Tacos',
    nameAr: 'تاكو',
    description: 'Mexican style tacos',
    descriptionAr: 'تاكو على الطريقة المكسيكية',
    price: 35,
    image: 'https://images.unsplash.com/photo-1707604341704-74abdc25e52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvJTIwbWV4aWNhbiUyMGZvb2R8ZW58MXx8fHwxNzY5ODc2NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mexican',
    rating: 4.4
  },
  {
    id: 'p21',
    storeId: '3',
    name: 'Mixed Grill',
    nameAr: 'مشاوي مشكلة',
    description: 'Selection of grilled meats',
    descriptionAr: 'تشكيلة من اللحوم المشوية',
    price: 80,
    image: 'https://images.unsplash.com/photo-1693422660544-014dd9f3ef73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGdyaWxsZWQlMjBtZWF0fGVufDF8fHx8MTc2OTk1MzAxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Grills',
    rating: 4.8
  },

  // Sushi Master - 5 products
  {
    id: 'p22',
    storeId: '4',
    name: 'California Roll',
    nameAr: 'كاليفورنيا رول',
    description: 'Crab, avocado, cucumber',
    descriptionAr: 'سلطعون، أفوكادو، خيار',
    price: 50,
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpZm9ybmlhJTIwc3VzaGklMjByb2xsfGVufDF8fHx8MTc2OTkwODg3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sushi Rolls',
    rating: 4.7,
    isPopular: true
  },
  {
    id: 'p23',
    storeId: '4',
    name: 'Salmon Nigiri',
    nameAr: 'سالمون نيجيري',
    description: 'Fresh salmon on rice',
    descriptionAr: 'سلمون طازج على الأرز',
    price: 60,
    image: 'https://images.unsplash.com/photo-1680675228874-9b9963812b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMG5pZ2lyaSUyMHNhbG1vbnxlbnwxfHx8fDE3Njk5MDc1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sushi',
    rating: 4.9,
    isPopular: true
  },
  {
    id: 'p24',
    storeId: '4',
    name: 'Dragon Roll',
    nameAr: 'دراجون رول',
    description: 'Eel, cucumber, avocado',
    descriptionAr: 'ثعبان، خيار، أفوكادو',
    price: 70,
    image: 'https://images.unsplash.com/photo-1712183718471-dab51f0748ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGxzJTIwamFwYW5lc2V8ZW58MXx8fHwxNzY5ODY0OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sushi Rolls',
    rating: 4.8
  },
  {
    id: 'p25',
    storeId: '4',
    name: 'Miso Soup',
    nameAr: 'شوربة ميسو',
    description: 'Traditional Japanese soup',
    descriptionAr: 'شوربة يابانية تقليدية',
    price: 15,
    image: 'https://images.unsplash.com/photo-1608753478723-494e2dc286f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBmcmVzaCUyMGRhaXJ5fGVufDF8fHx8MTc2OTk3NzMzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Soup',
    rating: 4.5
  },
  {
    id: 'p26',
    storeId: '4',
    name: 'Sushi Combo',
    nameAr: 'كومبو سوشي',
    description: 'Mixed sushi platter',
    descriptionAr: 'طبق سوشي متنوع',
    price: 95,
    image: 'https://images.unsplash.com/photo-1680675228874-9b9963812b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMG5pZ2lyaSUyMHNhbG1vbnxlbnwxfHx8fDE3Njk5MDc1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sushi',
    rating: 4.9
  },

  // Chicken Delight - 5 products
  {
    id: 'p27',
    storeId: '5',
    name: 'Fried Chicken Bucket',
    nameAr: 'سطل دجاج مقلي',
    description: '8 pieces of crispy chicken',
    descriptionAr: '8 قطع دجاج مقرمش',
    price: 80,
    image: 'https://images.unsplash.com/photo-1672856399624-61b47d70d339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGNoaWNrZW4lMjBjcmlzcHl8ZW58MXx8fHwxNzY5ODYzMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Chicken',
    rating: 4.7,
    isPopular: true,
    discount: 10
  },
  {
    id: 'p28',
    storeId: '5',
    name: 'Chicken Tenders',
    nameAr: 'أصابع دجاج',
    description: '6 breaded chicken tenders',
    descriptionAr: '6 أصابع دجاج مقرمشة',
    price: 45,
    image: 'https://images.unsplash.com/photo-1761545832737-bc8d52aa2001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbnVnZ2V0cyUyMGdvbGRlbnxlbnwxfHx8fDE3Njk5NzczMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Chicken',
    rating: 4.6
  },
  {
    id: 'p29',
    storeId: '5',
    name: 'Spicy Wings',
    nameAr: 'أجنحة حارة',
    description: '10 hot buffalo wings',
    descriptionAr: '10 أجنحة حارة',
    price: 50,
    image: 'https://images.unsplash.com/photo-1719043043635-70d2b4c55845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlzcHklMjBmcmllZCUyMGNoaWNrZW4lMjB3aW5nc3xlbnwxfHx8fDE3Njk5NzczMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Chicken',
    rating: 4.8
  },
  {
    id: 'p30',
    storeId: '5',
    name: 'Chicken Nuggets',
    nameAr: 'ناجتس دجاج',
    description: '12 golden nuggets',
    descriptionAr: '12 قطعة ناجتس ذهبية',
    price: 30,
    image: 'https://images.unsplash.com/photo-1761545832737-bc8d52aa2001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbnVnZ2V0cyUyMGdvbGRlbnxlbnwxfHx8fDE3Njk5NzczMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Chicken',
    rating: 4.5
  },
  {
    id: 'p31',
    storeId: '5',
    name: 'Coleslaw',
    nameAr: 'سلطة كول سلو',
    description: 'Fresh coleslaw salad',
    descriptionAr: 'سلطة كول سلو طازجة',
    price: 12,
    image: 'https://images.unsplash.com/photo-1609952578538-3d454550301d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBzdXBlcm1hcmtldHxlbnwxfHx8fDE3Njk5NzY3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sides',
    rating: 4.3
  },

  // Fresh Mart - 8 products
  {
    id: 'p32',
    storeId: '6',
    name: 'Fresh Tomatoes',
    nameAr: 'طماطم طازجة',
    description: '1kg organic tomatoes',
    descriptionAr: '1 كجم طماطم عضوية',
    price: 8,
    image: 'https://images.unsplash.com/photo-1700064165267-8fa68ef07167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHRvbWF0b2VzJTIwcmVkfGVufDF8fHx8MTc2OTk3NzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Vegetables',
    rating: 4.6
  },
  {
    id: 'p33',
    storeId: '6',
    name: 'Cucumber',
    nameAr: 'خيار',
    description: '1kg fresh cucumber',
    descriptionAr: '1 كجم خيار طازج',
    price: 6,
    image: 'https://images.unsplash.com/photo-1761755207671-d07ea4bb555c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWN1bWJlciUyMGdyZWVuJTIwZnJlc2h8ZW58MXx8fHwxNzY5ODc5MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Vegetables',
    rating: 4.5
  },
  {
    id: 'p34',
    storeId: '6',
    name: 'Mixed Fruits',
    nameAr: 'فواكه مشكلة',
    description: 'Seasonal fruit selection',
    descriptionAr: 'تشكيلة فواكه موسمية',
    price: 35,
    image: 'https://images.unsplash.com/photo-1629905796123-559d5cc00eb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMGZydWl0cyUyMGJhc2tldHxlbnwxfHx8fDE3Njk5NzczMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fruits',
    rating: 4.8
  },
  {
    id: 'p35',
    storeId: '6',
    name: 'Bananas',
    nameAr: 'موز',
    description: 'Fresh ripe bananas',
    descriptionAr: 'موز طازج ناضج',
    price: 10,
    image: 'https://images.unsplash.com/photo-1623810836868-057b23aef3aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5hbmFzJTIweWVsbG93JTIwcmlwZXxlbnwxfHx8fDE3Njk5NzczMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fruits',
    rating: 4.7
  },
  {
    id: 'p36',
    storeId: '6',
    name: 'Red Apples',
    nameAr: 'تفاح أحمر',
    description: 'Crispy fresh apples',
    descriptionAr: 'تفاح أحمر مقرمش',
    price: 15,
    image: 'https://images.unsplash.com/photo-1623815242959-fb20354f9b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBhcHBsZXMlMjBmcmVzaHxlbnwxfHx8fDE3Njk5NzczMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fruits',
    rating: 4.6
  },
  {
    id: 'p37',
    storeId: '6',
    name: 'Oranges',
    nameAr: 'برتقال',
    description: 'Juicy oranges',
    descriptionAr: 'برتقال عصيري',
    price: 12,
    image: 'https://images.unsplash.com/photo-1634781326658-8734696bb6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBjaXRydXMlMjBmcnVpdHxlbnwxfHx8fDE3Njk5NzczMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fruits',
    rating: 4.5
  },
  {
    id: 'p38',
    storeId: '6',
    name: 'Yogurt',
    nameAr: 'زبادي',
    description: 'Fresh yogurt',
    descriptionAr: 'زبادي طازج',
    price: 18,
    image: 'https://images.unsplash.com/photo-1608753478723-494e2dc286f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBmcmVzaCUyMGRhaXJ5fGVufDF8fHx8MTc2OTk3NzMzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Dairy',
    rating: 4.4
  },
  {
    id: 'p39',
    storeId: '6',
    name: 'Cheese',
    nameAr: 'جبنة',
    description: 'Cheddar cheese block',
    descriptionAr: 'قطعة جبنة شيدر',
    price: 25,
    image: 'https://images.unsplash.com/photo-1757857755327-5b38c51a0302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBjaGVkZGFyJTIwYmxvY2t8ZW58MXx8fHwxNzY5OTc3MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Dairy',
    rating: 4.7
  },

  // Super Store - 8 products
  {
    id: 'p40',
    storeId: '7',
    name: 'Rice 5kg',
    nameAr: 'أرز 5 كجم',
    description: 'Premium basmati rice',
    descriptionAr: 'أرز بسمتي فاخر',
    price: 45,
    image: 'https://images.unsplash.com/photo-1505216980056-a7b7b1c6e000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwYmFnJTIwYmFzbWF0aXxlbnwxfHx8fDE3Njk5NzczMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Grains',
    rating: 4.6,
    discount: 5
  },
  {
    id: 'p41',
    storeId: '7',
    name: 'Cooking Oil 2L',
    nameAr: 'زيت طبخ 2 لتر',
    description: 'Sunflower oil',
    descriptionAr: 'زيت عباد الشمس',
    price: 25,
    image: 'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlfGVufDF8fHx8MTc2OTg3NTUzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Oils',
    rating: 4.5
  },
  {
    id: 'p42',
    storeId: '7',
    name: 'Sugar 2kg',
    nameAr: 'سكر 2 كجم',
    description: 'White refined sugar',
    descriptionAr: 'سكر أبيض مكرر',
    price: 18,
    image: 'https://images.unsplash.com/photo-1575650771982-097ad8b4a716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWdhciUyMHdoaXRlJTIwY3J5c3RhbHN8ZW58MXx8fHwxNzY5OTc3MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Groceries',
    rating: 4.4
  },
  {
    id: 'p43',
    storeId: '7',
    name: 'Coffee Beans',
    nameAr: 'حبوب قهوة',
    description: 'Roasted coffee beans',
    descriptionAr: 'حبوب قهوة محمصة',
    price: 55,
    image: 'https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzY5OTcxNTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Beverages',
    rating: 4.8
  },
  {
    id: 'p44',
    storeId: '7',
    name: 'Chocolate Bar',
    nameAr: 'لوح شوكولاتة',
    description: 'Dark chocolate',
    descriptionAr: 'شوكولاتة داكنة',
    price: 15,
    image: 'https://images.unsplash.com/photo-1522249341405-3871994ac062?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBiYXIlMjBkYXJrfGVufDF8fHx8MTc2OTk0Mzk4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Snacks',
    rating: 4.7
  },
  {
    id: 'p45',
    storeId: '7',
    name: 'Potato Chips',
    nameAr: 'رقائق بطاطس',
    description: 'Crispy chips',
    descriptionAr: 'رقائق مقرمشة',
    price: 10,
    image: 'https://images.unsplash.com/photo-1760997707695-f0b5527e5de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjBjaGlwcyUyMHNuYWNrfGVufDF8fHx8MTc2OTk3NzMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Snacks',
    rating: 4.5
  },
  {
    id: 'p46',
    storeId: '7',
    name: 'Ice Cream',
    nameAr: 'آيس كريم',
    description: 'Vanilla ice cream',
    descriptionAr: 'آيس كريم فانيليا',
    price: 22,
    image: 'https://images.unsplash.com/photo-1729462043494-dda667c69fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMHZhbmlsbGF8ZW58MXx8fHwxNzY5OTc3MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Frozen',
    rating: 4.6
  },
  {
    id: 'p47',
    storeId: '7',
    name: 'Cookies',
    nameAr: 'كوكيز',
    description: 'Chocolate chip cookies',
    descriptionAr: 'كوكيز برقائق الشوكولاتة',
    price: 20,
    image: 'https://images.unsplash.com/photo-1743623173733-d83928a33c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raWVzJTIwY2hvY29sYXRlJTIwY2hpcHxlbnwxfHx8fDE3Njk5NzczMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Snacks',
    rating: 4.7
  },

  // Corner Shop - 6 products
  {
    id: 'p48',
    storeId: '8',
    name: 'Milk 1L',
    nameAr: 'حليب 1 لتر',
    description: 'Fresh whole milk',
    descriptionAr: 'حليب كامل الدسم طازج',
    price: 8,
    image: 'https://images.unsplash.com/photo-1576186726115-4d51596775d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrJTIwYm90dGxlJTIwZ2xhc3N8ZW58MXx8fHwxNzY5OTYxMDQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Dairy',
    rating: 4.5
  },
  {
    id: 'p49',
    storeId: '8',
    name: 'Bread',
    nameAr: 'خبز',
    description: 'Fresh baked bread',
    descriptionAr: 'خبز طازج',
    price: 5,
    image: 'https://images.unsplash.com/photo-1663904460424-91895028aa9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZCUyMGxvYWYlMjBmcmVzaHxlbnwxfHx8fDE3Njk4NzgwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Bakery',
    rating: 4.6
  },
  {
    id: 'p50',
    storeId: '8',
    name: 'Eggs (12)',
    nameAr: 'بيض (12)',
    description: 'Fresh farm eggs',
    descriptionAr: 'بيض مزارع طازج',
    price: 15,
    image: 'https://images.unsplash.com/photo-1571265430516-b8f8bb8c5ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2dzJTIwd2hpdGUlMjBicm93bnxlbnwxfHx8fDE3Njk5NzczMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Dairy',
    rating: 4.7
  },
  {
    id: 'p51',
    storeId: '8',
    name: 'Water 1.5L',
    nameAr: 'ماء 1.5 لتر',
    description: 'Spring water',
    descriptionAr: 'ماء معدني',
    price: 3,
    image: 'https://images.unsplash.com/photo-1544509925-a45ab789916b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjB3YXRlciUyMGJvdHRsZXxlbnwxfHx8fDE3Njk5NzczMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Drinks',
    rating: 4.4
  },
  {
    id: 'p52',
    storeId: '8',
    name: 'Soft Drink',
    nameAr: 'مشروب غازي',
    description: 'Cola drink',
    descriptionAr: 'مشروب كولا',
    price: 6,
    image: 'https://images.unsplash.com/photo-1735643434124-f51889fa1f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xhJTIwc29kYSUyMGRyaW5rfGVufDF8fHx8MTc2OTg5Mjk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Drinks',
    rating: 4.3
  },
  {
    id: 'p53',
    storeId: '8',
    name: 'Snack Pack',
    nameAr: 'علبة سناك',
    description: 'Mixed snacks',
    descriptionAr: 'سناك متنوع',
    price: 12,
    image: 'https://images.unsplash.com/photo-1760997707695-f0b5527e5de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjBjaGlwcyUyMHNuYWNrfGVufDF8fHx8MTc2OTk3NzMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Snacks',
    rating: 4.5
  }
];
