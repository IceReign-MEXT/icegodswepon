import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { name, email, username, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = await prisma.user.create({
      data: { 
        name, 
        email, 
        username, 
        password: hashedPassword,
        subscriptionTier: 'FREE'
      }
    });

    return NextResponse.json({ 
      id: user.id, 
      email: user.email,
      message: 'Account created. Welcome to ICEGODS!' 
    }, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Email or username already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
