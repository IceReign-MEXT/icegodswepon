import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './components/providers';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ICEGODS | Institutional Web3 Intelligence',
  description: 'Professional-grade Solana MEV detection, alpha signals, and automated trading bots. Join the ICEGODS ecosystem.',
  keywords: ['Solana', 'MEV', 'trading bots', 'crypto signals', 'Web3', 'alpha'],
  authors: [{ name: 'ICEGODS', url: 'https://t.me/ICEGODSICEDEVIL' }],
  openGraph: {
    title: 'ICEGODS | Institutional Web3 Intelligence',
    description: 'Professional-grade Solana MEV detection and alpha signals',
    url: 'https://icegodswepon.vercel.app',
    siteName: 'ICEGODS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICEGODS | Institutional Web3 Intelligence',
    description: 'Professional-grade Solana MEV detection and alpha signals',
    creator: '@IceGodsSystems',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-slate-950 text-slate-50`}>
        <Providers>
          {children}
          <Toaster position="top-center" richColors />
        </Providers>
      </body>
    </html>
  );
}
