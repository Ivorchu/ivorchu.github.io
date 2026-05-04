export interface Project {
  title: string;
  description: string;
  tags: string[];
  period?: string;
  highlights?: string[];
  github?: string;
  demo?: string;
}

export interface ResearchItem {
  title: string;
  context: string;
  period: string;
  description: string;
  details: string[];
  tags: string[];
  link?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
}

export interface Course {
  name: string;
  code?: string;
  category: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
