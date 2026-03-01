import { Select as RadixSelect, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton } from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';

export const Select = ({ children }) => <RadixSelect>{children}</RadixSelect>;
export const SelectGroup = ({ children }) => <SelectGroup>{children}</SelectGroup>;
export const SelectValue = ({ value }) => <SelectValue>{value}</SelectValue>;
export const SelectTrigger = ({ children }) => (
  <SelectTrigger>
    {children}
    <ChevronDown className="ml-2" />
  </SelectTrigger>
);
export const SelectContent = ({ children }) => <SelectContent>{children}</SelectContent>;
export const SelectLabel = ({ children }) => <SelectLabel>{children}</SelectLabel>;
export const SelectItem = ({ value, children }) => (
  <SelectItem value={value}>
    {children}
    <Check className="ml-2" />
  </SelectItem>
);
export const SelectSeparator = () => <SelectSeparator />;
export const SelectScrollUpButton = () => <SelectScrollUpButton />;
export const SelectScrollDownButton = () => <SelectScrollDownButton />;
