import Divider from '@/components/ui/Divider';
import ExperienceSection from './sections/ExperienceSection';
import FooterSection from './sections/FooterSection';
import HeroSection from './sections/HeroSection';
import ProjectSection from './sections/ProjectSection';
import TechstackSection from './sections/TechstackSection';

export default function Home() {
  return (
    <div className="font-mono">
      <HeroSection />

      <Divider size="lg" />

      <TechstackSection />

      <Divider size="lg" />

      <ProjectSection />

      <Divider size="lg" />

      <ExperienceSection />

      <Divider size="lg" />

      <FooterSection />

      <Divider size="lg" />
    </div>
  );
}
