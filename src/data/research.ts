import type { ResearchItem } from '../types';

export const research: ResearchItem[] = [
  {
    title: 'NVIDIA Hopper WGMMA Timing & Functional Modeling',
    context: 'GPGPU-Sim / Accel-Sim',
    period: '2024 – Present',
    description:
      'Extending GPGPU-Sim and Accel-Sim to accurately model the NVIDIA H100 Hopper architecture, focusing on the new Warp Group Matrix Multiply-Accumulate (WGMMA) instruction semantics, tensor core pipeline stages, and async memory access patterns.',
    details: [
      'Implemented functional simulation of WGMMA instructions with asynchronous tensor memory access (TMA) patterns',
      'Modeled tensor core pipeline stages and issue latencies calibrated against H100 hardware microbenchmarks',
      'Integrated SM90a PTX/SASS decoding support for CUTLASS-based GEMM workloads',
      'Validated simulation accuracy against cuBLAS and CUTLASS kernel execution traces on A100 and H100',
    ],
    tags: ['C++', 'CUDA', 'GPGPU-Sim', 'Accel-Sim', 'PTX', 'GPU Architecture'],
  },
  {
    title: 'AXI + Ramulator2 DRAM Co-Simulation',
    context: 'Memory Systems Research',
    period: '2024',
    description:
      'Developed a co-simulation framework coupling AXI4-based SoC memory controllers with Ramulator2 for cycle-accurate DDR4 and HBM3 DRAM evaluation, enabling analysis of bandwidth, latency, and scheduling policy trade-offs.',
    details: [
      'Designed AXI4 slave bridge to Ramulator2 memory controller interface in SystemVerilog',
      'Evaluated bandwidth and latency trade-offs between DDR4-3200 and HBM3 under diverse memory access patterns',
      'Integrated cache hierarchy model to study prefetching and DRAM scheduling policy interactions',
      'Characterized memory-bound DNN inference workloads using Roofline analysis',
    ],
    tags: ['C++', 'SystemVerilog', 'Ramulator2', 'AXI4', 'DDR4', 'HBM3', 'DRAM'],
  },
  {
    title: 'N:M Structured Sparsity in AITemplate / CUTLASS',
    context: 'AI Compiler & Kernel Research',
    period: '2023 – 2024',
    description:
      "Extended AITemplate and CUTLASS to support generalized N:M structured sparsity beyond NVIDIA's native 2:4 format, enabling flexible sparse tensor computation for transformer workloads with configurable accuracy-efficiency trade-offs.",
    details: [
      'Implemented N:M sparse metadata encoding and GEMM kernel variants in CUTLASS C++ templates',
      "Integrated sparse operator fusion into AITemplate's code generation and graph optimization pipeline",
      'Benchmarked throughput gains for 2:4, 4:8, and 8:16 sparsity ratios on NVIDIA A100',
      'Evaluated accuracy-efficiency trade-offs for BERT and GPT-style attention layers',
    ],
    tags: ['CUDA', 'C++', 'Python', 'AITemplate', 'CUTLASS', 'Sparse Computing', 'ML Systems'],
  },
];
