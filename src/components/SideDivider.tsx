import { cn } from '@/lib/utils';

const SideDivider = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'row-span-full row-start-1 hidden',
        'border-x border-x-border',
        'md:block',
        'bg-[repeating-linear-gradient(-45deg,var(--border)_0px,var(--border)_1px,transparent_1px,transparent_16px)]',
        className,
      )}
      {...props}
    ></div>
  );
};

export default SideDivider;
