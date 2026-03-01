import { Switch as RadixSwitch } from '@radix-ui/react-switch';

export const Switch = ({ checked, onCheckedChange, className }) => (
  <RadixSwitch checked={checked} onCheckedChange={onCheckedChange} className={cn('bg-blue-500 rounded-md', className)} />
);
