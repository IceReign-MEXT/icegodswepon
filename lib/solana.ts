import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

export const HELIUS_RPC = process.env.NEXT_PUBLIC_HELIUS_RPC_URL!;

export function getConnection(): Connection {
  return new Connection(HELIUS_RPC, 'confirmed');
}

export async function getBalance(address: string): Promise<number> {
  const connection = getConnection();
  const publicKey = new PublicKey(address);
  const balance = await connection.getBalance(publicKey);
  return balance / LAMPORTS_PER_SOL;
}

export async function getTokenAccounts(address: string) {
  const connection = getConnection();
  const publicKey = new PublicKey(address);
  return await connection.getParsedTokenAccountsByOwner(publicKey, {
    programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
  });
}

export const PLATFORM_WALLET = process.env.PLATFORM_SOLANA_WALLET || '8dtuyskTtsB78DFDPWZszarvDpedwftKYCoMdZwjHbxy';
