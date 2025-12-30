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
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-pink-500" }), "XR headset view"
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
      techTitle: "Making It Feel Musical",
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
          
          // EMOTIONAL PALETTE SHOWCASE
          React.createElement("div", { className: "mt-12" },
            React.createElement("h4", { className: "text-2xl font-bold text-center mb-2 text-stone-900 dark:text-stone-50" }, "Emotional Palette"),
            React.createElement("p", { className: "text-center text-stone-600 dark:text-stone-400 mb-10 max-w-2xl mx-auto italic" }, 
              "The landscape is painted with these eight fundamental energies. Understanding their form helps reveal the architecture of your inner world."
            ),
            React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" },
              [
                { name: 'Joy', color: 'bg-amber-400', desc: 'A sense of vibrant warmth, connection, and fulfillment.', meta: 'Luminous amber peaks that catch the light.' },
                { name: 'Sorrow', color: 'bg-blue-500', desc: 'The quiet depth of loss, reflection, or gentle release.', meta: 'Deep blue valleys where shadows and clarity reside.' },
                { name: 'Anger', color: 'bg-red-500', desc: 'A sharp surge of energy, boundaries, or righteous heat.', meta: 'Jagged red ridges that command immediate presence.' },
                { name: 'Fear', color: 'bg-purple-500', desc: 'An alert state of uncertainty, protection, or perceived risk.', meta: 'Misty purple heights shrouded in vigilance.' },
                { name: 'Calm', color: 'bg-emerald-500', desc: 'The steady pulse of peace, presence, and internal balance.', meta: 'Expansive emerald plateaus of quiet stability.' },
                { name: 'Excitement', color: 'bg-pink-500', desc: 'High-frequency anticipation and buoyant, outward energy.', meta: 'Bright pink sparks rising above the horizon.' },
                { name: 'Anxiety', color: 'bg-orange-500', desc: 'A restless vibration of worry or future-oriented tension.', meta: 'Shifting orange dunes that never quite settle.' },
                { name: 'Awe', color: 'bg-cyan-400', desc: 'The overwhelming realization of something vast and wondrous.', meta: 'Luminous cyan horizons that stretch the spirit.' },
              ].map(e => 
                React.createElement("div", { key: e.name, className: "bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 p-5 rounded-xl flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300" },
                  // Header
                  React.createElement("div", { className: "flex items-center gap-3 mb-3" },
                    React.createElement("span", { className: `w-3 h-3 rounded-full ${e.color}` }),
                    React.createElement("h5", { className: "font-bold text-lg text-stone-900 dark:text-stone-50" }, e.name)
                  ),
                  // Desc
                  React.createElement("p", { className: "text-sm text-stone-600 dark:text-stone-300 mb-4 flex-grow leading-relaxed" }, e.desc),
                  // Separator
                  React.createElement("div", { className: "w-full h-px bg-stone-100 dark:bg-stone-700 mb-3" }),
                  // Metaphor
                  React.createElement("div", null,
                     React.createElement("span", { className: "block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1" }, "Landscape Metaphor"),
                     React.createElement("p", { className: "text-xs italic text-stone-500 dark:text-stone-400 font-serif" }, e.meta)
                  )
                )
              )
            )
          )
        ),
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
          // MODIFIED: Standard white bullets
          React.createElement("ul", { className: "list-disc pl-5 space-y-2 font-medium text-stone-900 dark:text-stone-100 mb-8" },
            React.createElement("li", null, "X (time): moments accumulate into a timeline you can traverse"),
            React.createElement("li", null, "Y (intensity): emotional weight becomes elevation"),
            React.createElement("li", null, "Z (similarity): emotionally similar moments cluster nearer together")
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
      techTitle: "Designing for Emotional Presence",
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
  oneLiner: 'A cross-platform OCR system using a bounded work queue, worker pool, and a framed TCP protocol.',
  tags: ['C++20', 'Qt', 'OpenCV', 'Tesseract', 'TCP', 'Concurrency'],
  type: 'standard',

  // HERO (use the polished infographic)
  image: '/assets/images/OCR_hero.png',

  // no gif
  hoverText: 'Backpressure + worker pools + OCR preprocessing — systems work that stays stable under load.',
  description:
    'A Qt desktop client batches image uploads to a multi-threaded C++ server. The server preprocesses images with OpenCV, runs Tesseract OCR, and returns OCR text + processing time per file.',

  links: {
    demo: '#',
    github: '#',
  },

  content: {
    // 2) OVERVIEW / WHAT I BUILT
    people: {
      title: "Built Like a Real System",
      subtitle: "Client–server + backpressure + parallel workers",
      content: React.createElement("p", { className: "mb-6 text-lg leading-relaxed" },
        "I built this as a systems-first OCR pipeline: batch uploads, reliable networking, and predictable throughput. The goal wasn’t just to run OCR — it was to keep the UI responsive and the server stable during bursty workloads."
      ),
      
      // MOVED: The card is now in featureBox for custom side-by-side layout
      featureBox: React.createElement("div", { className: "w-full" },
        React.createElement("div", { className: "bg-white dark:bg-stone-800 p-6 rounded-lg border border-stone-200 dark:border-stone-700 shadow-sm" },
          React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-3 uppercase text-xs tracking-wider" }, "What makes it robust"),
          React.createElement("ul", { className: "list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300 text-sm" },
            React.createElement("li", null, React.createElement("strong", null, "Framed TCP messages"), " prevent boundary bugs and partial reads"),
            React.createElement("li", null, React.createElement("strong", null, "Bounded queue backpressure"), " caps memory during bursts"),
            React.createElement("li", null, React.createElement("strong", null, "Worker pool parallelism"), " scales OCR work across CPU cores"),
            React.createElement("li", null, React.createElement("strong", null, "Per-file results"), " return text + timing for transparency")
          )
        )
      ),

      images: [
        "/assets/images/OCR_client_ui.png",
        "/assets/images/OCR_server_logs.png"
      ]
    },

    // 2.5 PROCESS (Separate section for visual comparison)
    process: {
      title: "Preprocessing Pipeline",
      items: [
        { image: "/assets/images/OCR_input_example.jpg", caption: "Raw Input: Noisy & Skewed", tag: "Before" },
        { image: "/assets/images/OCR_output_example.jpg", caption: "Processed: Binarized & Deskewed", tag: "After" }
      ]
    },

    // 3) CHALLENGE
    problem: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-8 leading-tight" },
        "OCR becomes a distributed-systems problem the moment you batch it."
      ),
      React.createElement("div", { className: "text-lg text-stone-600 dark:text-stone-300 space-y-6 leading-relaxed mb-12" },
        React.createElement("p", null,
          "Sequential OCR falls behind quickly when users upload many files. Preprocessing and OCR are CPU-heavy, and without backpressure the server can balloon memory usage."
        ),
        React.createElement("p", null,
          "Networking adds another trap: TCP is a byte stream — without explicit framing, message boundaries break and results get corrupted."
        )
      ),
      React.createElement("div", { className: "border-l-4 border-stone-300 dark:border-stone-700 pl-6 py-1" },
        React.createElement("p", { className: "text-xl md:text-2xl font-medium text-stone-800 dark:text-stone-200" },
          "Goal: correct per-file results + stable throughput + honest progress in the UI."
        )
      )
    ),

    // 4) SYSTEM (use the clean job-queue diagram)
    system: {
      title: "System Architecture",
      description: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "mb-6" },
          "A Qt client streams image packets to a C++ server over TCP. The server enqueues jobs into a bounded queue, then workers dequeue in parallel to preprocess + OCR and send results back per file."
        ),
        React.createElement("ul", { className: "space-y-2 font-medium text-stone-900 dark:text-stone-100 mb-8" },
          React.createElement("li", { className: "flex items-center gap-2" },
            React.createElement("span", { className: "w-2 h-2 rounded-full bg-blue-500" }),
            "Client sends framed packets (filename + image bytes)"
          ),
          React.createElement("li", { className: "flex items-center gap-2" },
            React.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }),
            "Server enqueues into a bounded Producer–Consumer queue"
          ),
          React.createElement("li", { className: "flex items-center gap-2" },
            React.createElement("span", { className: "w-2 h-2 rounded-full bg-amber-500" }),
            "Workers return OCR text + processing time per image"
          )
        ),
        React.createElement("p", { className: "border-l-4 border-stone-900 dark:border-stone-100 pl-6 py-2 text-lg italic text-stone-700 dark:text-stone-300 font-serif" },
          "Backpressure makes the pipeline predictable: when bursts happen, the queue sets the pace instead of memory exploding."
        )
      ),
      image: "/assets/images/OCR_architecture.png"
    },

    // 5) MODES (use as pipeline stages)
    modes: {
      title: "Pipeline Stages",
      items: [
        {
          title: "Upload & Frame",
          subtitle: "TCP message boundaries you can trust",
          description: "Each request includes explicit lengths so the server can reconstruct messages safely even when TCP splits/merges packets."
        },
        {
          title: "Enqueue with Backpressure",
          subtitle: "Bounded Producer–Consumer queue",
          description: "Incoming jobs enter a bounded queue. When full, producers block — keeping memory stable during bursts."
        },
        {
          title: "Preprocess",
          subtitle: "OpenCV improves OCR readability",
          description: "Workers normalize inputs (grayscale → blur → binarize, optional deskew) before OCR."
        },
        {
          title: "OCR & Respond",
          subtitle: "Per-file results + timing",
          description: "Workers run Tesseract OCR and return recognized text + processing time per image for transparency."
        }
      ]
    },

    // 6) TECH (System Design)
    techTitle: "Protocol & Concurrency Design",
    techStack: ['C++20', 'Qt', 'TCP', 'Thread Pool', 'Bounded Queue', 'OpenCV', 'Tesseract'],
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "text-xl font-medium text-stone-800 dark:text-stone-200 mb-8" },
        "This project is about reliability: framing TCP messages correctly, using backpressure to stay stable under load, and parallelizing CPU-heavy OCR work."
      ),

      React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-4" }, "Framed TCP Protocol"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300 mb-8" },
        React.createElement("li", null, React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Problem:"), " TCP is a stream — reads don’t align to “messages.”"),
        React.createElement("li", null, React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Fix:"), " prefix payloads with lengths, then read exactly N bytes."),
        React.createElement("li", null, React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Result:"), " consistent per-file OCR results without boundary corruption.")
      ),

      React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-4" }, "Bounded Queue + Worker Pool"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300 mb-6" },
        React.createElement("li", null, React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Backpressure:"), " bounded queue caps memory usage during spikes."),
        React.createElement("li", null, React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Throughput:"), " thread pool parallelizes preprocessing + OCR across cores."),
        React.createElement("li", null, React.createElement("strong", { className: "text-stone-900 dark:text-stone-100" }, "Stability:"), " shutdown avoids deadlocks by unblocking waiting threads cleanly.")
      ),

      React.createElement("p", { className: "text-stone-600 dark:text-stone-400 italic" },
        "The UI stays responsive because the system reports real completions — not optimistic progress."
      )
    ),

    // 7) PROOF / RESULTS (no “big claims”, just what’s observable)
    results: {
      title: "What It Demonstrates",
      content: React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8" },
        React.createElement("div", { className: "bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm" },
          React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-4 uppercase text-xs tracking-wider" }, "System Properties"),
          React.createElement("ul", { className: "space-y-3 text-sm text-stone-600 dark:text-stone-300" },
            React.createElement("li", null, "Stable memory behavior under burst uploads (bounded queue)"),
            React.createElement("li", null, "Parallel OCR work across multiple workers"),
            React.createElement("li", null, "Correct per-file responses via framed TCP packets"),
            React.createElement("li", null, "Visible progress + timing per image in the UI")
          )
        ),
        React.createElement("div", { className: "bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm" },
          React.createElement("h4", { className: "font-bold text-stone-900 dark:text-stone-50 mb-4 uppercase text-xs tracking-wider" }, "Artifacts Returned"),
          React.createElement("ul", { className: "list-disc pl-4 space-y-2 text-sm text-stone-600 dark:text-stone-300" },
            React.createElement("li", null, "OCR text output per image"),
            React.createElement("li", null, "Processing time per image"),
            React.createElement("li", null, "Batch-friendly results list for browsing and verification")
          )
        )
      )
    },

    // 8) IMPACT
    impact: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "text-xl md:text-2xl font-medium leading-relaxed text-stone-900 dark:text-stone-50 mb-6" },
        "This project taught me that reliability is part of UX."
      ),
      React.createElement("p", { className: "text-lg text-stone-600 dark:text-stone-300 leading-relaxed" },
        "A fast OCR engine doesn’t matter if networking is fragile or the pipeline collapses under load. The queue, protocol framing, and progress loop are what make the tool feel professional."
      )
    )
  }
}
];

export const NAV_ITEMS = [
  { label: 'Work', path: '/' },
  { label: 'About', path: '/about' },
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