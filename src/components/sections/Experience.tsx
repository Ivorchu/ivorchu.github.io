import SectionHeader from '../ui/SectionHeader';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader title="Experience" />

        <div className="space-y-0">
          {experience.map((exp, i) => (
            <div key={i} className="flex gap-4">
              {/* Timeline column */}
              <div className="flex flex-col items-center pt-1.5">
                <div className="z-10 h-2.5 w-2.5 shrink-0 rounded-full border border-slate-500 bg-slate-950" />
                {i < experience.length - 1 && (
                  <div className="mt-2 min-h-[2rem] w-px flex-1 bg-slate-800" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 ${i < experience.length - 1 ? 'pb-8' : ''}`}>
                <div className="rounded-lg border border-slate-800 p-5">
                  <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-slate-200">{exp.role}</h3>
                      <p className="text-sm text-slate-400">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-slate-600">{exp.type}</span>
                  </div>
                  <p className="mb-3 font-mono text-xs text-slate-600">
                    {exp.period} · {exp.location}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                        <span className="mt-0.5 shrink-0 text-slate-600">–</span>
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
