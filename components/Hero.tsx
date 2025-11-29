'use client';

import Link from 'next/link';

export default function Hero() {
  const whatsappNumber = '923001234567'; // Dummy number
  const whatsappMessage = encodeURIComponent('Hi, I want to order from QuantumTech.');

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-quantum-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-quantum-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        <p className="text-quantum-primary text-xs sm:text-sm font-medium mb-2 sm:mb-4 uppercase tracking-wider">
          Next-gen gadgets. trusted, delivered.
        </p>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
          Power up your world with{' '}
          <span className="text-quantum-primary">QuantumTech</span>.
        </h1>
        
        <p className="text-quantum-textMuted text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Curated smart tech products that enhance your daily life. Quality gadgets, trusted suppliers, delivered to your door.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2">
          <Link
            href="/products"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-quantum-primary to-cyan-400 text-quantum-bg font-semibold rounded-xl hover:shadow-lg hover:shadow-quantum-primary/50 transition-all duration-300 text-center"
          >
            Browse Featured Tech
          </Link>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-quantum-primary text-quantum-primary font-semibold rounded-xl hover:bg-quantum-primary/10 transition-all duration-300 text-center"
          >
            Order on WhatsApp
          </a>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-quantum-bgAlt/80 backdrop-blur-sm border border-quantum-border rounded-full text-xs sm:text-sm text-quantum-textMuted">
            ⚡ Local suppliers
          </span>
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-quantum-bgAlt/80 backdrop-blur-sm border border-quantum-border rounded-full text-xs sm:text-sm text-quantum-textMuted">
            📦 Cash on delivery
          </span>
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-quantum-bgAlt/80 backdrop-blur-sm border border-quantum-border rounded-full text-xs sm:text-sm text-quantum-textMuted">
            ✅ Products checked before listing
          </span>
        </div>
      </div>
    </section>
  );
}
