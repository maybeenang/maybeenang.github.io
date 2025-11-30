import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const section = cva([''], {
  variants: {
    variant: {
      default: 'p-2',
      card: 'border-border border p-4 bg-background rounded-lg ',
      paddingless: 'p-0',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface SectionProps
  extends React.ComponentProps<'section'>, VariantProps<typeof section> {}

const Section = ({ variant, ...props }: SectionProps) => {
  if (variant === 'card') {
    return (
      <section
        className={cn(section({ variant: 'default', className: 'bg-section' }))}
      >
        <div
          className={cn(
            section({ variant: 'card', className: props.className }),
          )}
        >
          {props.children}
        </div>
      </section>
    );
  }

  return (
    <section className={section({ variant, className: props.className })}>
      {props.children}
    </section>
  );
};

export default Section;
