import { cn } from '@/lib/utils';

const Heading = (props: React.ComponentProps<'h1'>) => {
  return (
    <h1 className={cn('text-xl text-text uppercase', props.className)}>
      {props.children}
    </h1>
  );
};

export default Heading;
