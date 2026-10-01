export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'suits' | 'blazers' | 'shirts' | 'trousers' | 't-shirts' | 'hoodies' | 'jackets' | 'overshirts' | 'knitwear' | 'accessories';
  price: number;
  currency: string;
  colors: ProductColor[];
  sizes: string[];
  images: string[];
  description: string;
  material: string;
  fit: string;
  featured?: boolean;
  isNew?: boolean;
  badge?: string;
  rating?: number;
  reviewCount?: number;
  careInstructions?: string;
  shippingInfo?: string;
}

export interface Look {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  name: string;
  price: number;
  image: string;
  products: Product[];
  description: string;
}

export interface LookbookHotspot {
  id: string;
  productId: string;
  x: number; // percentage
  y: number; // percentage
  productName: string;
  productPrice: number;
}

export interface LookbookSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  hotspots: LookbookHotspot[];
}

export interface CartItem {
  id: string; // unique cart item id (productId + color + size)
  product: Product;
  selectedColor: ProductColor;
  selectedSize: string;
  quantity: number;
}

export interface LandingPageInfo {
  slug: string;
  category: string;
  title: string;
  description: string;
  theme: string;
  dataset: string;
  previewImage: string;
}
