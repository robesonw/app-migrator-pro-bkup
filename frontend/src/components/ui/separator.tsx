import { Separator as RadixSeparator } from '@radix-ui/react-separator';

export const Separator = ({ className }) => (
  <RadixSeparator className={cn('h-px bg-gray-200', className)} />
);
