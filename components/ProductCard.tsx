import Link from 'next/link';
import { Product } from '@/data/products';
import Badge from './Badge';

interface ProductCardProps {
  product: Product;
}

const buildWhatsAppUrl = (productName: string): string => {
  const whatsappNumber = '923001234567';
  const encodedProductName = encodeURIComponent(productName);
  const message = `Hi, I saw "${encodedProductName}" on QuantumTech and would like to order or ask a question.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
};

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group relative bg-quantum-bgAlt/50 backdrop-blur-sm border border-quantum-border rounded-2xl p-4 sm:p-6 hover:border-quantum-primary/50 hover:shadow-lg hover:shadow-quantum-primary/10 transition-all duration-300">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
          <Badge text={product.badge} />
        </div>
      )}

      {/* Image or Placeholder */}
      <div className="w-full h-40 sm:h-48 rounded-xl mb-3 sm:mb-4 overflow-hidden border border-quantum-border group-hover:border-quantum-primary/50 transition-all duration-300">
        {product.image ? (
          <div className="w-full h-full bg-gradient-to-br from-quantum-primary/20 to-quantum-secondary/20">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-quantum-bg via-quantum-bgAlt to-quantum-primary/10 flex flex-col items-center justify-center text-center px-4 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300">
            <h4 className="text-quantum-primary font-bold text-lg sm:text-xl mb-1 sm:mb-2">
              QuantumTech
            </h4>
            <p className="text-quantum-textMuted text-xs sm:text-sm">
              Premium Tech Gadget
            </p>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2 sm:space-y-3">
        <h3 className="text-lg sm:text-xl font-bold text-quantum-text line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-quantum-textMuted text-xs sm:text-sm line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-xl sm:text-2xl font-bold text-quantum-primary">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-quantum-textMuted line-through text-xs sm:text-sm">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs border border-quantum-border rounded text-quantum-textMuted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
          <a
            href={buildWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${product.name} on WhatsApp`}
            className="w-full sm:flex-1 px-4 py-2.5 sm:py-2 bg-quantum-primary text-quantum-bg font-medium rounded-lg hover:bg-quantum-primary/90 transition-colors text-center text-sm"
          >
            Order on WhatsApp
          </a>
          <Link
            href={`/products/${product.slug}`}
            className="w-full sm:flex-1 px-4 py-2.5 sm:py-2 border border-quantum-border text-quantum-text font-medium rounded-lg hover:bg-quantum-bgAlt transition-colors text-center text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
