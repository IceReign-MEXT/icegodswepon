'use client';

import { useSession, signOut } from 'next-auth/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Sparkles, Crown, Bot, Zap } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
  const { data: session } = useSession();
  const { publicKey } = useWallet();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-pulse">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">ICEGODS</span>
            {session?.user?.isPremium && <Crown className="w-4 h-4 text-yellow-400" />}
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/bots" className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
              <Bot className="w-4 h-4" />
              Bots
            </Link>
            <Link href="/subscription" className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
              <Zap className="w-4 h-4" />
              Pricing
            </Link>
            
            {session ? (
              <>
                <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white">Dashboard</Link>
                <Link href="/creator/upload" className="text-sm text-gray-400 hover:text-white">Create</Link>
                <Button variant="ghost" size="sm" onClick={() => signOut()}>Sign Out</Button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm text-gray-400 hover:text-white">Sign In</Link>
                <Link href="/register">
                  <Button size="sm">Get Started</Button>
                </Link>
              </>
            )}
            
            <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 !rounded-lg !font-medium" />
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-white/10">
            <Link href="/bots" className="block py-2 text-gray-400">Bots</Link>
            <Link href="/subscription" className="block py-2 text-gray-400">Pricing</Link>
            {session ? (
              <>
                <Link href="/dashboard" className="block py-2 text-gray-400">Dashboard</Link>
                <button onClick={() => signOut()} className="block py-2 text-gray-400">Sign Out</button>
              </>
            ) : (
              <Link href="/login" className="block py-2 text-gray-400">Sign In</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
