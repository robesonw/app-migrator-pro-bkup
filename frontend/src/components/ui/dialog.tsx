import { Dialog as RadixDialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export const Dialog = ({ children }) => <RadixDialog>{children}</RadixDialog>;
export const DialogPortal = ({ children }) => <DialogPortal>{children}</DialogPortal>;
export const DialogOverlay = ({ children }) => <DialogOverlay>{children}</DialogOverlay>;
export const DialogClose = ({ children }) => <DialogClose>{children}<X /></DialogClose>;
export const DialogTrigger = ({ children }) => <DialogTrigger>{children}</DialogTrigger>;
export const DialogContent = ({ children }) => <DialogContent>{children}</DialogContent>;
export const DialogHeader = ({ children }) => <DialogHeader>{children}</DialogHeader>;
export const DialogFooter = ({ children }) => <DialogFooter>{children}</DialogFooter>;
export const DialogTitle = ({ children }) => <DialogTitle>{children}</DialogTitle>;
export const DialogDescription = ({ children }) => <DialogDescription>{children}</DialogDescription>;
