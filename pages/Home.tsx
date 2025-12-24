import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, RESUME_URL } from '../constants';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { ArrowRight, Code, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

// CONFIGURATION:
// 1. Create a folder named 'public' in your project root
// 2. Place your image inside 'public' and name it 'me.jpg'
const LOCAL_PROFILE_IMG = "/me.jpg";
const FALLBACK_IMG = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";

const Home: React.FC = () => {
  const flagshipProjects = PROJECTS.filter(p => p.type === 'flagship');
  const otherProjects = PROJECTS.filter(p => p.type !== 'flagship');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] as const 
      } 
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center mb-24 md:mb-32">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 order-2 md:order-1"
          >
            <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-stone-700 dark:text-stone-300 mb-6 tracking-tight">
              Giovanni "Gio" Cruz
            </motion.p>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-8 leading-[0.95]">
              Software Engineering,<br />
              <span className="text-stone-400 dark:text-stone-500">with a Human-Centered Focus.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed mb-10">
              I build thoughtful systems by combining strong engineering foundations with interaction design and deliberate rhythm.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
              <Button variant="secondary" href={RESUME_URL} external>
                Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-[400px] lg:w-[480px] flex-shrink-0 order-1 md:order-2"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-stone-200 dark:bg-stone-800 relative group">
              <img 
                src={LOCAL_PROFILE_IMG}
                onError={(e) => {
                  if (e.currentTarget.src !== FALLBACK_IMG) {
                    console.warn(`Could not load ${LOCAL_PROFILE_IMG}. Using fallback. Ensure 'me.jpg' is in the 'public' folder.`);
                    e.currentTarget.src = FALLBACK_IMG;
                    e.currentTarget.onerror = null;
                  }
                }}
                alt="Giovanni Cruz" 
                className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-3xl z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section id="work" className="mb-32">
        <div className="flex items-end justify-between mb-16 border-b border-stone-200 dark:border-stone-800 pb-4">
          <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50">Selected Work</h2>
          <span className="text-stone-400 hidden md:block">01 — Experience</span>
        </div>
        
        <div className="flex flex-col gap-12">
          {flagshipProjects.map((project) => (
            <ProjectCard key={project.id} project={project} priority />
          ))}
        </div>
      </section>

      {/* Proof of Range / Technical Depth */}
      <section className="mb-32">
        <div className="flex items-end justify-between mb-12 border-b border-stone-200 dark:border-stone-800 pb-4">
          <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50">Engineering & Systems</h2>
          <span className="text-stone-400 hidden md:block">02 — Depth</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Personal Signal / Philosophy */}
      <section className="mb-32 bg-stone-100 dark:bg-stone-900 rounded-3xl p-8 md:p-16 transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900 dark:text-stone-50">Built with intent.</h2>
            <p className="text-lg text-stone-600 dark:text-stone-300 mb-6 leading-relaxed">
              Great software isn't just about clean code—it's about how it feels to use. 
              My approach blends rigorous systems thinking (distributed queues, performance optimization) with an HCI-informed appreciation for the user's cognitive load.
            </p>
            <p className="text-lg text-stone-600 dark:text-stone-300 mb-8 leading-relaxed">
              Whether optimizing a render pipeline or designing a REST API, I prioritize clarity, maintainability, and that subtle "click" of a well-made tool.
            </p>
            <Link to="/about" className="inline-flex items-center text-stone-900 dark:text-stone-50 font-semibold hover:underline decoration-2 underline-offset-4">
              More about me <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl border border-stone-200/50 dark:border-stone-700/50 transition-colors">
               <Layers className="w-8 h-8 text-stone-800 dark:text-stone-200 mb-4" />
               <h3 className="font-bold mb-2 text-stone-900 dark:text-stone-50">Systems Depth</h3>
               <p className="text-sm text-stone-500 dark:text-stone-400">Distributed systems, concurrency, and clear separation of concerns.</p>
            </div>
            <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl border border-stone-200/50 dark:border-stone-700/50 transition-colors">
               <Code className="w-8 h-8 text-stone-800 dark:text-stone-200 mb-4" />
               <h3 className="font-bold mb-2 text-stone-900 dark:text-stone-50">Creative Tech</h3>
               <p className="text-sm text-stone-500 dark:text-stone-400">XR pipelines, WebGL, and data-driven generative art.</p>
            </div>
            <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl border border-stone-200/50 dark:border-stone-700/50 sm:col-span-2 transition-colors">
               <Database className="w-8 h-8 text-stone-800 dark:text-stone-200 mb-4" />
               <h3 className="font-bold mb-2 text-stone-900 dark:text-stone-50">Full Stack</h3>
               <p className="text-sm text-stone-500 dark:text-stone-400">End-to-end development from database design to fluid frontend interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center py-24">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-stone-900 dark:text-stone-50">Ready to build?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <Button href="mailto:hello@giocruz.dev">Get in Touch</Button>
           <Button variant="ghost" href={RESUME_URL} external>View Resume</Button>
        </div>
      </section>
    </>
  );
};

export default Home;