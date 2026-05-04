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
    desc: 'OS design, compiler construction, RISC-V, embedded systems',
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
            <SectionHeader title="About" />
            <div className="space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                I'm a Computer Engineering student at{' '}
                <span className="text-slate-200">Purdue University</span>, focused on computer
                architecture, GPU systems, and hardware-software co-design. This fall I'm joining{' '}
                <span className="text-slate-200">Carnegie Mellon University</span> as an MS ECE
                student.
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
              <div key={title} className="rounded-lg border border-slate-800 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Icon size={16} className="text-slate-400" />
                  <h3 className="text-sm font-medium text-slate-300">{title}</h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
