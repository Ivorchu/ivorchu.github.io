interface TagProps {
  label: string;
  variant?: 'default' | 'accent';
}

export default function Tag({ label, variant = 'default' }: TagProps) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
        variant === 'accent'
          ? 'bg-indigo-500/20 text-indigo-300 ring-1 ring-inset ring-indigo-500/30'
          : 'bg-slate-700/60 text-slate-300 ring-1 ring-inset ring-slate-600/40'
      }`}
    >
      {label}
    </span>
  );
}
