interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className={`mt-2 h-0.5 w-8 bg-indigo-500 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && <p className="mt-3 text-sm text-slate-300">{subtitle}</p>}
    </div>
  );
}
