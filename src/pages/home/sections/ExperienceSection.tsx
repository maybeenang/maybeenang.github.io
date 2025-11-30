import Divider from '@/components/ui/Divider';
import ExperienceCard from '@/components/ui/ExperienceCard';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';

const ExperienceSection = () => {
  return (
    <>
      <Section>
        <Heading>Work History</Heading>
      </Section>

      <Divider size="sm" />

      <Section>
        <h2 className="text-text-secondary">
          Some of my personal projects will be listed here soon.
        </h2>
      </Section>

      <Divider size="xs" />

      <Section className="" variant="paddingless">
        <ul>
          {Array.from({ length: 5 }).map((_, i) => (
            <ExperienceCard key={i} />
          ))}
        </ul>
      </Section>
    </>
  );
};

export default ExperienceSection;
