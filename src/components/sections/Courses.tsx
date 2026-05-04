import SectionHeader from '../ui/SectionHeader';
import { courses } from '../../data/courses';
import { useReveal } from '../../hooks/useReveal';

const categories = [
  'Architecture & Hardware',
  'Systems & Software',
  'AI & Theory',
] as const;

export default function Courses() {
  const { ref, visible } = useReveal();
  return (
    <section id="courses" className="bg-slate-800/30 px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionHeader title="Coursework" subtitle="Relevant courses at Purdue University" />
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat} className="rounded-lg border border-slate-700 p-6">
              <h3 className="mb-4 font-mono text-sm text-slate-400">{cat}</h3>
              <ul className="space-y-2.5">
                {courses
                  .filter((c) => c.category === cat)
                  .map((c) => (
                    <li key={c.name} className="flex items-center justify-between gap-2">
                      <span className="text-base text-slate-200">{c.name}</span>
                      {c.code && (
                        <span className="shrink-0 font-mono text-xs text-slate-500">{c.code}</span>
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
