import type { SkillGroup } from '../types';

export const languages: string[] = [
  'C/C++', 'Python', 'Java', 'SystemVerilog', 'Assembly', 'CUDA / PTX', 'R', 'JavaScript',
];

export const tools: SkillGroup[] = [
  {
    category: 'EDA & RTL',
    items: ['QuestaSim', 'Synopsys DC', 'Innovus', 'Verilator'],
  },
  {
    category: 'GPU & Simulation',
    items: ['GPGPU-Sim', 'Accel-Sim', 'Ramulator', 'NVBit', 'CUTLASS', 'PTX / PTXAS'],
  },
  {
    category: 'ML Frameworks',
    items: ['PyTorch', 'TensorFlow', 'TensorRT', 'ONNX', 'Keras'],
  },
  {
    category: 'Embedded & Robotics',
    items: ['ESP32', 'FreeRTOS', 'MicroPython', 'MQTT', 'ROS', 'OpenCV'],
  },
  {
    category: 'Dev Tools',
    items: ['Linux', 'GDB', 'CMake', 'Make', 'Git'],
  },
];
