import { Label as RadixLabel } from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';

const labelVariants = cva('block text-sm font-medium text-gray-700');

export const Label = ({ children, className, ...props }) => (
  <RadixLabel className={labelVariants({ className })} {...props}>
    {children}
  </RadixLabel>
);
