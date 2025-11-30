import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <div>
      <div
        className={cn(
          'relative h-[8rem]',
          'before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-border',
          'after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-border',
        )}
      ></div>
    </div>
  );
};

export default Navbar;
