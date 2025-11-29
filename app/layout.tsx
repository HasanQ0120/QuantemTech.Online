import '../styles/globals.css';
import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'QuantumTech Store',
  description: 'Futuristic tech gadgets and accessories',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-quantum-bg text-quantum-text min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
