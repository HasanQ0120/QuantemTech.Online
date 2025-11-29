import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import { getFeaturedProducts } from '@/data/products';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(4);

  return (
    <div>
      <Hero />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Featured Quantum Drops
          </h2>
          <p className="text-quantum-textMuted text-sm sm:text-base max-w-2xl mx-auto px-2">
            Discover handpicked tech products built for everyday use.
          </p>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </section>
    </div>
  );
}




