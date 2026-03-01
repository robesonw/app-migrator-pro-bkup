import React from 'react';
import { Slot } from '@radix-ui/react-slot';

const Button = React.forwardRef(({ asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp ref={ref} {...props} />;
});

export { Button };