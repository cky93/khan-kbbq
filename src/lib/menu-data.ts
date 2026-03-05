export interface MenuItem {
  name: string;
  desc?: string;
  price?: string;
  prices?: { label: string; price: string }[];
  tag?: string;
  note?: string;
  image?: string;
  tier?: 'lunch' | 'dinner' | 'premium';
}

export interface MenuCategory {
  title: string;
  subtitle?: string;
  note?: string;
  items: MenuItem[];
  image?: string;
}

export interface MenuSection {
  id: string;
  heading: string;
  categories: MenuCategory[];
  heroImage?: string;
}

/* ─────────────────────────────────────────────────────
   Korean BBQ food images from Unsplash (free license)
   Matched to actual Korean BBQ dish types
   ───────────────────────────────────────────────────── */
const img = {
  /* ── BEEF ── */
  // Thinly sliced raw beef arranged on a plate
  chadol: 'https://images.unsplash.com/photo-1768203632885-91485e5f4036?w=500&h=500&fit=crop&auto=format',
  // Marinated beef bulgogi
  bulgogi: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=500&h=500&fit=crop&auto=format',
  // Spicy marinated beef - red chili
  spicyBeef: 'https://images.unsplash.com/photo-1708388064894-878781b1db43?w=500&h=500&fit=crop&auto=format',
  // Thick steak cuts on grill
  steak: 'https://images.unsplash.com/photo-1558030006-450675393462?w=500&h=500&fit=crop&auto=format',
  // Galbi short ribs marinated
  galbi: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&h=500&fit=crop&auto=format',
  // Butcher's cut thick premium steak
  butcherCut: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop&auto=format',
  // Thinly sliced marbled beef and pork belly
  cubeSteak: 'https://images.unsplash.com/photo-1768528355986-5af2329fd005?w=500&h=500&fit=crop&auto=format',
  // Hawaiian style sweet marinated beef
  hawaiian: 'https://images.unsplash.com/photo-1708388066828-af75608c3b2f?w=500&h=500&fit=crop&auto=format',

  /* ── PORK ── */
  // Raw pork belly slices ready for grilling
  porkBelly: 'https://images.unsplash.com/photo-1752555535777-0aed7bc93f98?w=500&h=500&fit=crop&auto=format',
  // Thin pork belly (daepae) - thinly sliced
  thinPorkBelly: 'https://images.unsplash.com/photo-1768203635745-80a591558549?w=500&h=500&fit=crop&auto=format',
  // Thinly sliced raw meat on a black plate (garlic pork belly)
  garlicPork: 'https://images.unsplash.com/photo-1768528353437-eff035141433?w=500&h=500&fit=crop&auto=format',
  // Spicy pork belly - gochujang marinated red
  spicyPork: 'https://images.unsplash.com/photo-1719785046032-20b6470e19e0?w=500&h=500&fit=crop&auto=format',
  // Sizzling pork belly cooking on a grill (moksal)
  porkShoulder: 'https://images.unsplash.com/photo-1767974756540-a9b4ff92c58b?w=500&h=500&fit=crop&auto=format',
  // Delicious pork belly with sesame seeds on a plate
  porkBulgogi: 'https://images.unsplash.com/photo-1749294241404-916a9a7f3d44?w=500&h=500&fit=crop&auto=format',
  // Spare ribs - marinated pork ribs
  spareRib: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&h=500&fit=crop&auto=format',

  /* ── CHICKEN & SEAFOOD ── */
  // Korean chicken wings
  chicken: 'https://plus.unsplash.com/premium_photo-1701109142342-dd587224b967?w=500&h=500&fit=crop&auto=format',
  // Korean spicy chicken wings with dipping sauce
  spicyChicken: 'https://plus.unsplash.com/premium_photo-1701109142323-a1dcb64316e4?w=500&h=500&fit=crop&auto=format',
  // Fried shrimp dish with chili and green peppers
  shrimp: 'https://images.unsplash.com/photo-1771573042846-9f3631a48058?w=500&h=500&fit=crop&auto=format',
  // Cooked squid tentacles and rings on a black plate
  squid: 'https://images.unsplash.com/photo-1762305195844-94479ea6aca4?w=500&h=500&fit=crop&auto=format',
  // Grilled squid skewers on a hot plate
  butterSquid: 'https://images.unsplash.com/photo-1742315035548-32b29b9c5a62?w=500&h=500&fit=crop&auto=format',

  /* ── SIDES & STARTERS ── */
  kimchiPancake: 'https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=500&h=500&fit=crop&auto=format',
  cornCheese: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=500&h=500&fit=crop&auto=format',
  japchae: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=500&h=500&fit=crop&auto=format',
  naengmyun: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=500&fit=crop&auto=format',
  banchan: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=500&h=500&fit=crop&auto=format',
  rice: 'https://images.unsplash.com/photo-1573470571028-a0ca7a723959?w=500&h=500&fit=crop&auto=format',
  steamedEgg: 'https://images.unsplash.com/photo-1628441309764-794e7362f6e6?w=500&h=500&fit=crop&auto=format',
  dumpling: 'https://images.unsplash.com/photo-1560100927-c32f29063ade?w=500&h=500&fit=crop&auto=format',

  /* ── DRINKS ── */
  soju: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=500&fit=crop&auto=format',
  cocktail: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=500&fit=crop&auto=format',
  beer: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=500&fit=crop&auto=format',
  wine: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=500&fit=crop&auto=format',
  mocktail: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&h=500&fit=crop&auto=format',

  /* ── HERO BANNERS ── */
  bbqSpread: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=1920&q=85&auto=format',
  grillFire: 'https://images.unsplash.com/photo-1558030006-450675393462?w=1920&q=85&auto=format',
  comboPlatter: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1920&q=85&auto=format',
  barDrinks: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=85&auto=format',
  sidesSpread: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1920&q=85&auto=format',
};

