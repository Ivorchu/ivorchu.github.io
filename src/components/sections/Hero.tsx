import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const fadeIn = () =>
    `transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;
  const style = (delay: number) => ({ transitionDelay: mounted ? `${delay}ms` : '0ms' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[700px] w-[700px] rounded-full bg-indigo-600/6 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl">
        <h1
          className={`mb-3 text-5xl font-bold tracking-tight text-white sm:text-6xl ${fadeIn()}`}
          style={style(0)}
        >
          Heng-I (Ivor) Chu
        </h1>

        <p
          className={`mb-2 text-base text-slate-300 ${fadeIn()}`}
          style={style(150)}
        >
          MS ECE · Carnegie Mellon University &nbsp;·&nbsp; BS CE · Purdue University
        </p>

        <p
          className={`mx-auto mb-10 max-w-xl text-base leading-relaxed text-slate-400 ${fadeIn()}`}
          style={style(300)}
        >
          Research in GPU microarchitecture simulation, AI/ML compilers, and hardware-software
          co-design. Previously at Purdue Accelerator Architecture Lab and Academia Sinica IIS.
        </p>

        <div
          className={`flex flex-wrap items-center justify-center gap-7 text-base text-slate-300 ${fadeIn()}`}
          style={style(450)}
        >
          <a href="#research" className="transition-colors hover:text-white">Research ↓</a>
          <a href="#projects" className="transition-colors hover:text-white">Projects ↓</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact ↓</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}
