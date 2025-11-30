import {
  DiscordIcon,
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
} from '@/components/icons';
import { Button } from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';

const socialLinks: { name: string; url: string; icon: React.ReactNode }[] = [
  {
    name: 'GitHub',
    url: 'github.com/maybeenang',
    icon: <GithubIcon className="h-6 w-6 fill-current" />,
  },
  {
    name: 'LinkedIn',
    url: 'linkedin.com/in/maybeenang',
    icon: <LinkedinIcon className="h-6 w-6 fill-current" />,
  },
  {
    name: 'Telegram',
    url: 'github.com/maybeenang',
    icon: <TelegramIcon className="h-6 w-6 fill-current" />,
  },
  {
    name: 'Discord',
    url: 'github.com/maybeenang',
    icon: <DiscordIcon className="h-6 w-6 fill-current" />,
  },
];

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

      <section className="grid grid-cols-4 gap-6">
        {socialLinks.map((social, i) => (
          <span
            key={`social-link-${i}`}
            className="flex flex-row items-center gap-2 text-text-secondary"
          >
            {social.icon}
            <a
              href={`https://${social.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {social.name}
            </a>
          </span>
        ))}
      </section>
    </Section>
  );
};

export default FooterSection;
