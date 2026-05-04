import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    role: 'Undergraduate Researcher',
    company: 'Purdue University — ECE Department',
    location: 'West Lafayette, IN',
    period: 'Jan 2024 – Present',
    type: 'Research',
    bullets: [
      'Extended GPGPU-Sim / Accel-Sim to model NVIDIA Hopper WGMMA instruction timing and functional behavior',
      'Developed AXI + Ramulator2 co-simulation framework for cycle-accurate DDR4 and HBM3 evaluation',
      'Extended AITemplate and CUTLASS to support generalized N:M structured sparsity for transformer workloads',
    ],
  },
  {
    role: 'Teaching Assistant — ECE 362',
    company: 'Purdue University',
    location: 'West Lafayette, IN',
    period: 'Aug 2023 – May 2024',
    type: 'Academic',
    bullets: [
      'Supported students through microprocessor systems, embedded C programming, and digital logic labs',
      'Held weekly office hours and graded lab assignments, projects, and exams',
      'Mentored student teams through ESP32 and ARM Cortex-M embedded system projects',
    ],
  },
];
