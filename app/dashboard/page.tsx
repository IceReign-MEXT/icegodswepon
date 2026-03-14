'use client';

import { useSession } from 'next-auth/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { 
  TrendingUp, 
  Wallet, 
  Bot, 
  Users, 
  Zap, 
  Shield, 
  ArrowUpRight,
  Bell
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session } = useSession();
  const { publicKey } = useWallet();
  const [stats, setStats] = useState({
    balance: 12.5,
    earnings: 2847.50,
    botsActive: 8,
    signals: 156,
    referrals: 23,
    nextPayout: '2 days',
  });

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-400">Welcome back, {session?.user?.name || 'Trader'}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="glass px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-400">Tier: </span>
              <span className="text-cyan-400 font-semibold">{session?.user?.subscriptionTier || 'FREE'}</span>
            </div>
            <Button size="sm" variant="outline">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Wallet className="w-5 h-5 text-cyan-400" />
                <span className="text-xs text-emerald-400">+12%</span>
              </div>
              <div className="text-2xl font-bold">{stats.balance} SOL</div>
              <div className="text-xs text-gray-400">Balance</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold">${stats.earnings}</div>
              <div className="text-xs text-gray-400">Total Earnings</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Bot className="w-5 h-5 text-purple-400" />
                <span className="text-xs text-emerald-400">Active</span>
              </div>
              <div className="text-2xl font-bold">{stats.botsActive}/12</div>
              <div className="text-xs text-gray-400">Bots Active</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-5 h-5 text-pink-400" />
                <span className="text-xs text-gray-400">Next: {stats.nextPayout}</span>
              </div>
              <div className="text-2xl font-bold">{stats.referrals}</div>
              <div className="text-xs text-gray-400">Referrals</div>
            </CardContent>
          </Card>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT - ACTIVITY */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Recent Signals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { token: 'BONK', action: 'BUY', price: '0.000012', time: '2m ago', profit: '+15%' },
                    { token: 'WIF', action: 'SELL', price: '2.45', time: '5m ago', profit: '+8%' },
                    { token: 'POPCAT', action: 'HOLD', price: '0.89', time: '12m ago', profit: '+23%' },
                  ].map((signal, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${signal.action === 'BUY' ? 'bg-emerald-400' : signal.action === 'SELL' ? 'bg-red-400' : 'bg-yellow-400'}`} />
                        <div>
                          <div className="font-semibold">{signal.token}</div>
                          <div className="text-xs text-gray-400">{signal.action} @ ${signal.price}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-400 font-semibold">{signal.profit}</div>
                        <div className="text-xs text-gray-400">{signal.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  MEV Protection Log
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { type: 'Sandwich Attack', status: 'Blocked', saved: '0.5 SOL', time: '1m ago' },
                    { type: 'Frontrun Attempt', status: 'Detected', saved: '0.2 SOL', time: '5m ago' },
                    { type: 'Arbitrage Bot', status: 'Allowed', saved: '0 SOL', time: '12m ago' },
                  ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between text-sm p-2 hover:bg-white/5 rounded">
                      <span className="text-gray-300">{log.type}</span>
                      <span className={log.status === 'Blocked' ? 'text-red-400' : log.status === 'Detected' ? 'text-yellow-400' : 'text-emerald-400'}>
                        {log.status}
                      </span>
                      <span className="text-emerald-400">{log.saved}</span>
                      <span className="text-gray-500 text-xs">{log.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT - SIDEBAR */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/creator/upload">
                  <Button className="w-full">Upload Signal</Button>
                </Link>
                <Link href="/subscription">
                  <Button variant="outline" className="w-full">Upgrade Plan</Button>
                </Link>
                <Button variant="ghost" className="w-full">Withdraw Earnings</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-gray-400 mb-2">Connected:</div>
                <div className="font-mono text-sm text-cyan-400 break-all">
                  {publicKey?.toBase58() || 'Not connected'}
                </div>
                <div className="mt-4 text-xs text-gray-400">
                  Platform: 8dtu...Hbxy
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold mb-1">Refer & Earn</div>
                <div className="text-sm text-gray-400 mb-4">20% of referral fees</div>
                <div className="text-xs font-mono bg-black/30 p-2 rounded break-all">
                  https://icegods.vercel.app/ref/{session?.user?.id || 'your-id'}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
