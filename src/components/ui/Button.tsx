import { cn } from '@/lib/utils';
import { useRender } from '@base-ui-components/react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonCVA = cva(
  ['px-6 py-2', 'rounded-full', 'text-sm', 'transition-all', 'cursor-pointer'],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-button text-text',
          'hover:bg-primary-button/50',
          'active:bg-primary-button/70',
        ],
        secondary: [
          'bg-secondary-button text-text',
          'hover:bg-secondary-button/50',
          'active:bg-secondary-button/70',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

const Button = ({
  variant,
  className,
  ...props
}: useRender.ComponentProps<'button'> & VariantProps<typeof buttonCVA>) => {
  return useRender({
    defaultTagName: 'button',
    props: {
      'data-slot': 'button',
      className: cn(buttonCVA({ variant, className })),
      ...props,
    },
  });
};

export { Button };
