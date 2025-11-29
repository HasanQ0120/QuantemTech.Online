# QuantumTech - Tech Gadgets Store

A modern, minimal e-commerce website built with Next.js, TypeScript, and Tailwind CSS. Features a futuristic black + cyan theme perfect for showcasing tech products.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with Navbar & Footer
│   ├── page.tsx                 # Home page
│   ├── products/
│   │   ├── page.tsx            # Products listing page
│   │   └── [slug]/
│   │       └── page.tsx        # Product detail page
│   └── api/
│       └── products/
│           └── route.ts        # Products API endpoint
├── components/
│   ├── Badge.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   └── WhatsAppFloat.tsx
├── data/
│   └── products.ts             # Product data
├── styles/
│   └── globals.css             # Global styles & Tailwind imports
└── tailwind.config.ts          # Tailwind configuration with custom colors
```

## 🎨 Design System

### Color Palette

- **Background**: `#0B0F14` (quantum-bg)
- **Alt Background**: `#0F172A` (quantum-bgAlt)
- **Primary Accent**: `#00E5FF` (quantum-primary) - Cyan
- **Secondary Accent**: `#7F5AF0` (quantum-secondary) - Purple
- **Text**: `#FFFFFF` (quantum-text)
- **Muted Text**: `#9CA3AF` (quantum-textMuted)
- **Border**: `rgba(148,163,184,0.25)` (quantum-border)
- **Error**: `#EF4444` (quantum-error)

## 🛠️ Features

- ✅ Responsive design (mobile-first)
- ✅ Product listing with category filters
- ✅ Product detail pages
- ✅ WhatsApp integration for orders
- ✅ Modern, minimal UI with dark theme
- ✅ TypeScript for type safety
- ✅ SEO optimized

## 📝 Customization

### Update WhatsApp Number

Edit the `whatsappNumber` variable in:
- `components/Hero.tsx`
- `components/ProductCard.tsx`
- `components/WhatsAppFloat.tsx`
- `app/products/[slug]/page.tsx`

### Add/Edit Products

Edit `data/products.ts` to add or modify products.

### Modify Colors

Update the color values in `tailwind.config.ts` under the `quantum` color palette.

## 🚢 Build for Production

```bash
npm run build
npm start
```

## 📄 License

This is a demo project for QuantumTech brand.





