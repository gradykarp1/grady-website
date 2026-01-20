export interface AIContext {
  title?: string; // Optional label for project/initiative/phase
  situation: string;
  approach: string;
  technicalWork: string;
  lessonsLearned: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  aiContext: AIContext[];
}

export interface ExperienceWithId extends Experience {
  id: number;
}
