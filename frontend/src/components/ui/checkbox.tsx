import { Checkbox as RadixCheckbox } from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

export const Checkbox = ({ checked, onCheckedChange, className }) => (
  <RadixCheckbox checked={checked} onCheckedChange={onCheckedChange} className={cn('border-gray-300', className)}>
    <Check className="w-4 h-4 text-blue-500" />
  </RadixCheckbox>
);
