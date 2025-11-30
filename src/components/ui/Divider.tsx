import { cn } from '@/lib/utils';
import { useRender } from '@base-ui-components/react';
import { cva, type VariantProps } from 'class-variance-authority';

const dividerCva = cva(
  [
    'relative',
    'before:absolute before:content-[""] before:top-0 before:-left-[100vw] before:w-[200vw] before:h-[1px] before:bg-border',
    'after:absolute after:content-[""]  after:bottom-0 after:-left-[100vw] after:w-[200vw] after:h-[1px] after:bg-border',
  ],
  {
    variants: {
      size: {
        xs: 'h-2',
        sm: 'h-4',
        base: 'h-8',
        lg: 'h-16',
        xl: 'h-24',
      },
    },
    defaultVariants: {
      size: 'base',
    },
  },
);

const Divider = ({
  render,
  size,
  className,
  ...props
}: useRender.ComponentProps<'div'> & VariantProps<typeof dividerCva>) => {
  return useRender({
    defaultTagName: 'div',
    render,
    props: {
      'data-slot': 'div',
      className: cn(dividerCva({ size, className })),
      ...props,
    },
  });
};

export default Divider;
