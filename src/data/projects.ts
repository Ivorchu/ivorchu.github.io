import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'JOS-Style Operating System',
    description:
      'A Unix-inspired OS kernel built from scratch following MIT 6.828 lab structure. Implements core systems programming concepts in C on x86.',
    tags: ['C', 'x86', 'Assembly', 'OS Kernel'],
    highlights: [
      'Virtual memory with page-table manipulation and demand paging',
      'User-space process management with fork() and copy-on-write',
      'Inter-process communication via shared memory and message passing',
      'Round-robin and priority-based process scheduling',
      'File system with journaling and crash recovery',
    ],
  },
  {
    title: 'RISC-V Multicore Processor',
    description:
      'Out-of-order RISC-V superscalar processor with a cache coherence protocol and multicore support, synthesized and validated on FPGA.',
    tags: ['SystemVerilog', 'RISC-V', 'FPGA', 'Computer Architecture'],
    highlights: [
      'Full RV32IM ISA implementation with out-of-order execution pipeline',
      'MESI cache coherence protocol across cores with shared L2',
      'Tournament branch predictor with BTB',
      'Synthesis and timing closure on Xilinx FPGA',
    ],
  },
  {
    title: 'Smart Home IoT System',
    description:
      'Distributed IoT platform using ESP32 microcontrollers, MQTT messaging, and cloud telemetry with ThingSpeak for real-time monitoring and automation.',
    tags: ['C++', 'Python', 'ESP32', 'MQTT', 'IoT'],
    highlights: [
      'Multi-sensor network: temperature, humidity, motion, and gas sensors',
      'MQTT broker with publish-subscribe architecture over WiFi',
      'Real-time dashboard and alert system via ThingSpeak cloud',
      'Automated actuator control with configurable rule engine',
    ],
  },
];
