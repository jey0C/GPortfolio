import React from 'react';
import { Project, NavItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'drumxroll',
    title: 'DrumXRoll',
    logo: '/assets/images/DXR_logo.png',
    oneLiner: 'Teaching drum improvisation through embodied XR interaction.',
    tags: ['XR', 'Unity', 'C#', 'HCI Research'],
    type: 'flagship',
    image: '/assets/images/DXR_projectcard.jpg',
    gif: '/assets/demos/DXR_projectcard.gif',
    hoverText: 'Built from my love for drums — and the joy of learning it',
    description: 'DrumXRoll is a VR drumming system that combines a real electronic drum kit with XR visuals, helping drummers experience improvisation—not just practice patterns.',
    links: {
      demo: '#',
      github: '#',
    },
    content: {
      // 2. PEOPLE
      people: {
        title: "Designing With Drummers",
        subtitle: "Human-centered design and co-creation",
        content: React.createElement(React.Fragment, null,
          React.createElement("p", { className: "mb-6 text-lg leading-relaxed" }, 
            "Before building the system, we worked directly with drummers to understand how timing, feel, and coordination are learned—not just practiced."
          ),
          React.createElement("div", { className: "mt-8 w-full" },
            React.createElement("div", { className: "bg-white dark:bg-stone-800 p-6 rounded-lg border border-stone-200 dark:border-stone-700 shadow-sm" },
              React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-3 uppercase text-xs tracking-wider" }, "Co-Design Insights"),
              React.createElement("ul", { className: "list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300 text-sm" },
                React.createElement("li", null, "Progressive limb independence felt most natural"),
                React.createElement("li", null, "Pop grooves supported creative flexibility"),
                React.createElement("li", null, "Visual overload breaks immersion quickly"),
                React.createElement("li", null, "Customization is essential")
              )
            )
          )
        ),
        images: [
           "/assets/images/DXR_workshop1.jpg", 
           "/assets/images/DXR_workshop2.jpg",
           "/assets/images/DXR_workshop3.jpg"
        ]
      },

      // 3. CONTEXT -> CHALLENGE maps to 'problem'
      problem: React.createElement(React.Fragment, null,
        // Big Statement
        React.createElement("p", { className: "text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-8 leading-tight" }, 
          "Improvisation depends on feel — not just accuracy."
        ),
        // Supporting Text
        React.createElement("div", { className: "text-lg text-stone-600 dark:text-stone-300 space-y-6 leading-relaxed mb-12" },
            React.createElement("p", null, "Timing, coordination, and full-body awareness shape how rhythm is experienced."),
            React.createElement("p", null, "Traditional tools are precise, but they fall short when it comes to embodied musical flow."),
            React.createElement("p", null, "In XR, even small delays or unclear feedback can break immersion. If the system feels off, it feels like air-drumming.")
        ),
        // Emotional Anchor / Insight
        React.createElement("div", { className: "border-l-4 border-stone-300 dark:border-stone-700 pl-6 py-1" },
            React.createElement("p", { className: "text-xl md:text-2xl font-medium text-stone-800 dark:text-stone-200" }, 
              "The challenge wasn’t just technical — it was experiential."
            )
        )
      ),

      // 4. SYSTEM
      system: {
        title: "A Hybrid XR Instrument",
        description: React.createElement(React.Fragment, null,
          React.createElement("p", { className: "mb-6" }, 
            "DrumXRoll augments a real electronic drum kit with XR-based visual feedback."
          ),
          React.createElement("p", { className: "mb-6" }, 
            "The physical instrument remains central, while XR is used to externalize timing and rhythmic structure during play."
          ),
          React.createElement("ul", { className: "space-y-2 font-medium text-stone-900 dark:text-stone-100 mb-8" },
            React.createElement("li", { className: "flex items-center gap-2" }, 
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-blue-500" }), "Physical electronic drum kit"
            ),
            React.createElement("li", { className: "flex items-center gap-2" }, 
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-pink-500" }), "XR headset"
            ),
            React.createElement("li", { className: "flex items-center gap-2" }, 
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }), "Real-time rhythmic visualization"
            )
          ),
          React.createElement("p", { className: "border-l-4 border-stone-900 dark:border-stone-100 pl-6 py-2 text-lg italic text-stone-700 dark:text-stone-300 font-serif" }, 
            "DrumXRoll adds a visual layer to drumming without replacing existing instruments or techniques."
          )
        ),
        images: [
           "/assets/images/DXR_physical.jpg",
           "/assets/images/DXR_XRview.jpg"
        ]
      },

      // 5. LEARNING MODES
      modes: {
        title: "Learning Through Play and Constraint",
        items: [
          {
            title: "Watch & Listen",
            subtitle: "Internalize timing and structure",
            description: "Users observe the visual cues falling onto the drums to understand the rhythm before playing."
          },
          {
            title: "Try Yourself",
            subtitle: "Real-time feedback loop",
            description: "Play along with the system. Visual and audio feedback confirms accuracy instantly."
          },
          {
            title: "Compose on the Fly",
            subtitle: "Call and response",
            description: "Take turns improvising with the system, filling in the gaps left by the backing track."
          },
          {
            title: "Constrain & Create",
            subtitle: "Sparking creativity",
            description: "Improvise under limitations. Constraint-led learning consistently encouraged exploration over repetition."
          }
        ]
      },

      // 6. TECH (Mapped to solution for fallback, but used specifically in custom layout)
      solution: React.createElement(React.Fragment, null,
         React.createElement("p", { className: "mb-4" }, 
           "If it didn’t feel musical, it wasn’t acceptable."
         ),
         React.createElement("ul", { className: "list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300" },
           React.createElement("li", null, "Unity (C#) modular real-time pipeline"),
           React.createElement("li", null, "Low-latency MIDI input (Alesis Nitro) with tight sync"),
           React.createElement("li", null, "JSON-based piano-roll mappings for fast iteration"),
           React.createElement("li", null, "Separate managers for rolls, audio, and lesson logic")
         )
      ),
      techStack: ['Unity', 'C#', 'MIDI', 'VR', 'HCI'],

      // 7. PROOF
      results: {
        title: "Pilot Study & Feedback",
        content: React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
           React.createElement("div", { className: "bg-stone-50 dark:bg-stone-900 p-4 rounded-lg" },
              React.createElement("h5", { className: "font-bold mb-1" }, "Instruments"),
              React.createElement("p", { className: "text-sm text-stone-500" }, "NASA-TLX, UEQ-S, CSI")
           ),
           React.createElement("div", { className: "bg-stone-50 dark:bg-stone-900 p-4 rounded-lg" },
              React.createElement("h5", { className: "font-bold mb-1" }, "Results"),
              React.createElement("ul", { className: "text-sm text-stone-500 list-disc pl-4" },
                React.createElement("li", null, "Low frustration, moderate demand"),
                React.createElement("li", null, "Strong engagement metrics"),
                React.createElement("li", null, "Self-paced repetition boost")
              )
           )
        )
      },

      // 8. IMPACT
      impact: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "text-xl md:text-2xl font-medium leading-relaxed" }, 
          "DrumXRoll sits at the intersection of real-time systems, embodied interaction, and creative learning tools. It pushed our team to design not just for correctness, but for how learning feels in the body."
        )
      )
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

export const RESUME_URL = "/assets/docs/resume.pdf";