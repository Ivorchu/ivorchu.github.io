import { Calendar, MapPin } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader title="Experience" subtitle="Research and academic roles" />

        <div className="space-y-0">
          {experience.map((exp, i) => (
            <div key={i} className="flex gap-4">
              {/* Timeline column */}
              <div className="flex flex-col items-center pt-1.5">
                <div className="z-10 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-indigo-500 bg-slate-950" />
                {i < experience.length - 1 && (
                  <div className="mt-2 min-h-[2rem] w-px flex-1 bg-slate-700/50" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 ${i < experience.length - 1 ? 'pb-8' : ''}`}>
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-5 transition-all hover:border-slate-600/60">
                  <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-slate-100">{exp.role}</h3>
                      <p className="text-sm text-indigo-400">{exp.company}</p>
                    </div>
                    <span className="rounded-full bg-slate-700/50 px-2.5 py-0.5 text-xs text-slate-400">
                      {exp.type}
                    </span>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                        <span className="mt-0.5 shrink-0 text-indigo-400">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
