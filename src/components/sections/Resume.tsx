import { Download, ExternalLink } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

export default function Resume() {
  return (
    <section id="resume" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeader title="Resume" centered />
        <p className="mb-8 text-sm text-slate-400">
          My full resume covers education, research experience, projects, and technical skills. Drop
          it in{' '}
          <code className="rounded bg-slate-800 px-1.5 py-0.5 text-xs text-slate-300">
            public/resume.pdf
          </code>{' '}
          to activate the links below.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-white hover:text-white"
          >
            <ExternalLink size={15} />
            View Resume
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-400 hover:text-slate-100"
          >
            <Download size={15} />
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
