export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-3 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Heng-I (Ivor) Chu
        </h1>

        <p className="mb-5 text-slate-300">
          MS ECE · Carnegie Mellon University &nbsp;·&nbsp; BS CE · Purdue University
        </p>

        <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-slate-400">
          Research in GPU microarchitecture simulation, AI/ML compilers, and hardware-software
          co-design. Previously at Purdue Accelerator Architecture Lab and Academia Sinica IIS.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-7 text-sm text-slate-300">
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
