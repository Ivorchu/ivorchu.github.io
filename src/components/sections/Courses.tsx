import SectionHeader from '../ui/SectionHeader';
import { courses } from '../../data/courses';

const categories = [
  'Architecture & Hardware',
  'Systems & Software',
  'AI & Machine Learning',
  'Math & Theory',
] as const;

export default function Courses() {
  return (
    <section id="courses" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Coursework" subtitle="Selected courses at Purdue University" />
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat}
              className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-6"
            >
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                {cat}
              </h3>
              <ul className="space-y-2.5">
                {courses
                  .filter((c) => c.category === cat)
                  .map((c) => (
                    <li key={c.name} className="flex items-center justify-between gap-2">
                      <span className="text-sm text-slate-300">{c.name}</span>
                      {c.code && (
                        <span className="shrink-0 font-mono text-xs text-slate-600">{c.code}</span>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
