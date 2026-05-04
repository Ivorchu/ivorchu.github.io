interface TagProps {
  label: string;
  variant?: 'default' | 'accent';
}

export default function Tag({ label, variant = 'default' }: TagProps) {
  return (
    <span
      className={`rounded px-1.5 py-0.5 font-mono text-xs ${
        variant === 'accent' ? 'bg-slate-900 text-slate-300' : 'bg-slate-900 text-slate-500'
      }`}
    >
      {label}
    </span>
  );
}
