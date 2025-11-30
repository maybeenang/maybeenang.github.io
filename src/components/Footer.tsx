import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <div
      className={cn(
        'bg-background-secondary relative flex h-16 items-center justify-between px-2 text-center text-sm text-text-secondary',
        'before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-border',
        'after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-border',
      )}
    >
      <h1>
        © {new Date().getFullYear()} Built with 😂 by{' '}
        <a
          className="cursor-pointer underline hover:text-text"
          href="https://github.com/maybeenang"
          target="_blank"
          rel="noopener noreferrer"
        >
          maybeenang
        </a>
      </h1>
      <h1>
        Inspired by{' '}
        <a
          className="cursor-pointer underline hover:text-text"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS{' '}
        </a>
        Landing page
      </h1>
    </div>
  );
};

export default Footer;
