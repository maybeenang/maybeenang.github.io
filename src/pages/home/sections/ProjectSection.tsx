import Divider from '@/components/ui/Divider';
import Heading from '@/components/ui/Heading';
import ProjectCard from '@/components/ui/ProjectCard';
import Section from '@/components/ui/Section';

const ProjectSection = () => {
  return (
    <>
      <Section>
        <Heading>Projects</Heading>
      </Section>

      <Divider size="sm" />

      <Section>
        <h2 className="text-text-secondary">
          Some of my personal projects will be listed here soon.
        </h2>
      </Section>

      <Divider size="xs" />

      <Section
        className="grid grid-cols-2 divide-x-1 divide-y-1 divide-border"
        variant="paddingless"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <ProjectCard key={`project-${i}`} />
        ))}
      </Section>
    </>
  );
};

export default ProjectSection;
