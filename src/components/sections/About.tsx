import { Cpu, Brain, Code2, Layers } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { useReveal } from '../../hooks/useReveal';

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
    desc: 'OS design, compiler construction, RISC-V, embedded systems',
  },
  {
    icon: Layers,
    title: 'HW / SW Co-Design',
    desc: 'FPGA prototyping, DRAM modeling, hardware-software interface optimization',
  },
];

export default function About() {
  const { ref, visible } = useReveal();
  return (
    <section id="about" className="px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Text */}
          <div>
            <SectionHeader title="About" />
            <div className="space-y-4 text-base leading-relaxed text-slate-300">
              <p>
                I'm an MS ECE student at{' '}
                <span className="text-white">Carnegie Mellon University</span>, focused on
                computer architecture, GPU systems, and hardware-software co-design. I completed my
                undergraduate degree in Computer Engineering at{' '}
                <span className="text-white">Purdue University</span>.
              </p>
              <p>
                My research spans GPU microarchitecture simulation (Accel-Sim / GPGPU-Sim for
                Hopper and Blackwell), AI/ML compiler work with CUTLASS and AITemplate, and
                self-driving perception with TensorRT and ROS. I'm drawn to problems where
                architectural decisions directly constrain algorithm performance.
              </p>
              <p>
                I've built a Unix-like OS kernel, a VLIW compiler for a custom tensor-core ISA, a
                JEDEC-compliant DDR4 memory controller, and a dual-core RISC-V processor with cache
                coherence — all verified in cycle-accurate simulators or on FPGA.
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="grid content-start grid-cols-1 gap-3 sm:grid-cols-2">
            {interests.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-lg border border-slate-700 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-500">
                <div className="mb-2 flex items-center gap-2">
                  <Icon size={16} className="text-indigo-400" />
                  <h3 className="text-sm font-medium text-slate-200">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
