import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  logo?: string;       // Optional logo to replace text title
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
  // Standard fields (Legacy/Generic)
  context?: ReactNode;
  problem?: ReactNode;
  solution?: ReactNode;
  techStack: string[];
  challenges?: string;
  learnings?: ReactNode;
  images?: string[];

  // New Structured Fields (Custom Layouts)
  people?: {
    title: string;
    subtitle: string;
    logo?: string; 
    content: ReactNode;
    images?: string[];
  };
  system?: {
    title: string;
    description: ReactNode;
    image?: string;
    images?: string[]; // Added support for multiple system images
  };
  modes?: {
    title: string;
    items: { title: string; subtitle: string; description: string }[];
  };
  results?: {
    title: string;
    content: ReactNode;
  };
  impact?: ReactNode; // "Why it matters"
}

export interface NavItem {
  label: string;
  path: string;
}