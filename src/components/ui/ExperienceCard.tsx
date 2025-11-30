import { cn } from '@/lib/utils';
import Section from './Section';

const ExperienceCard = () => {
  return (
    <li className={cn('border-b-1 border-border bg-background')}>
      <section className="flex flex-row items-center gap-2 p-2">
        <div className="h-12 w-12 rounded-md bg-primary-button"></div>
        <div className="flex-1">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-lg text-text">Experience Title</h1>
            <h1 className="text-lg text-text">2020 - 2020</h1>
          </div>

          <div className="flex flex-row items-center justify-between">
            <p className="text-xs text-text-secondary">
              PT. Kereta Api Indonesia | Contract
            </p>
            <p className="text-xs text-text-secondary">Bandung | Onsite</p>
          </div>
        </div>
      </section>
      <Section variant="card" className="">
        <ul className="list-disc space-y-4 pl-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <li
              className="pl-4 text-sm text-text-secondary"
              key={`exp-desc-${i}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
          ))}
        </ul>
      </Section>
    </li>
  );
};

export default ExperienceCard;
