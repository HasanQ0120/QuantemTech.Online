'use client';

import { useState } from 'react';
import { products, ProductCategory } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

const categories: { value: ProductCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Products' },
  { value: 'smartwatch', label: 'Smartwatches' },
  { value: 'audio', label: 'Audio' },
  { value: 'power', label: 'Power' },
  { value: 'lighting', label: 'Lighting' },
  { value: 'accessory', label: 'Accessories' },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">All Tech Drops</h1>
        <p className="text-quantum-textMuted text-sm sm:text-base">
          Explore our complete collection of premium tech gadgets
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm ${
              selectedCategory === category.value
                ? 'bg-quantum-primary text-quantum-bg'
                : 'bg-quantum-bgAlt border border-quantum-border text-quantum-textMuted hover:border-quantum-primary/50'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <ProductGrid products={filteredProducts} />
    </div>
  );
}




