import { Tooltip as RadixTooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@radix-ui/react-tooltip';

export const Tooltip = ({ children }) => <RadixTooltip>{children}</RadixTooltip>;
export const TooltipTrigger = ({ children }) => <TooltipTrigger>{children}</TooltipTrigger>;
export const TooltipContent = ({ children }) => <TooltipContent>{children}</TooltipContent>;
export const TooltipProvider = ({ children }) => <TooltipProvider>{children}</TooltipProvider>;
