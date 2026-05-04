import SectionHeader from '../ui/SectionHeader';
import ResearchCard from '../ui/ResearchCard';
import { research } from '../../data/research';

export default function Research() {
  return (
    <section id="research" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Research"
          subtitle="Work at the intersection of architecture simulation, memory systems, and AI compilers"
        />
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {research.map((item) => (
            <ResearchCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
