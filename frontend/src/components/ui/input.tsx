import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Input = forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <input ref={ref} className={cn('border rounded-md p-2', className)} {...rest} />
  );
});

Input.displayName = 'Input';
