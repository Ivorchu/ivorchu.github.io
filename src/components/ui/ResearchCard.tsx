import { ExternalLink } from 'lucide-react';
import type { ResearchItem } from '../../types';
import Tag from './Tag';

export default function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <div className="flex flex-col rounded-lg border border-slate-700 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-500">
      <div className="mb-0.5 flex items-start justify-between gap-2">
        <span className="font-mono text-xs text-slate-400">{item.context}</span>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-slate-500 transition-colors hover:text-slate-200"
          >
            <ExternalLink size={13} />
          </a>
        )}
      </div>

      <h3 className="mb-0.5 font-semibold leading-snug text-slate-100">{item.title}</h3>
      <p className="mb-3 font-mono text-xs text-slate-400">{item.period}</p>
      <p className="mb-3 text-base leading-relaxed text-slate-300">{item.description}</p>

      <ul className="mb-4 flex-1 space-y-1.5">
        {item.details.map((d, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-400">
            <span className="mt-0.5 shrink-0 text-slate-500">–</span>
            {d}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <Tag key={tag} label={tag} variant="accent" />
        ))}
      </div>
    </div>
  );
}
