import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => <button ref={ref} className={cn('inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-1 disabled:opacity-50', className)} {...props} />);
Button.displayName = 'Button';