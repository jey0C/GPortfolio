import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'drumxroll',
    title: 'DrumXRoll',
    oneLiner: 'An immersive XR rhythmic experience bridging physical gesture and digital sound.',
    tags: ['XR', 'Unity', 'C#', 'Interaction Design'],
    type: 'flagship',
    image: '/assets/images/DXR_projectcard.jpg',
    gif: '/assets/demos/DXR_projectcard.gif',
    hoverText: 'Built from my love for music — and the joy of learning it',
    description: 'A VR drumming system that uses haptic feedback and spatial audio to create a tangible musical instrument in a virtual space.',
    links: {
      demo: '#',
      github: '#',
    },
    content: {
      context: 'Developed as a capstone exploration into embodied interaction, DrumXRoll challenges the weightlessness of VR by introducing rhythmic friction.',
      problem: 'Most VR music apps feel like tapping glass—there is no sense of impact or rebound. Musicians rely on tactile feedback to keep time, which digital interfaces often lack.',
      solution: 'I engineered a custom physics-based rebound system in Unity that predicts stick velocity and triggers haptic pulses 15ms before visual contact, simulating the sensation of hitting a taut membrane.',
      techStack: ['Unity 3D', 'C#', 'SteamVR SDK', 'FMOD Audio'],
      challenges: 'Optimizing the audio latency pipeline to be under 10ms to ensure the drumming felt rhythmic and responsive, not sluggish.',
      learnings: 'The importance of "phantom haptics"—using audio and visual cues to trick the brain into feeling weight that isn\'t there.',
    }
  },
  {
    id: 'emberlands',
    title: 'Emberlands',
    oneLiner: 'A data-driven generative art landscape responsive to real-time environmental APIs.',
    tags: ['WebGL', 'Three.js', 'React', 'Data Viz'],
    type: 'flagship',
    image: '/assets/images/EBL_projectcard.jpg',
    gif: '/assets/demos/EBL_projectcard.gif',
    hoverText: 'Because I love art — and self-reflection.',
    description: 'An interactive WebGL world that changes its visual mood based on live global temperature and wind data.',
    links: {
      demo: '#',
      github: '#',
    },
    content: {
      context: 'A personal study on making invisible global datasets emotionally resonant through visual metaphors.',
      problem: 'Climate data is often presented as cold charts and graphs. I wanted to create a system where users could "feel" the data through atmosphere and color.',
      solution: 'Built a procedurally generated terrain system in Three.js. The shader uniforms are bound to a Node.js backend that fetches live weather API data, shifting the color palette from cool blues to alarming reds based on temperature anomalies.',
      techStack: ['React', 'Three.js (R3F)', 'Node.js', 'OpenWeatherMap API', 'GLSL'],
      challenges: 'Managing performance while rendering thousands of instanced geometry meshes for the vegetation.',
      learnings: 'Balancing artistic intent with the chaotic nature of real-time data inputs.',
    }
  },
  {
    id: 'ocr-pipeline',
    title: 'Distributed OCR Pipeline',
    oneLiner: 'High-throughput document processing system focusing on concurrency and fault tolerance.',
    tags: ['Go', 'Docker', 'Kubernetes', 'Redis'],
    type: 'standard',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'A scalable backend service capable of processing 10k+ document pages per hour with 99.9% uptime.',
    links: {
      github: '#',
    },
    content: {
      context: 'Built to understand the constraints of distributed processing queues.',
      problem: 'Sequential processing of large PDF dumps was too slow and prone to single-point failures.',
      solution: 'Architected a microservices-based worker pool pattern using Go and Redis streams. The system handles retries, dead-letter queues, and autoscaling based on load.',
      techStack: ['Go', 'Redis', 'Docker', 'Tesseract'],
      challenges: 'Handling race conditions when multiple workers attempted to claim the same job segment.',
      learnings: 'The value of idempotency in distributed system design.',
    }
  }
];

export const NAV_ITEMS = [
  { label: 'Work', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Play', path: '/play' },
];

export const PLAY_ITEMS = [
  {
    id: 'analog-synth',
    title: 'Modular Synthesis Sketches',
    category: 'Music',
    image: 'https://picsum.photos/600/600?random=10',
    link: '#'
  },
  {
    id: 'glsl-daily',
    title: 'Daily GLSL Shaders',
    category: 'Creative Code',
    image: 'https://picsum.photos/600/600?random=11',
    link: '#'
  },
  {
    id: 'film-photography',
    title: '35mm Diaries: Tokyo',
    category: 'Photography',
    image: 'https://picsum.photos/600/600?random=12',
    link: '#'
  },
  {
    id: 'generative-plotter',
    title: 'Plotter Drawings',
    category: 'Generative Art',
    image: 'https://picsum.photos/600/600?random=13',
    link: '#'
  }
];

// Placeholder for Resume URL.
// Replace '#' with your actual PDF URL.
export const RESUME_URL = "#";