import React from 'react';
import { Project, NavItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'drumxroll',
    title: 'DrumXRoll',
    logo: '/assets/images/DXR_logo.png',
    oneLiner: 'Teaching drum improvisation through embodied XR interaction.',
    tags: ['Unity', 'C#', 'MIDI', 'XR', 'HCI', 'Real-Time Systems'],
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
        React.createElement("p", { className: "text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-8 leading-tight" }, 
          "Improvisation depends on feel — not just accuracy."
        ),
        React.createElement("div", { className: "text-lg text-stone-600 dark:text-stone-300 space-y-6 leading-relaxed mb-12" },
            React.createElement("p", null, "Timing, coordination, and full-body awareness shape how rhythm is experienced."),
            React.createElement("p", null, "Traditional tools are precise, but they fall short when it comes to embodied musical flow."),
            React.createElement("p", null, "In XR, even small delays or unclear feedback can break immersion. If the system feels off, it feels like air-drumming.")
        ),
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

      // 6. TECH
      solution: React.createElement(React.Fragment, null,
         React.createElement("p", { className: "text-xl font-medium text-stone-800 dark:text-stone-200 mb-8" }, 
           "Designing for feel, not just correctness."
         ),
         React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-4" }, "Key system decisions"),
         React.createElement("ul", { className: "list-disc pl-5 space-y-3 text-stone-700 dark:text-stone-300 leading-relaxed" },
           React.createElement("li", null, 
              React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Real-time Unity (C#) pipeline"), 
              " optimized for musical timing, not frame-perfect visuals"
           ),
           React.createElement("li", null, 
              React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Low-latency MIDI input (Alesis Nitro)"), 
              " to preserve groove and timing feel"
           ),
           React.createElement("li", null, 
              React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "JSON-driven piano-roll mappings"), 
              " enabling rapid lesson iteration without recompiling"
           ),
           React.createElement("li", null, 
              React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Decoupled managers"), 
              " for roll rendering, audio, and lesson logic to keep interaction responsive"
           )
         )
      ),
      techStack: ['Unity', 'C#', 'MIDI', 'VR', 'HCI'],

      // 7. PROOF
      results: {
        title: "Pilot Study & Feedback",
        content: React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8" },
           React.createElement("div", { className: "bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm" },
              React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-4 uppercase text-xs tracking-wider" }, "Evaluation Instruments"),
              React.createElement("ul", { className: "space-y-3 text-sm text-stone-600 dark:text-stone-300" },
                React.createElement("li", null, React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "NASA-TLX"), " (cognitive & physical workload)"),
                React.createElement("li", null, React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "UEQ-S"), " (usability & experience quality)"),
                React.createElement("li", null, React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "CSI"), " (creative support & engagement)")
              )
           ),
           React.createElement("div", { className: "bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm" },
              React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-4 uppercase text-xs tracking-wider" }, "Key Findings"),
              React.createElement("ul", { className: "list-disc pl-4 space-y-2 text-sm text-stone-600 dark:text-stone-300" },
                React.createElement("li", null, "Low frustration with moderate demand, indicating productive challenge"),
                React.createElement("li", null, "High engagement scores, especially during self-paced modes"),
                React.createElement("li", null, "Increased voluntary repetition, suggesting intrinsic motivation")
              )
           )
        )
      },

      // 8. IMPACT
      impact: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "text-xl md:text-2xl font-medium leading-relaxed text-stone-900 dark:text-stone-50 mb-6" }, 
          "DrumXRoll lives at the intersection of real-time systems, embodied interaction, and creative learning."
        ),
        React.createElement("p", { className: "text-lg text-stone-600 dark:text-stone-300 leading-relaxed" }, 
          "It challenged us to design not just for correctness, but for how learning feels in the body — through timing, motion, and feedback."
        )
      )
    }
  },
  {
    id: 'emberlands',
    title: 'Emberlands',
    oneLiner: 'Turn personal moments into a 3D emotional landscape for gentle self-reflection.',
    logo: '/assets/images/EBL_logo.png',
    tags: ['Privacy-by-Design', 'HCI', 'Data Art', 'Creative Computing', 'WebGL', 'Embodied Interaction'],
    type: 'flagship',
    image: '/assets/images/EBL_projectcard.png',
    gif: '/assets/demos/EBL_projectcard.gif',
    hoverText: 'Explore your emotional history like a terrain—peaks, valleys, seasons.',
    description: 'Emberlands is a private, web-based creative tool that transforms personal moments into a living 3D emotional terrain—designed to support reflection through spatial experience rather than journaling, metrics, or advice.',
    links: {
      demo: '#',
      github: '#',
    },
    content: {
      // 2. PEOPLE
      people: {
        title: "Boundaries by Design",
        subtitle: "Reflective, not evaluative",
        content: React.createElement(React.Fragment, null,
          React.createElement("p", { className: "mb-6 text-lg leading-relaxed" }, 
            "Emberlands is built for reflection without judgment. Instead of asking users to score feelings or write long journal entries, it turns small moments into a visual space you can return to. The goal isn’t to explain emotions — it’s to make patterns visible enough that meaning can emerge on its own."
          ),
          React.createElement("div", { className: "mt-8 w-full" },
            React.createElement("div", { className: "bg-white dark:bg-stone-800 p-6 rounded-lg border border-stone-200 dark:border-stone-700 shadow-sm" },
              React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-3 uppercase text-xs tracking-wider" }, "Defining The Space"),
              React.createElement("ul", { className: "list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300 text-sm" },
                React.createElement("li", null, React.createElement("strong", null, "Not:"), " Therapy, diagnosis, or advice"),
                React.createElement("li", null, React.createElement("strong", null, "Not:"), " Dashboards, scores, streaks, or optimization"),
                React.createElement("li", null, React.createElement("strong", null, "Is:"), " A private emotional archive you can explore"),
                React.createElement("li", null, React.createElement("strong", null, "Is:"), " Data-driven generative art for noticing patterns")
              )
            )
          )
        ),
        images: [
           "/assets/images/EBL_workshop1.png",
           "/assets/images/EBL_workshop2.png", 
           "/assets/images/EBL_workshop3.png"
        ]
      },

      // 3. PROBLEM
      problem: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-8 leading-tight" }, 
          "People feel a lot — but most tools only help once you can already explain it."
        ),
        React.createElement("div", { className: "text-lg text-stone-600 dark:text-stone-300 space-y-6 leading-relaxed mb-12" },
            React.createElement("p", null, "Journals demand time and self-analysis. Mood trackers flatten emotion into numbers. Clinical tools can feel goal-driven or prescriptive."),
            React.createElement("p", null, "Emberlands explores an alternative: can emotional patterns become visible through form, not interpretation?")
        ),
        React.createElement("div", { className: "border-l-4 border-stone-300 dark:border-stone-700 pl-6 py-1" },
            React.createElement("p", { className: "text-xl md:text-2xl font-medium text-stone-800 dark:text-stone-200" }, 
              "Design goal: reveal structure without scoring, ranking, or advice."
            )
        )
      ),

      // 4. SYSTEM
      system: {
        title: "Emotions as Terrain",
        description: React.createElement(React.Fragment, null,
          React.createElement("p", { className: "mb-6" }, 
            "Emberlands renders emotional history as a navigable 3D terrain — a space you can move through instead of a log you scroll past."
          ),
          React.createElement("ul", { className: "space-y-2 font-medium text-stone-900 dark:text-stone-100 mb-8" },
            React.createElement("li", { className: "flex items-center gap-2" }, 
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-blue-500" }), "X (time): moments accumulate into a timeline you can traverse"
            ),
            React.createElement("li", { className: "flex items-center gap-2" }, 
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-orange-500" }), "Y (intensity): emotional weight becomes elevation"
            ),
             React.createElement("li", { className: "flex items-center gap-2" }, 
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-purple-500" }), "Z (similarity): emotionally similar moments cluster nearer together"
            )
          ),
           React.createElement("ul", { className: "list-disc pl-5 space-y-1 text-stone-700 dark:text-stone-300 text-sm mb-6" },
                React.createElement("li", null, "Valleys suggest calm / neutral states"),
                React.createElement("li", null, "Peaks mark stress, excitement, or intensity"),
                React.createElement("li", null, "Plateaus signal emotional stability")
            ),
          React.createElement("p", { className: "border-l-4 border-stone-900 dark:border-stone-100 pl-6 py-2 text-lg italic text-stone-700 dark:text-stone-300 font-serif" }, 
            "By externalizing emotion as space, Emberlands leverages spatial memory—allowing users to recall emotional periods as places rather than entries."
          )
        ),
        image: "/assets/images/EBL_view.png" 
      },

      // 5. MODES
      modes: {
        title: "The Core Experience",
        items: [
          {
            title: "Log a Moment",
            subtitle: "Low Friction Input",
            description: "Capture a short entry in seconds (text, voice, or image). No prompts, no forms — just enough to preserve the moment."
          },
          {
            title: "Inference",
            subtitle: "No Mood Scores",
            description: "The system infers emotion, intensity, and themes automatically so users don’t need to label themselves or pick from a mood list."
          },
          {
            title: "Terrain Generation",
            subtitle: "Living Landscape",
            description: "Entries become points in a living terrain that grows over time — shaping hills, valleys, and clusters as your history evolves."
          },
          {
            title: "Discovery",
            subtitle: "Patterns, Not Judgments",
            description: "Explore by orbiting, scrubbing time, or filtering by theme. Patterns show up as gentle overlays — never as scores or “insights” that tell you what to feel."
          }
        ]
      },

      // 6. TECH
      solution: React.createElement(React.Fragment, null,
         React.createElement("p", { className: "text-xl font-medium text-stone-800 dark:text-stone-200 mb-8" }, 
           "Emberlands treats technology as invisible scaffolding — the point is a calm, responsive space for reflection."
         ),
         React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-4" }, "Under the Hood (Built to Stay Private)"),
         React.createElement("ul", { className: "list-disc pl-5 space-y-3 text-stone-700 dark:text-stone-300 leading-relaxed mb-6" },
           React.createElement("li", null, 
              React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Frontend"), 
              ": React / Next.js with interactive 3D navigation (Three.js/WebGL)."
           ),
           React.createElement("li", null, 
              React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Processing"), 
              ": NLP for emotion/theme extraction and embedding-based clustering."
           ),
           React.createElement("li", null, 
              React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Privacy"), 
              ": Encrypted storage with local-first option."
           )
         ),
         React.createElement("p", { className: "text-stone-600 dark:text-stone-400 italic" }, "The visualization is designed to load quickly and progressively as history grows.")
      ),
      techStack: ['React', 'Three.js', 'WebGL', 'NLP', 'D3.js'],

      // 7. RESULTS
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
              React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-4 uppercase text-xs tracking-wider" }, "Pattern Discovery"),
              React.createElement("ul", { className: "list-disc pl-4 space-y-2 text-sm text-stone-600 dark:text-stone-300" },
                React.createElement("li", null, "Cycles and repeated emotional seasons"),
                React.createElement("li", null, "Sudden spikes / transitions"),
                React.createElement("li", null, "Gentle overlays + reflective prompts"),
                React.createElement("li", null, "No prescriptions, no ranking")
              )
           )
        )
      },

      // 8. IMPACT
      impact: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "text-xl md:text-2xl font-medium leading-relaxed text-stone-900 dark:text-stone-50 mb-6" }, 
          "Emberlands explores what happens when emotional data is treated not as something to fix or optimize, but as something you can inhabit."
        ),
        React.createElement("p", { className: "text-lg text-stone-600 dark:text-stone-300 leading-relaxed" }, 
          "I built it to make reflection feel less like reporting and more like wandering — returning to moments, noticing clusters, and recognizing emotional “seasons” over time."
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