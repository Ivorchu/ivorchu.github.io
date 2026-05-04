import { ChevronDown, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-900/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-900/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">
          Computer Engineering
        </p>

        <h1 className="mb-6 text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ivor Chu
          </span>
        </h1>

        <p className="mb-4 text-xl font-medium text-slate-300 sm:text-2xl">
          Purdue University&nbsp;&nbsp;→&nbsp;&nbsp;CMU ECE MS
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Building at the intersection of AI systems, computer architecture, and hardware-software
          co-design. Focused on GPU simulation, DRAM memory systems, and high-performance ML kernels.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 transition-all hover:bg-indigo-500 hover:shadow-indigo-900/60"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-slate-500 hover:text-slate-100"
          >
            <FileText size={15} />
            Resume
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 animate-bounce text-slate-700 transition-colors hover:text-slate-400"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
