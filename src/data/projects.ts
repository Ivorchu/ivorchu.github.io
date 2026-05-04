import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Compiler for Custom Tensor Core (Atalla ISA)',
    period: 'Aug 2025 – May 2026',
    description:
      'Compiler backend translating C code into Atalla, a custom 64-bit CISC ISA designed for the Purdue SoCET team\'s matrix accelerator, enabling end-to-end programmability of the hardware.',
    tags: ['C++', 'Compiler', 'VLIW', 'CISC ISA', 'Computer Architecture'],
    highlights: [
      'Designed a VLIW packet scheduler with latency-aware dependency tracking, software scoreboard, and register-bank allocation — up to 3.2× higher ILP and 2.5× IPC vs. prior scoreboard designs',
      'Co-designed the Atalla ISA with APx extensions, vector code generation, loop unrolling, and memory layout tuning',
      'Reduced core-logic area by 1.8× compared to a RISC-V extension on the MITLL 90 nm process',
    ],
  },
  {
    title: 'High-Bandwidth DDR4 Memory Controller',
    period: 'Aug 2025 – May 2026',
    description:
      'JEDEC-compliant DDR4 DRAM controller translating load/store requests into correct command sequencing, timing, refresh, and data transfer for the Atalla AI accelerator.',
    tags: ['SystemVerilog', 'DDR4', 'AXI', 'Ramulator', 'Verilator', 'DPI-C'],
    highlights: [
      'Implemented a blocking baseline controller with a Micron DDR4 model (1333 MT/s) and a non-blocking AXI split-transaction extension with per-bank queues to overlap requests and improve bandwidth',
      'Integrated CMU Ramulator with the RTL controller via Verilator and DPI-C, implementing a cycle-synchronized wrapper bridging AXI and scratchpad traffic for end-to-end timing verification',
    ],
  },
  {
    title: 'Multicore Pipelined RISC-V Processor',
    period: 'Aug 2025 – Dec 2025',
    description:
      'Dual-core pipelined RISC-V processor with hazard detection, data forwarding, branch prediction, direct-mapped instruction and set-associative data caches, and full MSI cache coherence, validated on FPGA.',
    tags: ['SystemVerilog', 'RISC-V', 'FPGA', 'MSI Coherence', 'Computer Architecture'],
    highlights: [
      'Built cache and memory-controller state machines with instruction/data arbitration, cache-to-cache transfers, snooping, writeback handling, and full MSI coherence across cores',
      'Implemented coherence-aware LR/SC with reservation-set invalidation; verified end-to-end multicore correctness against the course ISA simulator',
    ],
  },
  {
    title: 'MIT JOS-Style Operating System',
    period: 'Jan 2026 – May 2026',
    description:
      'Unix-like OS kernel in C built on the MIT JOS framework, implementing core kernel subsystems on x86 including virtual memory, trap handling, and system calls.',
    tags: ['C', 'x86', 'Assembly', 'OS Kernel'],
    highlights: [
      'Designed paging and page fault handling using hardware page tables and privilege-level transitions, ensuring isolation between user environments and the kernel',
      'Implemented context switching, copy-on-write fork, and IPC, enabling safe and efficient execution of user programs',
    ],
  },
  {
    title: 'USB Full-Speed Bulk-Transfer AHB SoC Module',
    period: 'Jan 2025 – May 2025',
    description:
      'USB Full-Speed bulk-transfer endpoint integrated as an AHB SoC module, implementing the AHB subordinate interface, receiver, and transmitter.',
    tags: ['SystemVerilog', 'USB', 'AHB', 'SoC', 'Digital IC'],
    highlights: [
      'Implemented AHB Subordinate Interface managing data transfers and error responses between the USB module and the system bus',
      'Developed USB Receiver (validity checks, buffering) and Transmitter (packet management, protocol compliance) modules',
    ],
  },
  {
    title: 'Caterpillar LLM-Powered Data Dashboard',
    period: 'Aug 2024 – May 2025',
    description:
      'LLM-powered chatbot enabling natural language interaction with Caterpillar equipment sensor databases for real-time retrieval, visualization, and predictive analysis.',
    tags: ['Python', 'LLaMA', 'LlamaIndex', 'LangChain', 'LoRA', 'RLHF'],
    highlights: [
      'Deployed LlamaIndex + LLaMA fine-tuned with LoRA for real-time sensor data retrieval and visualization from Caterpillar equipment',
      'Integrated LangChain with Caterpillar servers and fine-tuned responses using RLHF to automate data summarization and predictive analysis',
    ],
  },
];
