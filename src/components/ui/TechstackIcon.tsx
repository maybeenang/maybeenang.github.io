import { cn } from '@/lib/utils';
import StackIcon from 'tech-stack-icons';

const TechstackIcon = ({
  name,
  ...props
}: React.ComponentProps<'div'> & {
  name: string;
}) => {
  return (
    <div
      className={cn(
        'flex flex-row items-center gap-2 px-4 py-1.5 text-xs text-text-secondary',
        'rounded-full border border-border',
        'hover:bg-border/50 hover:text-text',
        'cursor-default transition-all',
      )}
      {...props}
    >
      <StackIcon name={name.toLowerCase()} className="h-4 w-4" variant="dark" />
      <span>{name}</span>
    </div>
  );
};

export default TechstackIcon;
