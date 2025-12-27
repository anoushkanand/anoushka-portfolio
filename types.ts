
export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  logo: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  videoUrl?: string;
  image: string;
  problemStatement: string;
  insights: string;
}

export interface ResearchPaper {
  title: string;
  venue: string;
  year: string;
  abstract: string;
  link?: string;
  authors?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Skill {
  category: string;
  items: { name: string; level: number }[];
  icon: string;
}
