import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
import { languages, tools } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Skills" subtitle="Languages and tools I work with" />

        {/* Languages row */}
        <div className="mb-4 rounded-xl border border-slate-700/50 bg-slate-800/40 p-6">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Tag key={lang} label={lang} />
            ))}
          </div>
        </div>

        {/* Tool category grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map(({ category, items }) => (
            <div
              key={category}
              className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-5"
            >
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
