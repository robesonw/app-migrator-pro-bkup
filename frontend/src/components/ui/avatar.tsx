import { Avatar as RadixAvatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

export const Avatar = ({ src, alt, className }) => (
  <RadixAvatar className={cn('inline-block rounded-full', className)}>
    <AvatarImage src={src} alt={alt} />
    <AvatarFallback>{alt}</AvatarFallback>
  </RadixAvatar>
);
