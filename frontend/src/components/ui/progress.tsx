import { Progress as RadixProgress } from '@radix-ui/react-progress';

export const Progress = ({ value, className }) => (
  <RadixProgress className={cn('h-2 bg-blue-500', className)} value={value} />
);
