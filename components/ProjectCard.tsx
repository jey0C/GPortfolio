import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, priority = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group block"
    >
      {/* Image Container with Hover Logic */}
      <div 
        className="relative mb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link 
          to={`/project/${project.id}`} 
          className="block overflow-hidden bg-stone-200 dark:bg-stone-800 rounded-xl relative aspect-video shadow-sm"
        >
          {/* Static Image */}
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 relative z-10"
            loading="lazy"
          />

          {/* GIF Overlay (Fades in on hover if available) */}
          {project.gif && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: isHovered ? 1 : 0 }}
               transition={{ duration: 0.3 }}
               className="absolute inset-0 z-20 bg-stone-200 dark:bg-stone-800"
            >
              <img src={project.gif} alt={`${project.title} Preview`} className="w-full h-full object-cover" />
            </motion.div>
          )}

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-white/5 transition-colors duration-500 z-30" />
        </Link>

        {/* Hover Popout Text Overlay */}
        <AnimatePresence>
          {isHovered && project.hoverText && (
             <motion.div
               initial={{ opacity: 0, y: 10, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: 10, scale: 0.95 }}
               transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
               className="absolute bottom-4 left-4 right-4 md:left-8 md:right-8 p-4 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md rounded-xl border border-stone-200 dark:border-stone-700 shadow-xl z-40 pointer-events-none"
             >
               <p className="font-mono text-xs md:text-sm font-bold text-stone-800 dark:text-stone-100 text-center leading-tight">
                  {project.hoverText}
               </p>
             </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <Link to={`/project/${project.id}`} className="flex items-center gap-2">
            <h3 className="text-3xl font-bold text-stone-900 dark:text-stone-50 group-hover:underline decoration-2 underline-offset-4 decoration-stone-300 dark:decoration-stone-600">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-stone-400 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
          </Link>
        </div>

        <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-xl">
          {priority ? project.description : project.oneLiner}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-500 bg-stone-100 dark:bg-stone-800/50 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;