import SectionHeader from '../ui/SectionHeader';
import ResearchCard from '../ui/ResearchCard';
import { research } from '../../data/research';
import { useReveal } from '../../hooks/useReveal';

export default function Research() {
  const { ref, visible } = useReveal();
  return (
    <section id="research" className="bg-slate-800/30 px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
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
