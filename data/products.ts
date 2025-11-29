export type ProductCategory = 'smartwatch' | 'audio' | 'power' | 'lighting' | 'accessory';

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  oldPrice?: number;
  category: ProductCategory;
  tags: string[];
  inStock: boolean;
  badge?: string;
  image?: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'quantumfit-neo-smartwatch',
    name: 'QuantumFit Neo Smartwatch',
    shortDescription: 'Advanced fitness tracking with heart rate monitor and 7-day battery life.',
    longDescription: 'The QuantumFit Neo Smartwatch is your ultimate fitness companion. Features include real-time heart rate monitoring, step counting, sleep tracking, and 20+ sports modes. With a vibrant 1.4" AMOLED display, water resistance up to 5ATM, and a sleek design that works for both workouts and daily wear. Stay connected with call notifications, music control, and weather updates right on your wrist.',
    price: 8499,
    oldPrice: 9999,
    category: 'smartwatch',
    tags: ['fitness', 'health', 'smartwatch', 'waterproof'],
    inStock: true,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
  },
  {
    id: '2',
    slug: 'quantumpods-air-tws',
    name: 'QuantumPods Air TWS',
    shortDescription: 'Premium wireless earbuds with active noise cancellation and 30hr battery.',
    longDescription: 'Experience crystal-clear audio with the QuantumPods Air TWS. Featuring active noise cancellation (ANC) technology, these earbuds block out ambient noise so you can focus on your music. With 30 hours of total battery life (including charging case), quick charge support, and IPX5 water resistance. The ergonomic design ensures a comfortable fit for hours of listening.',
    price: 4999,
    oldPrice: 6499,
    category: 'audio',
    tags: ['wireless', 'anc', 'audio', 'bluetooth'],
    inStock: true,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800',
  },
  {
    id: '4',
    slug: 'neonglow-rgb-led-strip',
    name: 'NeonGlow RGB LED Strip',
    shortDescription: 'Smart RGB LED strip with app control, music sync, and 16.4 million colors.',
    longDescription: 'Transform your space with the NeonGlow RGB LED Strip. Control 16.4 million colors via smartphone app, sync with music for dynamic lighting effects, and set schedules for automated ambiance. Waterproof IP65 rating makes it suitable for both indoor and outdoor use. Easy installation with adhesive backing and flexible design that fits any space.',
    price: 2499,
    oldPrice: 2999,
    category: 'lighting',
    tags: ['rgb', 'smart', 'led', 'app-controlled'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800',
  },
  {
    id: '5',
    slug: 'quantumbass-gaming-headset',
    name: 'QuantumBass Gaming Headset',
    shortDescription: '7.1 surround sound gaming headset with RGB lighting and noise-cancelling mic.',
    longDescription: 'Dominate your games with the QuantumBass Gaming Headset. Features 7.1 virtual surround sound for immersive audio, RGB lighting effects, and a detachable noise-cancelling microphone. Comfortable over-ear design with memory foam padding for long gaming sessions. Compatible with PC, PlayStation, Xbox, and mobile devices.',
    price: 5999,
    category: 'audio',
    tags: ['gaming', 'headset', 'rgb', 'surround-sound'],
    inStock: true,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=800',
  },
  {
    id: '6',
    slug: 'quantumdock-multi-charging-hub',
    name: 'QuantumDock Multi Charging Hub',
    shortDescription: '6-in-1 charging station for all your devices with fast charging support.',
    longDescription: 'Organize and charge all your devices with the QuantumDock Multi Charging Hub. This 6-in-1 station includes ports for smartphones, tablets, smartwatches, and wireless earbuds. Features fast charging support, LED indicators, and a sleek design that keeps your desk clutter-free. Perfect for home or office use.',
    price: 3999,
    category: 'power',
    tags: ['charging', 'hub', 'organizer', 'multi-device'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800',
  },
  {
    id: '7',
    slug: 'quantumtrack-smart-tag',
    name: 'QuantumTrack Smart Tag',
    shortDescription: 'Bluetooth tracker to find your keys, wallet, and belongings instantly.',
    longDescription: 'Never lose your belongings again with the QuantumTrack Smart Tag. Use the companion app to ring your tag, see its last known location, and get separation alerts. Waterproof design, replaceable battery, and loud speaker for easy finding. Works with both iOS and Android devices.',
    price: 1499,
    category: 'accessory',
    tags: ['tracker', 'bluetooth', 'find-my', 'accessory'],
    inStock: true,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800',
  },
  {
    id: '8',
    slug: 'quantumgrip-car-mobile-holder',
    name: 'QuantumGrip Car Mobile Holder',
    shortDescription: 'Magnetic car mount with strong grip and 360° rotation for perfect viewing angle.',
    longDescription: 'Keep your phone secure and accessible while driving with the QuantumGrip Car Mobile Holder. Features powerful magnetic attachment, 360° rotation for optimal viewing angles, and one-hand operation. Compatible with all phone sizes, including phones with cases. Vent mount design that fits most car air vents without tools.',
    price: 1299,
    category: 'accessory',
    tags: ['car', 'mount', 'magnetic', 'accessory'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  },
  {
    id: '9',
    slug: 'quantumlight-desk-lamp',
    name: 'QuantumLight Desk Lamp',
    shortDescription: 'Smart desk lamp with adjustable brightness, color temperature, and USB charging port.',
    longDescription: 'Illuminate your workspace with the QuantumLight Desk Lamp. Features adjustable brightness levels, color temperature control (warm to cool white), touch controls, and a built-in USB charging port. Modern minimalist design with flexible gooseneck for perfect positioning. Perfect for studying, working, or reading.',
    price: 2799,
    category: 'lighting',
    tags: ['lamp', 'desk', 'smart', 'adjustable'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
  },
  {
    id: '10',
    slug: 'quantumlink-usb-c-hub',
    name: 'QuantumLink USB-C Hub',
    shortDescription: '7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and PD charging.',
    longDescription: 'Expand your laptop connectivity with the QuantumLink USB-C Hub. Features include HDMI output (4K@60Hz), 3x USB 3.0 ports, SD/TF card readers, USB-C PD charging pass-through, and Gigabit Ethernet. Compact aluminum design that matches your MacBook or Windows laptop. Perfect for professionals and creators.',
    price: 4499,
    category: 'accessory',
    tags: ['hub', 'usb-c', 'hdmi', 'adapter'],
    inStock: true,
    badge: 'Limited',
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts(count: number = 4): Product[] {
  return products.filter((p) => p.badge).slice(0, count);
}
