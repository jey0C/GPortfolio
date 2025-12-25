export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  tags: string[];
  type: 'flagship' | 'standard';
  image: string;
  gif?: string;        // Optional GIF for hover state
  hoverText?: string;  // Optional text for popout overlay
  description: string; // Short description for cards
  content?: ProjectContent; // Deep dive content
  links?: {
    demo?: string;
    github?: string;
  };
}

export interface ProjectContent {
  context: string;
  problem: string;
  solution: string;
  techStack: string[];
  challenges: string;
  learnings: string;
  images?: string[];
}

export interface NavItem {
  label: string;
  path: string;
}