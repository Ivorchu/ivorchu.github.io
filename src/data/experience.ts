import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    role: 'Undergraduate Research Assistant',
    company: 'Purdue University Accelerator Architecture Lab',
    location: 'West Lafayette, IN',
    period: 'Aug 2025 – Present',
    type: 'Research',
    bullets: [
      'Extending Accel-Sim / GPGPU-Sim to support NVIDIA Hopper and Blackwell architectures with PTX ISA 8.x/9.x, WGMMA, descriptor-based shared memory, and warp-group synchronization primitives',
      'Modified the cycle-level timing model for warp-group scheduling, tensor core pipeline behavior, and asynchronous execution semantics including dependency tracking and descriptor-based memory access',
      'Collected execution traces with NVBit and validated simulator output against real GPU runs using CUTLASS examples',
    ],
  },
  {
    role: 'Intern Researcher',
    company: 'Academia Sinica — Institute of Information Science',
    location: 'Taipei, Taiwan',
    period: 'Jun 2025 – Aug 2025',
    type: 'Internship',
    bullets: [
      'Designed an end-to-end compiler datapath in AITemplate, lowering PyTorch models to optimized CUDA kernels via NVIDIA CUTLASS, accelerating sparse GEMM on Ampere GPU architectures',
      'Extended structured sparsity from 2:4 to general N:M formats with a runtime compression pipeline, custom CUDA kernels using warp-level parallelism, and optimized memory layouts',
      'Integrated sparse ops into the compiler stack (frontend config, backend kernel launch tuning, scheduling), achieving an average 1.8× speedup over dense kernels',
    ],
  },
  {
    role: 'AI Software Engineer Intern',
    company: 'Industrial Technology Research Institute (ITRI)',
    location: 'Hsinchu, Taiwan',
    period: 'Jun 2024 – Aug 2024',
    type: 'Internship',
    bullets: [
      'Engineered a self-driving pipeline integrating ROS with point cloud detection models, GUI, and solid-state LiDARs (Innoviz, Velodyne M1600) across x86/x64/ARM platforms for real-time object tracking',
      'Deployed NVIDIA TensorRT and ONNX with hyperparameter tuning, achieving 3× inference throughput improvement for 3D detection models including CenterPoint, PointFormer, and KeyPoint',
      'Developed point cloud generative models (VAE + PointNet++ + Diffusion + GAN) to synthesize virtual road scenes, improving detection model performance by 15%',
    ],
  },
];
