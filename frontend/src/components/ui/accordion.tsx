import { Accordion as RadixAccordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export const Accordion = ({ children }) => (
  <RadixAccordion type="single" collapsible>{children}</RadixAccordion>
);

export const AccordionItem = ({ value, children }) => <RadixAccordion.Item value={value}>{children}</RadixAccordion.Item>;
export const AccordionTrigger = ({ children }) => (
  <RadixAccordion.Header>
    <RadixAccordion.Trigger>{children}<ChevronDown className="inline ml-2" /></RadixAccordion.Trigger>
  </RadixAccordion.Header>
);
export const AccordionContent = ({ children }) => <RadixAccordion.Content>{children}</RadixAccordion.Content>;
