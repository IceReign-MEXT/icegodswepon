import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'gold';
  size?: 'default' | 'sm' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
          variant === 'default' && 'bg-cyan-600 text-white hover:bg-cyan-700',
          variant === 'outline' && 'border border-white/20 bg-transparent hover:bg-white/10',
          variant === 'ghost' && 'hover:bg-white/10',
          variant === 'gold' && 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold hover:opacity-90',
          size === 'default' && 'h-10 px-4 py-2',
          size === 'sm' && 'h-8 px-3 text-sm',
          size === 'lg' && 'h-12 px-6 text-lg',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
export { Button };
