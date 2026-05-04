import type { Course } from '../types';

export const courses: Course[] = [
  // Architecture & Hardware
  { name: 'Computer Architecture', code: 'ECE 468', category: 'Architecture & Hardware' },
  { name: 'Architecture of Parallel Computers', code: 'ECE 530', category: 'Architecture & Hardware' },
  { name: 'Microprocessor Systems & Interfacing', code: 'ECE 362', category: 'Architecture & Hardware' },
  { name: 'Digital Systems Senior Laboratory', code: 'ECE 437', category: 'Architecture & Hardware' },
  { name: 'Digital Integrated Circuits', code: 'ECE 480', category: 'Architecture & Hardware' },

  // Systems & Software
  { name: 'Operating Systems Engineering', code: 'ECE 469', category: 'Systems & Software' },
  { name: 'Compilers: Principles & Practice', code: 'CS 352', category: 'Systems & Software' },
  { name: 'Data Structures & Algorithms', code: 'ECE 368', category: 'Systems & Software' },
  { name: 'Parallel Computing', code: 'CS 525', category: 'Systems & Software' },
  { name: 'Communication Networks', code: 'ECE 438', category: 'Systems & Software' },

  // AI & Machine Learning
  { name: 'Artificial Intelligence', code: 'ECE 570', category: 'AI & Machine Learning' },
  { name: 'Machine Learning', code: 'ECE 595', category: 'AI & Machine Learning' },
  { name: 'Deep Learning Systems', code: 'ECE 595', category: 'AI & Machine Learning' },

  // Math & Theory
  { name: 'Linear Algebra', code: 'MA 265', category: 'Math & Theory' },
  { name: 'Probability & Statistics', code: 'ECE 302', category: 'Math & Theory' },
  { name: 'Signals & Systems', code: 'ECE 301', category: 'Math & Theory' },
];