/* ───── Category Hero Images ───── */
export const categoryHeroImages: Record<string, string> = {
  ayce: img.grillFire,
  combo: img.comboPlatter,
  sides: img.sidesSpread,
  drinks: img.barDrinks,
};

export const menuSections: MenuSection[] = [
  {
    id: 'ayce',
    heading: 'All You Can Eat',
    heroImage: img.grillFire,
    categories: [
      {
        title: 'Beef',
        note: 'All beef is Halal-certified',
        items: [
          { name: 'Beef Brisket', desc: 'Thinly sliced, unmarinated', tag: 'popular', image: img.chadol },
          { name: 'Beef Bulgogi', desc: 'Soy garlic marinated rib eye', image: img.bulgogi },
          { name: 'Spicy Beef Bulgogi', desc: 'Gochujang chili marinated', image: img.spicyBeef },
          { name: 'Hawaiian Beef Bulgogi', desc: 'Sweet tropical pineapple marinade', image: img.hawaiian },
          { name: 'Khan Steak', desc: 'Signature thick-cut steak', tag: 'popular', image: img.steak, tier: 'dinner' },
          { name: 'Galbi', desc: 'Marinated beef short rib', note: 'Premium', tag: 'popular', image: img.galbi, tier: 'premium' },
          { name: "Butcher's Cut", desc: 'Chef\u2019s daily selection', note: 'Premium', image: img.butcherCut, tier: 'premium' },
          { name: 'Cube Steak', desc: 'Premium cubed cuts', note: 'Premium', image: img.cubeSteak, tier: 'premium' },
        ],
      },
      {
        title: 'Pork',
        items: [
          { name: 'Pork Belly', desc: 'Thick-cut samgyeopsal', tag: 'popular', image: img.porkBelly },
          { name: 'Thin Pork Belly', desc: 'Daepae samgyeopsal', image: img.thinPorkBelly },
          { name: 'Garlic Pork Belly', desc: 'Garlic-infused thick cut', image: img.garlicPork },
          { name: 'Spicy Pork Belly', desc: 'Gochujang marinated', image: img.spicyPork },
          { name: 'Pork Shoulder', desc: 'Moksal, tender and juicy', image: img.porkShoulder },
          { name: 'Soy Pork Bulgogi', desc: 'Sweet soy garlic marinade', image: img.porkBulgogi },
          { name: 'Spicy Pork Bulgogi', desc: 'Gochujang marinade', image: img.spicyPork },
          { name: 'Soy Pork Spare Rib', desc: 'Sweet soy marinated ribs', image: img.spareRib },
          { name: 'Spicy Pork Spare Rib', desc: 'Spicy chili marinated ribs', image: img.spareRib },
        ],
      },
      {
        title: 'Chicken & Seafood',
        note: 'All chicken is Halal-certified',
        items: [
          { name: 'Soy Chicken', desc: 'Sweet soy garlic marinated', image: img.chicken },
          { name: 'Spicy Chicken', desc: 'Gochujang chili marinated', image: img.spicyChicken },
          { name: 'Shrimp', desc: 'Seasoned prawns', note: 'Premium', image: img.shrimp, tier: 'premium' },
          { name: 'Spicy Squid', desc: 'Gochujang marinated calamari', note: 'Premium', image: img.squid, tier: 'premium' },
          { name: 'Butter Squid', desc: 'Garlic butter calamari', note: 'Premium', image: img.butterSquid, tier: 'premium' },
        ],
      },
    ],
  },
  {
    id: 'combo',
    heading: 'Combo Platters',
    heroImage: img.comboPlatter,
    categories: [
      {
        title: 'Experience Combo',
        subtitle: '$78',
        note: 'Serves 2',
        items: [
          { name: 'Pork Belly', desc: 'Unmarinated thick-cut' },
          { name: 'Beef Brisket', desc: 'Thinly sliced' },
          { name: 'Galbi', desc: 'Marinated beef short rib' },
          { name: 'Jumuluk', desc: 'Marinated beef short rib steak' },
        ],
      },
      {
        title: 'Signature Combo',
        subtitle: '$105 / $210',
        note: 'Serves 2\u20134',
        items: [
          { name: 'Pork Belly', desc: 'Unmarinated thick-cut' },
          { name: 'Beef Brisket', desc: 'Thinly sliced' },
          { name: 'Spicy Pork Bulgogi', desc: 'Spicy sliced pork' },
          { name: 'Kkot Sal', desc: 'Prime boneless short ribs', tag: 'popular' },
          { name: 'Galbi', desc: 'Marinated beef short rib' },
          { name: 'Jumuluk', desc: 'Marinated beef short rib steak' },
        ],
      },
      {
        title: "Emperor's Combo",
        subtitle: '$240',
        note: 'Serves 4\u20136',
        items: [
          { name: 'Pork Belly', desc: 'Unmarinated thick-cut' },
          { name: 'Beef Brisket', desc: 'Thinly sliced' },
          { name: 'Pork Galbi', desc: 'Soy garlic pork short rib' },
          { name: 'Kkot Sal', desc: 'Prime boneless short ribs' },
          { name: 'Saeng Galbi', desc: 'Unmarinated beef short rib' },
          { name: 'Galbi', desc: 'Marinated beef short rib' },
          { name: 'Kkot Deungsim', desc: 'Prime ribeye', tag: 'popular' },
        ],
      },
      {
        title: 'Premium Beef Combo',
        subtitle: '$109 / $210',
        note: 'Serves 2\u20134',
        items: [
          { name: 'Beef Brisket', desc: 'Thinly sliced' },
          { name: 'Beef Bulgogi', desc: 'Soy garlic sliced rib eye' },
          { name: 'Galbi', desc: 'Marinated beef short rib' },
          { name: 'Kkot Deungsim', desc: 'Prime ribeye' },
          { name: 'Jumuluk', desc: 'Marinated beef short rib steak' },
        ],
      },
    ],
  },
  {
    id: 'sides',
    heading: 'Sides & Starters',
    heroImage: img.sidesSpread,
    categories: [
      {
        title: 'Appetizers',
        items: [
          { name: 'Kimchi Pancake', desc: 'Crispy kimchi jeon', image: img.kimchiPancake },
          { name: 'Seafood Pancake', desc: 'Haemul pajeon' },
          { name: 'Sodduk', desc: 'Rice cake & sausage skewer' },
          { name: 'French Fries' },
          { name: 'Mozzarella Sticks' },
          { name: 'Fried Shrimp' },
          { name: 'Takoyaki', desc: 'Japanese octopus balls' },
        ],
      },
      {
        title: 'AYCE Sides',
        subtitle: 'Included with AYCE',
        items: [
          { name: 'Rice', image: img.rice },
          { name: 'Tortilla' },
          { name: 'Soybean Soup' },
          { name: 'Steamed Egg', image: img.steamedEgg },
          { name: 'Corn Cheese', tag: 'popular', image: img.cornCheese },
          { name: 'Popcorn Chicken' },
          { name: 'Spicy Rice Cake', desc: 'Tteokbokki' },
          { name: 'Assorted Vegetables' },
          { name: 'Dumpling', image: img.dumpling },
          { name: 'Japchae', desc: 'Glass noodle stir-fry', image: img.japchae },
          { name: 'Buldak', desc: 'Fire chicken' },
          { name: 'Buldak Carbonara', desc: 'Creamy fire chicken' },
          { name: 'Korean Ramen' },
        ],
      },
      {
        title: 'Noodles',
        items: [
          { name: 'Mul Naengmyun', desc: 'Cold buckwheat noodle soup', image: img.naengmyun },
          { name: 'Bibim Naengmyun', desc: 'Spicy cold noodles' },
        ],
      },
    ],
  },
  {
    id: 'drinks',
    heading: 'Bar & Drinks',
    heroImage: img.barDrinks,
    categories: [
      {
        title: 'Draft Beer',
        items: [
          { name: 'Miller Light', prices: [{ label: 'Glass', price: '$4' }, { label: 'Tower', price: '$25' }] },
          { name: 'Blue Moon', prices: [{ label: 'Glass', price: '$6' }, { label: 'Tower', price: '$30' }] },
          { name: 'Sapporo', prices: [{ label: 'Glass', price: '$6' }, { label: 'Tower', price: '$30' }] },
          { name: 'Samuel Adams', prices: [{ label: 'Glass', price: '$6' }, { label: 'Tower', price: '$30' }] },
        ],
      },
      {
        title: 'Imported Beer',
        subtitle: '$6 each',
        items: [
          { name: 'Terra' }, { name: 'Asahi' }, { name: 'Heineken' },
          { name: 'Corona' }, { name: 'Modelo Especial' }, { name: 'Allagash White' },
        ],
      },
      {
        title: 'Domestic Beer',
        items: [
          { name: 'Coors Light', price: '$4' }, { name: 'Yuengling', price: '$4' },
          { name: 'Angry Orchard', price: '$6' }, { name: 'Lagunitas', price: '$6' },
          { name: 'Sierra Nevada', price: '$6' }, { name: 'Voodoo Ranger IPA', price: '$6' },
        ],
      },
      {
        title: 'Soju',
        subtitle: '$15',
        items: [
          { name: 'Chamisul Fresh' }, { name: 'Jinro Is Back' }, { name: 'Chum Churum' },
        ],
      },
      {
        title: 'Flavored Soju',
        subtitle: '$15',
        items: [
          { name: 'Peach' }, { name: 'Plum' }, { name: 'Strawberry' },
          { name: 'Green Apple' }, { name: 'Green Grape' }, { name: 'Grapefruit' },
        ],
      },
      {
        title: 'Cocktail Soju',
        subtitle: '$15',
        items: [
          { name: 'Mango Soju' }, { name: 'Lychee Soju' },
          { name: 'Yogurt Soju' }, { name: 'Pineapple Soju' },
        ],
      },
      {
        title: 'Popsicle Soju',
        subtitle: '$10',
        items: [
          { name: 'Melona Soju' }, { name: 'Screwbar Soju' },
          { name: 'Jawsbar Soju' }, { name: 'Polapo Soju' },
        ],
      },
      {
        title: 'Wine',
        items: [
          { name: 'Pinot Noir', price: '$9', desc: 'Red' },
          { name: 'Cabernet Sauvignon', price: '$9', desc: 'Red' },
          { name: 'Sauvignon Blanc', price: '$9', desc: 'White' },
          { name: 'Chardonnay', price: '$12', desc: 'White' },
          { name: 'Riesling', price: '$14', desc: 'White' },
        ],
      },
      {
        title: 'Cocktails',
        items: [
          { name: 'Malibu Sunset', price: '$13', desc: 'Coconut rum, cranberry, pineapple' },
          { name: 'Blue Hawaiian', price: '$13', desc: 'Coconut rum, blue curacao, pineapple' },
          { name: 'Mango Pineapple', price: '$13', desc: 'Mango, coconut rum, pineapple rum' },
          { name: 'Margarita', price: '$11', desc: 'Tequila, triple sec, lime' },
          { name: 'Mojito', price: '$15', desc: 'Rum, fresh mint, lime' },
          { name: 'Pineapple Mojito', price: '$15', desc: 'Rum, mint, lime, pineapple' },
          { name: 'Mango Mojito', price: '$15', desc: 'Rum, mango, mint, lime' },
          { name: 'Greentea Shot', price: '$6', desc: 'Jameson, peach schnapps, sour mix' },
          { name: 'Martini', price: '$12', desc: 'Vodka or gin, vermouth' },
          { name: 'Long Island', price: '$13', desc: 'Vodka, rum, gin, tequila, triple sec' },
          { name: 'Moscow Mule', price: '$13', desc: 'Vodka, ginger beer, lime' },
          { name: 'Apple Mule', price: '$13', desc: 'Crown Royal Apple, ginger beer, lime' },
          { name: 'Tequila Sunrise', price: '$11', desc: 'Tequila, OJ, grenadine' },
          { name: 'Strawberry Margarita', price: '$11', desc: 'Tequila, strawberry, triple sec' },
        ],
      },
      {
        title: 'Mocktails',
        subtitle: '$7 each',
        items: [
          { name: 'Virgin Mojito', desc: 'Mint, lime, soda' },
          { name: 'Tropical Twister', desc: 'Pineapple, mango, lime' },
          { name: 'Strawberry-Mango', desc: 'Strawberry, mango, yogurt' },
          { name: 'Cran-dandy Cooler', desc: 'Cranberry, pineapple, OJ' },
          { name: 'Virgin Margarita', desc: 'Sour mix, lime, soda' },
          { name: 'Strawberry Sunshine', desc: 'Strawberry, lemon, ginger ale' },
          { name: 'Pink Champagne', desc: 'Cranberry, pineapple, OJ' },
          { name: 'Mock Mule', desc: 'Ginger beer, lime, soda' },
        ],
      },
      {
        title: 'Beverages',
        items: [
          { name: 'Soda', price: '$3', desc: 'Coke, Diet Coke, Sprite, Ginger Ale, Fanta, Dr Pepper' },
          { name: 'Shirley Temple', price: '$4' },
          { name: 'Apple Juice', price: '$4' },
          { name: 'Orange Juice', price: '$4' },
          { name: 'Perrier', price: '$4' },
        ],
      },
    ],
  },
];

export const lunchCombos = [
  'Galbi + Mul Naengmyun',
  'Galbi + Bibim Naengmyun',
  'Galbi + Doenjang Jjigae',
  'Galbitang',
  'Yukgaejang',
];

/* AYCE pricing tiers */
export const aycePricing = [
  { tier: 'Lunch', price: '$25', time: '90 min', note: 'All meats listed under Beef, Pork, Chicken' },
  { tier: 'Dinner', price: '$34', time: '90 min', note: 'Lunch items + Khan Steak' },
  { tier: 'Premium', price: '$39', time: '90 min', note: 'Dinner items + Galbi, Butcher\u2019s Cut, Cube Steak, Seafood' },
];
