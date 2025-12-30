import React from 'react';
import { Project, NavItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'drumxroll',
    title: 'DrumXRoll',
    logo: '/assets/images/DXR_logo.png', // Added logo for header
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
        // Removed logo property from here
        content: React.createElement(React.Fragment, null,
          React.createElement("p", { className: "mb-6 text-lg leading-relaxed" }, 
            "Before building the system, we worked directly with drummers to understand how timing, feel, and coordination are learned—not just practiced."
          ),
          // Changed grid to single column (full width) for wider insights card
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
        // Local images
        images: [
           "/assets/images/DXR_workshop1.jpg", 
           "/assets/images/DXR_workshop2.jpg",
           "/assets/images/DXR_workshop3.jpg"
        ]
      },

      // 3. CONTEXT -> CHALLENGE maps to 'problem'
      problem: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "mb-4 text-xl font-medium text-stone-800 dark:text-stone-200" }, 
          "Improvisation depends on feel, timing, and coordination across the body."
        ),
        React.createElement("p", { className: "mb-4" }, 
          "Traditional tools are excellent for accuracy, but fall short for embodied musical flow."
        ),
        React.createElement("p", { className: "mb-4" }, 
          "In XR, even small delays or unclear feedback can break immersion. If can break creativity and flow. The challenge wasn’t just technical — it was experiential."
        )
      ),

      // 4. SYSTEM
      system: {
        title: "A Hybrid XR Instrument",
        description: React.createElement(React.Fragment, null,
          React.createElement("p", { className: "mb-6" }, 
            "DrumXRoll is a hybrid XR instrument that augments a real electronic drum kit instead of replacing it."
          ),
          React.createElement("ul", { className: "space-y-2 font-medium text-stone-900 dark:text-stone-100 mb-8" },
            React.createElement("li", { className: "flex items-center gap-2" }, 
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-blue-500" }), "Real electronic drum kit"
            ),
            React.createElement("li", { className: "flex items-center gap-2" }, 
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-pink-500" }), "VR headset"
            ),
            React.createElement("li", { className: "flex items-center gap-2" }, 
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }), "Piano-roll-inspired rhythmic visualization"
            )
          ),
          React.createElement("blockquote", { className: "border-l-4 border-stone-900 dark:border-stone-100 pl-6 py-2 text-xl italic text-stone-700 dark:text-stone-300 font-serif" }, 
            "“Instead of reading notation, drummers play into falling visual cues that reinforce timing and musical flow.”"
          )
        ),
        image: "https://placehold.co/800x600/292524/FFFFFF?text=System+Diagram"
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
    oneLiner: 'Emotional data as a landscape you can explore, not analyze.',
    tags: ['HCI', 'Data Art', 'Creative Computing', 'WebGL', 'Embodied Interaction'],
    type: 'flagship',
    image: '/assets/images/EBL_projectcard.jpg',
    gif: '/assets/demos/EBL_projectcard.gif',
    hoverText: 'What if feelings were a place you could visit?',
    description: 'Emberlands is a private, web-based creative tool that transforms personal moments into a living 3D emotional terrain—designed to support reflection through spatial experience rather than journaling, metrics, or advice.',
    links: {
      demo: '#',
      github: '#',
    },
    content: {
      people: {
        title: "Design Intent",
        subtitle: "Philosophy & Constraints",
        content: React.createElement(React.Fragment, null,
          React.createElement("p", { className: "mb-6 text-lg leading-relaxed" }, 
            "Emberlands was deliberately designed with strong boundaries. It is not a therapy replacement, a mood tracker, or a productivity tool. It is a private emotional archive."
          ),
          React.createElement("div", { className: "mt-8 w-full" },
            React.createElement("div", { className: "bg-white dark:bg-stone-800 p-6 rounded-lg border border-stone-200 dark:border-stone-700 shadow-sm" },
              React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-3 uppercase text-xs tracking-wider" }, "Defining The Space"),
              React.createElement("ul", { className: "list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300 text-sm" },
                React.createElement("li", null, React.createElement("strong", null, "Not:"), " A dashboard, a social platform, or a place for advice."),
                React.createElement("li", null, React.createElement("strong", null, "Is:"), " A space for slow, self-directed reflection."),
                React.createElement("li", null, React.createElement("strong", null, "Is:"), " Emotional information treated as generative material."),
                React.createElement("li", null, React.createElement("strong", null, "Is:"), " A system that reveals structure without judgment.")
              )
            )
          )
        ),
        images: [
           "/assets/images/EBL_projectcard.jpg",
           "/assets/images/EBL_projectcard.jpg" 
        ]
      },
      problem: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-8 leading-tight" }, 
          "People experience emotions constantly, yet most tools ask for interpretation before understanding."
        ),
        React.createElement("div", { className: "text-lg text-stone-600 dark:text-stone-300 space-y-6 leading-relaxed mb-12" },
            React.createElement("p", null, "Journals require sustained effort and self-analysis. Mood trackers compress emotional life into numbers and charts. Therapeutic tools are often clinical and goal-driven."),
            React.createElement("p", null, "As a result, emotional patterns usually become visible only in hindsight—long after they’ve shaped behavior."),
            React.createElement("p", null, "Emberlands explores a different question: ", React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "What if emotional patterns could be seen and felt before they are explained?"))
        ),
        React.createElement("div", { className: "border-l-4 border-stone-300 dark:border-stone-700 pl-6 py-1" },
            React.createElement("p", { className: "text-xl md:text-2xl font-medium text-stone-800 dark:text-stone-200" }, 
              "The goal: Reveal structure without judgment."
            )
        )
      ),
      system: {
        title: "Emotions as Terrain",
        description: React.createElement(React.Fragment, null,
          React.createElement("p", { className: "mb-6" }, 
            "At the heart of Emberlands is the emotional landscape metaphor. Instead of timelines or charts, emotional history is rendered as a navigable 3D terrain."
          ),
          React.createElement("ul", { className: "space-y-2 font-medium text-stone-900 dark:text-stone-100 mb-8" },
            React.createElement("li", { className: "flex items-center gap-2" }, 
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-blue-500" }), "Valleys represent calm"
            ),
            React.createElement("li", { className: "flex items-center gap-2" }, 
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-orange-500" }), "Peaks reflect intensity"
            ),
            React.createElement("li", { className: "flex items-center gap-2" }, 
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-stone-500" }), "Plateaus indicate stability"
            )
          ),
          React.createElement("p", { className: "border-l-4 border-stone-900 dark:border-stone-100 pl-6 py-2 text-lg italic text-stone-700 dark:text-stone-300 font-serif" }, 
            "By externalizing emotion as space, Emberlands leverages spatial memory—allowing users to recall emotional periods as places rather than entries."
          )
        ),
        image: "/assets/images/EBL_projectcard.jpg" 
      },
      modes: {
        title: "The Core Experience",
        items: [
          {
            title: "Log a Moment",
            subtitle: "Low Friction Input",
            description: "Capture moments through short text, voice, or images without interrupting flow."
          },
          {
            title: "Inference",
            subtitle: "No Manual Labeling",
            description: "The system extracts emotional signals automatically, removing the need to score feelings."
          },
          {
            title: "Terrain Generation",
            subtitle: "Living Landscape",
            description: "Each entry contributes to a growing 3D emotional landscape that evolves over time."
          },
          {
            title: "Discovery",
            subtitle: "Curiosity over Evaluation",
            description: "Navigate to notice clusters, shifts, and rhythms. Reveal structure without judgment."
          }
        ]
      },
      solution: React.createElement(React.Fragment, null,
         React.createElement("p", { className: "text-xl font-medium text-stone-800 dark:text-stone-200 mb-8" }, 
           "Technology serves the experience—not the other way around."
         ),
         React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-4" }, "Technical Architecture"),
         React.createElement("ul", { className: "list-disc pl-5 space-y-3 text-stone-700 dark:text-stone-300 leading-relaxed" },
           React.createElement("li", null, 
              React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Frontend"), 
              ": React / Next.js with Three.js/WebGL for 3D rendering and D3.js for overlays."
           ),
           React.createElement("li", null, 
              React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Processing"), 
              ": NLP for emotion/theme extraction and embedding-based clustering for similarity."
           ),
           React.createElement("li", null, 
              React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Privacy"), 
              ": Encrypted storage with offline-first considerations."
           )
         )
      ),
      techStack: ['React', 'Three.js', 'WebGL', 'NLP', 'D3.js'],
      results: {
        title: "Privacy & Ethics",
        content: React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8" },
           React.createElement("div", { className: "bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm" },
              React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-4 uppercase text-xs tracking-wider" }, "Privacy by Design"),
              React.createElement("ul", { className: "space-y-3 text-sm text-stone-600 dark:text-stone-300" },
                React.createElement("li", null, "Data is private by default"),
                React.createElement("li", null, "No public sharing or social features"),
                React.createElement("li", null, "No emotional ranking or comparison"),
                React.createElement("li", null, "Local-first or encrypted storage options")
              )
           ),
           React.createElement("div", { className: "bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm" },
              React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-4 uppercase text-xs tracking-wider" }, "MVP Scope"),
              React.createElement("ul", { className: "list-disc pl-4 space-y-2 text-sm text-stone-600 dark:text-stone-300" },
                React.createElement("li", null, "Text-based logging & Basic emotion extraction"),
                React.createElement("li", null, "Time- and intensity-based 3D landscape"),
                React.createElement("li", null, "Simple pattern overlays"),
                React.createElement("li", null, React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Excluded:"), " Social features, Advice, Gamification")
              )
           )
        )
      },
      impact: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "text-xl md:text-2xl font-medium leading-relaxed text-stone-900 dark:text-stone-50 mb-6" }, 
          "Emberlands explores what happens when emotional data is treated not as something to fix, optimize, or diagnose—but as something to inhabit."
        ),
        React.createElement("p", { className: "text-lg text-stone-600 dark:text-stone-300 leading-relaxed" }, 
          "By turning lived experience into space, the project reframes reflection as exploration: slow, personal, and deeply human."
        )
      )
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