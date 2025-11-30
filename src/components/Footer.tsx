import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <div
      className={cn(
        'bg-background-secondary relative flex h-16 items-center justify-center text-center text-sm text-text-secondary',
        'before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-border',
        'after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-border',
      )}
    >
      <h1>
        © {new Date().getFullYear()} Built with 😂 by{' '}
        <a
          className="cursor-pointer hover:underline"
          href="https://github.com/maybeenang"
          target="_blank"
          rel="noopener noreferrer"
        >
          maybeenang
        </a>
        .
      </h1>
    </div>
  );
};

export default Footer;
