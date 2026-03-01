import { cva } from 'class-variance-authority';

export const badgeVariants = cva('inline-flex items-center rounded-full px-2 text-sm font-medium', {
  variants: {
    variant: {
      default: 'bg-blue-500 text-white',
      secondary: 'bg-gray-500 text-white',
    },
  },
});

export const Badge = ({ variant, children, className }) => (
  <span className={cn(badgeVariants({ variant }), className)}>{children}</span>
);
