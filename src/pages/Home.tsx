import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { PROJECTS, RESUME_URL } from '../constants';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import Scribble from '../components/Scribble';
import { ArrowDown, Layers, Code, Database, Shirt, Disc3, Trophy } from 'lucide-react';

// Using public folder path for stability across different environments.
// Please ensure your image is located at: public/assets/images/me.jpg
const PROFILE_IMG_PATH = "/assets/images/me.jpg";

const Home: React.FC = () => {
  const [hasError, setHasError] = useState(false);
  
  const flagshipProjects = PROJECTS.filter(p => p.type === 'flagship');
  const otherProjects = PROJECTS.filter(p => p.type !== 'flagship');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  // Sticker animation variants
  const stickerVariants: Variants = {
    hidden: { scale: 0, opacity: 0, rotate: 0 },
    hover: (custom: number) => ({
      scale: 1,
      opacity: 1,
      rotate: custom,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 15,
        mass: 0.8
      }
    })
  };

  // Image animation variants
  const imageVariants: Variants = {
    hidden: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.05,
      rotate: -2,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* LEFT COLUMN: Sticky Identity (Desktop) */}
        <motion.div 
          className="lg:col-span-5 lg:h-[calc(100vh-8rem)] lg:sticky lg:top-32 flex flex-col justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.div variants={itemVariants} className="mb-8 lg:mb-12 relative">
              
              {/* Profile Image & Stickers Wrapper */}
              <motion.div 
                className="relative inline-block group"
                initial="hidden"
                whileHover="hover"
              >
                {/* Main Image Container */}
                <motion.div 
                  className="w-48 h-64 rounded-2xl overflow-hidden mb-8 ring-4 ring-stone-100 dark:ring-stone-800 shadow-xl bg-stone-200 dark:bg-stone-800 relative z-10"
                  variants={imageVariants}
                >
                   <img 
                      src={PROFILE_IMG_PATH}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('/src/') && !hasError) {
                           target.src = '/src' + PROFILE_IMG_PATH;
                        } else {
                           setHasError(true);
                        }
                      }}
                      alt="Giovanni Cruz" 
                      className={`w-full h-full object-cover transition-opacity duration-500 ${hasError ? 'opacity-0' : 'opacity-100'}`}
                    />
                    {hasError && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-200 dark:bg-stone-800 text-stone-500 text-xs text-center p-4 font-mono">
                         <span className="font-bold mb-2">Image Not Found</span>
                      </div>
                    )}
                </motion.div>

                {/* Sticker 1: Fashion */}
                <motion.div 
                  className="absolute -top-4 -right-10 z-20 bg-white text-stone-900 border-2 border-stone-900 px-3 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] flex items-center gap-2"
                  variants={stickerVariants}
                  custom={12} // Rotation
                >
                  <Shirt size={16} strokeWidth={2.5} />
                  <span className="font-mono text-xs font-bold uppercase tracking-tighter">Fashion</span>
                </motion.div>

                {/* Sticker 2: Music */}
                <motion.div 
                  className="absolute top-1/2 -left-12 z-20 bg-[#ff4d4d] text-white border-2 border-stone-900 px-3 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] flex items-center gap-2"
                  variants={stickerVariants}
                  custom={-15} // Rotation
                >
                  <Disc3 size={18} strokeWidth={2.5} className="animate-spin-slow" />
                  <span className="font-mono text-xs font-bold uppercase tracking-tighter">Music</span>
                </motion.div>

                {/* Sticker 3: Basketball */}
                <motion.div 
                  className="absolute -bottom-2 -right-6 z-20 bg-orange-500 text-white border-2 border-stone-900 px-3 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] flex items-center gap-2"
                  variants={stickerVariants}
                  custom={8} // Rotation
                >
                  <Trophy size={16} strokeWidth={2.5} />
                  <span className="font-mono text-xs font-bold uppercase tracking-tighter">Hoops</span>
                </motion.div>

              </motion.div>
              
              {/* Playful element near name */}
              <div className="relative inline-block mt-2">
                <Scribble type="sparkle" className="absolute -top-8 -right-8 text-yellow-500 dark:text-yellow-300" delay={0.8} />
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-stone-900 dark:text-stone-50 mb-6 leading-[0.9] relative z-10">
                  Gio Cruz
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 font-medium leading-relaxed max-w-md relative">
                Software Engineer merging 
                <span className="relative inline-block whitespace-nowrap mx-2 text-stone-900 dark:text-stone-200 font-bold">
                   systems thinking
                   <Scribble type="underline" className="text-stone-400 dark:text-stone-600 top-full mt-1" delay={1.2} />
                </span> 
                with 
                <span className="relative inline-block whitespace-nowrap mx-2 text-stone-900 dark:text-stone-200 font-bold">
                  interaction design
                  <Scribble type="circle" className="text-blue-400/50 dark:text-blue-400/30" delay={1.5} />
                </span>.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-6 items-start">
              <p className="text-stone-500 dark:text-stone-500 text-sm max-w-sm leading-relaxed">
                I build digital instruments and resilient platforms. Currently exploring <span className="font-mono text-xs bg-stone-200 dark:bg-stone-800 px-1 py-0.5 rounded">WebGL</span>, <span className="font-mono text-xs bg-stone-200 dark:bg-stone-800 px-1 py-0.5 rounded">Distributed Systems</span>, and the space between them.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                  Selected Work
                </Button>
                <Button variant="secondary" href={RESUME_URL} external>
                  Resume / CV
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="hidden lg:flex items-center gap-2 text-stone-400 text-xs font-bold tracking-widest uppercase opacity-50 font-mono">
            <ArrowDown className="w-4 h-4 animate-bounce" />
            Scroll to Explore
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Content Stream */}
        <div className="lg:col-span-7 flex flex-col gap-24 lg:gap-32 pb-24">
          
          {/* Flagship Projects */}
          <section id="work" className="pt-12 lg:pt-0">
             <div className="flex items-center gap-4 mb-12">
               <span className="w-8 h-[1px] bg-stone-300 dark:bg-stone-700"></span>
               <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-stone-500">01 — Selected Works</h2>
             </div>
            
            <div className="flex flex-col gap-24">
              {flagshipProjects.map((project) => (
                <ProjectCard key={project.id} project={project} priority />
              ))}
            </div>
          </section>

          {/* Technical Projects */}
          <section>
             <div className="flex items-center gap-4 mb-12">
               <span className="w-8 h-[1px] bg-stone-300 dark:bg-stone-700"></span>
               <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-stone-500">02 — Engineering Depth</h2>
             </div>

            <div className="grid grid-cols-1 gap-12">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* Philosophy / Grid */}
          <section className="bg-stone-100 dark:bg-stone-900/50 rounded-3xl p-8 md:p-12 border border-stone-200 dark:border-stone-800 relative overflow-hidden">
             {/* Decorative scribble in background */}
             <Scribble type="squiggle" className="absolute top-10 right-10 text-stone-200 dark:text-stone-800 w-32 h-10 opacity-50" />
             
             <div className="flex items-center gap-4 mb-8">
               <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-50 tracking-tight">Core Competencies</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Layers className="w-6 h-6 text-stone-900 dark:text-stone-100" />
                  <h3 className="font-bold text-stone-900 dark:text-stone-50">Systems Architecture</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    Designing scalable backends using Go, Node.js, and container orchestration. Focusing on fault tolerance and observability.
                  </p>
                </div>
                <div className="space-y-3">
                  <Code className="w-6 h-6 text-stone-900 dark:text-stone-100" />
                  <h3 className="font-bold text-stone-900 dark:text-stone-50">Creative Engineering</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    Bridging art and code with WebGL, GLSL shaders, and custom interaction pipelines for the web and XR.
                  </p>
                </div>
                <div className="space-y-3 md:col-span-2 pt-6 border-t border-stone-200 dark:border-stone-700/50">
                  <Database className="w-6 h-6 text-stone-900 dark:text-stone-100" />
                  <h3 className="font-bold text-stone-900 dark:text-stone-50">Full Stack & Data</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    End-to-end type safety, database design (SQL/NoSQL), and performant frontend hydration strategies.
                  </p>
                </div>
             </div>
          </section>

          {/* Footer Area within Scroll */}
          <section className="pt-12 border-t border-stone-200 dark:border-stone-800">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-stone-900 dark:text-stone-50 mb-8">Let's build something real.</h2>
            <div className="flex gap-4">
              <Button href="mailto:hello@giocruz.dev">Get in Touch</Button>
              <Button variant="ghost" href={RESUME_URL} external>View Resume PDF</Button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Home;