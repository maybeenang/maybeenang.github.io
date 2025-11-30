import { Button } from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import Section from '@/components/ui/Section';

const HeroSection = () => {
  return (
    <>
      <Section>
        <h1 className="text-2xl text-text">Hi, I'm Elang!</h1>
      </Section>
      <Divider size="sm" />
      <Section className="text-text-secondary">
        <h1 className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci
          maxime aspernatur, temporibus ut doloribus culpa soluta, facilis
          expedita, tempore eum deserunt sint dignissimos. Ducimus ex ullam
          deleniti delectus magni.
        </h1>
      </Section>
      <Divider size="sm" />
      <Section className="flex gap-2">
        <Button>Book a call</Button>
        <Button variant="secondary">Send an email</Button>
      </Section>
    </>
  );
};

export default HeroSection;
