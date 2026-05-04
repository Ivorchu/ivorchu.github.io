import { Cpu, Brain, Code2, Layers } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const interests = [
  {
    icon: Cpu,
    title: 'Computer Architecture',
    desc: 'GPU simulation, out-of-order execution, cache hierarchies, memory subsystems',
  },
  {
    icon: Brain,
    title: 'AI Systems',
    desc: 'ML compilers, tensor kernels, sparse computation, hardware accelerators',
  },
  {
    icon: Code2,
    title: 'Systems Programming',
    desc: 'OS design, embedded systems, RISC-V, real-time systems',
  },
  {
    icon: Layers,
    title: 'HW / SW Co-Design',
    desc: 'FPGA prototyping, DRAM modeling, hardware-software interface optimization',
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Text */}
          <div>
            <SectionHeader title="About Me" subtitle="A bit about who I am and what drives me" />
            <div className="space-y-4 leading-relaxed text-slate-400">
              <p>
                I'm a Computer Engineering student at{' '}
                <span className="font-medium text-slate-200">Purdue University</span>, focused on
                computer architecture, GPU systems, and hardware-software co-design. This fall I'll
                be joining{' '}
                <span className="font-medium text-slate-200">
                  Carnegie Mellon University
                </span>{' '}
                as an MS ECE student.
              </p>
              <p>
                My research spans GPU microarchitecture simulation (GPGPU-Sim / Accel-Sim), DRAM
                memory system co-simulation, and AI/ML compiler work with CUTLASS and AITemplate. I
                enjoy working at the boundary between hardware and software — where architectural
                decisions directly shape algorithm performance.
              </p>
              <p>
                Outside research, I've built a JOS-style OS, a RISC-V multicore processor with
                cache coherence, and a distributed IoT system — projects that gave me a deep
                appreciation for how systems work from transistors up to the OS kernel.
              </p>
            </div>
          </div>

          {/* Interest cards */}
          <div className="grid content-start grid-cols-1 gap-4 sm:grid-cols-2">
            {interests.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-5 transition-all hover:border-indigo-500/30"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                  <Icon size={20} className="text-indigo-400" />
                </div>
                <h3 className="mb-1.5 font-semibold text-slate-200">{title}</h3>
                <p className="text-xs leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
