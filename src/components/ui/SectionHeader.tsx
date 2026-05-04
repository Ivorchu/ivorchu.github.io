interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-slate-400">{subtitle}</p>}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
