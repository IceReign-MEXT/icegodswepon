'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import { Sparkles, Zap, Shield, TrendingUp, Bot, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { TELEGRAM_BOTS, TELEGRAM_CHANNELS } from '@/lib/telegram';

export default function HomePage() {
  const { connected } = useWallet();

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-purple-950/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Institutional-Grade Web3 Intelligence</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-white">ICE</span>
              <span className="text-gradient">GODS</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional MEV detection, alpha signals, and automated trading bots. 
              The weapon of choice for serious Solana traders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/register">
                <Button size="lg" className="gap-2">
                  Join the Ecosystem
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/subscription">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>

            {/* LIVE STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan-400">$2.4M+</div>
                <div className="text-sm text-gray-400">MEV Extracted</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-3xl font-bold text-purple-400">50K+</div>
                <div className="text-sm text-gray-400">Active Traders</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-3xl font-bold text-pink-400">12</div>
                <div className="text-sm text-gray-400">AI Bots</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-3xl font-bold text-emerald-400">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why ICEGODS?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">MEV Detection</h3>
              <p className="text-gray-400">Real-time sandwich attack detection and frontrunning protection. Stay ahead of the bots.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">12 AI Bots</h3>
              <p className="text-gray-400">Automated trading, security auditing, alpha hunting, and portfolio management.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Security First</h3>
              <p className="text-gray-400">Contract auditing, rug pull detection, and vulnerability scanning before you invest.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOT ARMY */}
      <section className="py-20 px-4 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Bot Army</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            12 specialized bots working 24/7 to protect, analyze, and grow your portfolio
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TELEGRAM_BOTS.map((bot, i) => (
              <motion.a
                key={bot.name}
                href={bot.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-sm mb-1">{bot.name}</h4>
                <p className="text-xs text-gray-500">Click to access →</p>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href={TELEGRAM_CHANNELS[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <Users className="w-5 h-5" />
              Join Main Channel
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to become a GOD?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join {connected ? 'thousands' : '50,000+'} traders using ICEGODS to dominate the Solana ecosystem
          </p>
          <Link href="/subscription">
            <Button size="lg" variant="gold" className="gap-2">
              <Crown className="w-5 h-5" />
              Get GOD Tier Access
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
