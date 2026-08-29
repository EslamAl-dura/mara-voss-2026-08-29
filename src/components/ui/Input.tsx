import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => <input ref={ref} className={cn('w-full rounded-xl border border-ink/20 bg-transparent px-4 py-3 outline-none transition focus:border-ember', className)} {...props} />);
Input.displayName = 'Input';