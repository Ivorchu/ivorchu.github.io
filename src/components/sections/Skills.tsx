import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
import { languages, tools } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Skills" />

        {/* Languages row */}
        <div className="mb-4 rounded-lg border border-slate-700 p-5">
          <p className="mb-3 font-mono text-xs text-slate-400">Languages</p>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Tag key={lang} label={lang} variant="accent" />
            ))}
          </div>
        </div>

        {/* Tool category grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map(({ category, items }) => (
            <div key={category} className="rounded-lg border border-slate-700 p-5">
              <p className="mb-3 font-mono text-xs text-slate-400">{category}</p>
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
