import { Button } from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import StackIcon from 'tech-stack-icons';

const FooterSection = () => {
  return (
    <Section className="grid place-items-center gap-4 p-8 px-16 text-center">
      <Heading className="text-text-secondary">Let's Work Together!</Heading>

      <h2 className="text-xl text-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        optio magni debitis velit eveniet, ea molestias reprehenderit dolore
        mollitia dolor repellendus fugiat quidem dolorum laboriosam asperiores
        enim blanditiis, necessitatibus laudantium?
      </h2>

      <Section className="flex gap-2">
        <Button>Book a call</Button>
        <Button variant="secondary">Send an email</Button>
      </Section>

      <section className="grid grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <span
            key={i}
            className="flex flex-row items-center gap-2 text-text-secondary"
          >
            <StackIcon name="html5" className="h-4 w-4" variant="grayscale" />
            Social {i + 1}
          </span>
        ))}
      </section>
    </Section>
  );
};

export default FooterSection;
