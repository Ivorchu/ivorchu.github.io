import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import type { Project } from '../../types';
import Tag from './Tag';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-lg border border-slate-800 p-5 transition-colors hover:border-slate-700">
      <div className="mb-1 flex items-start justify-between gap-2">
        <h3 className="font-semibold text-slate-200">{project.title}</h3>
        <div className="flex shrink-0 gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 transition-colors hover:text-slate-300"
            >
              <GithubIcon size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 transition-colors hover:text-slate-300"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {project.period && (
        <p className="mb-2 font-mono text-xs text-slate-600">{project.period}</p>
      )}

      <p className="mb-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mb-4 space-y-1.5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-xs leading-relaxed text-slate-500">
              <span className="mt-0.5 shrink-0 text-slate-600">–</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}
