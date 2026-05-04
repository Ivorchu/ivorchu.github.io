import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import SectionHeader from '../ui/SectionHeader';
import { useReveal } from '../../hooks/useReveal';

const links = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/ivorchu',
    display: 'github.com/ivorchu',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ivorchu/',
    display: 'linkedin.com/in/ivorchu',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:ivorchu@gmail.com',
    display: 'ivorchu@gmail.com',
  },
];

export default function Contact() {
  const { ref, visible } = useReveal();
  return (
    <section id="contact" className="bg-slate-800/30 px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionHeader title="Contact" centered />
        <p className="mb-10 text-base text-slate-400">
          Open to research collaborations, internship opportunities, or just a conversation about
          computer architecture and AI systems.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          {links.map(({ icon: Icon, label, href, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-slate-700 px-5 py-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-500"
            >
              <Icon size={18} className="shrink-0 text-indigo-400" />
              <div>
                <p className="font-mono text-xs text-slate-500">{label}</p>
                <p className="text-base text-slate-200">{display}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
