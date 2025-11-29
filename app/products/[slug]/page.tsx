import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug } from '@/data/products';
import Badge from '@/components/Badge';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const whatsappNumber = '923001234567';
  const whatsappMessage = encodeURIComponent(
    `Hi, I want to order ${product.name} from QuantumTech.`
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link
        href="/products"
        className="inline-flex items-center text-quantum-textMuted hover:text-quantum-primary transition-colors mb-8"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
        Back to products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="w-full">
          <div className="aspect-square bg-gradient-to-br from-quantum-primary/20 to-quantum-secondary/20 rounded-2xl overflow-hidden">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-quantum-textMuted">
                No Image Available
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            {product.badge && (
              <div className="mb-4">
                <Badge text={product.badge} />
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-quantum-textMuted text-lg">{product.shortDescription}</p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-quantum-primary">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-2xl text-quantum-textMuted line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${
                product.inStock ? 'bg-green-500' : 'bg-quantum-error'
              }`}
            ></div>
            <span className="text-quantum-textMuted">
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-bold mb-3">Description</h2>
            <p className="text-quantum-textMuted leading-relaxed">{product.longDescription}</p>
          </div>

          {/* Tags */}
          {product.tags.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-3">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-quantum-border rounded-lg text-quantum-textMuted text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Category */}
          <div>
            <span className="text-quantum-textMuted">Category: </span>
            <span className="text-quantum-primary font-medium capitalize">
              {product.category}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-8 py-4 bg-gradient-to-r from-quantum-primary to-cyan-400 text-quantum-bg font-semibold rounded-xl hover:shadow-lg hover:shadow-quantum-primary/50 transition-all duration-300 text-center"
            >
              Order on WhatsApp
            </a>
            <Link
              href="/products"
              className="flex-1 px-8 py-4 border-2 border-quantum-border text-quantum-text font-semibold rounded-xl hover:bg-quantum-bgAlt transition-all duration-300 text-center"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}





