import { Tabs as RadixTabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';

export const Tabs = ({ children }) => <RadixTabs>{children}</RadixTabs>;
export const TabsList = ({ children }) => <TabsList>{children}</TabsList>;
export const TabsTrigger = ({ children }) => <TabsTrigger>{children}</TabsTrigger>;
export const TabsContent = ({ children }) => <TabsContent>{children}</TabsContent>;
