import { ExternalLink } from 'lucide-react';
import type { ResearchItem } from '../../types';
import Tag from './Tag';

export default function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-700/50 bg-slate-800/40 p-6 transition-all duration-300 hover:border-indigo-500/40">
      <div className="mb-1 flex items-start justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
          {item.context}
        </span>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-slate-500 transition-colors hover:text-slate-300"
          >
            <ExternalLink size={13} />
          </a>
        )}
      </div>

      <h3 className="mb-1 text-lg font-semibold leading-snug text-slate-100">{item.title}</h3>
      <p className="mb-4 text-xs text-slate-500">{item.period}</p>
      <p className="mb-4 text-sm leading-relaxed text-slate-400">{item.description}</p>

      <ul className="mb-4 flex-1 space-y-1.5">
        {item.details.map((d, i) => (
          <li key={i} className="flex gap-2 text-xs leading-relaxed text-slate-500">
            <span className="mt-0.5 shrink-0 text-indigo-400">▸</span>
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
