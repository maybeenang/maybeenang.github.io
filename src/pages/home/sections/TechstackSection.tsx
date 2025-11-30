import Divider from '@/components/ui/Divider';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import TechstackIcon from '@/components/ui/TechstackIcon';
import { techstack } from '@/lib/constant';

const TechstackSection = () => {
  return (
    <>
      <Section>
        <Heading>Tech Stacks</Heading>
      </Section>

      <Divider size="sm" />

      <Section>
        <h2 className="text-text-secondary">
          Tech stack I use for my personal work and projects :
        </h2>
      </Section>

      <Divider size="xs" />

      <Section className="flex flex-wrap gap-4 p-4" variant="card">
        {techstack.map((tech) => (
          <TechstackIcon name={tech} />
        ))}
      </Section>
    </>
  );
};

export default TechstackSection;
