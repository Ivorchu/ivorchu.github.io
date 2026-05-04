import type { ResearchItem } from '../types';

export const research: ResearchItem[] = [
  {
    title: 'Hopper & Blackwell GPU Architecture Modeling',
    context: 'Purdue Accelerator Architecture Lab',
    period: 'Aug 2025 – Present',
    description:
      'Extending Accel-Sim / GPGPU-Sim to support NVIDIA Hopper and Blackwell features, adding PTX ISA 8.x/9.x support with correct warp-group execution semantics, descriptor-based shared memory, and cycle-accurate tensor core pipeline timing.',
    details: [
      'Added PTX ISA 8.x/9.x support including WGMMA instructions, descriptor-based shared memory access, and warp-group synchronization primitives with correct coordination semantics',
      'Modified the cycle-level timing model to incorporate warp-group scheduling, tensor core pipeline stages, and asynchronous execution with dependency tracking and descriptor-based memory access patterns',
      'Collected execution traces using NVBit and validated simulator behavior against real GPU runs using CUTLASS kernel examples on Hopper and Blackwell hardware',
    ],
    tags: ['C++', 'CUDA', 'Accel-Sim', 'GPGPU-Sim', 'NVBit', 'PTX ISA 8/9', 'GPU Architecture'],
  },
  {
    title: 'N:M Structured Sparsity in AITemplate / CUTLASS',
    context: 'Academia Sinica — Institute of Information Science',
    period: 'Jun 2025 – Aug 2025',
    description:
      'Designed an end-to-end compiler datapath in AITemplate lowering PyTorch models to optimized CUDA kernels via NVIDIA CUTLASS, extending structured sparsity support from 2:4 to general N:M formats for Ampere sparse Tensor Cores.',
    details: [
      'Extended structured sparsity from 2:4 to general N:M formats, designing a runtime weight compression pipeline and custom CUDA kernels with warp-level parallelism and optimized memory layouts',
      'Integrated sparse operations into the AITemplate compiler stack across frontend operator config, backend kernel launch tuning, and scheduling strategies',
      'Achieved an average 1.8× speedup over dense kernels, outperforming NVIDIA\'s default 2:4 implementation in several model and layer configurations',
    ],
    tags: ['CUDA', 'C++', 'Python', 'AITemplate', 'CUTLASS', 'Sparse Computing', 'ML Systems', 'Ampere'],
  },
];
