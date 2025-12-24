import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, priority = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="group block"
    >
      {/* Image Container with Magnetic/Lift Effect */}
      <Link 
        to={`/project/${project.id}`} 
        className="block overflow-hidden bg-stone-200 dark:bg-stone-800 rounded-xl mb-6 relative aspect-video shadow-sm"
      >
        <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
        </motion.div>
        
        {/* Overlay with subtle gradient */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-500" />
      </Link>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <Link to={`/project/${project.id}`} className="flex items-center gap-2 group/title">
            <h3 className="text-3xl font-bold text-stone-900 dark:text-stone-50 group-hover:underline decoration-2 underline-offset-4 decoration-stone-300 dark:decoration-stone-600">
              {project.title}
            </h3>
            <motion.div
                initial={{ opacity: 0, x: -10, y: 10 }}
                whileHover={{ opacity: 1, x: 0, y: 0 }}
                className="opacity-0 group-hover:opacity-100"
            >
                 <ArrowUpRight className="w-5 h-5 text-stone-900 dark:text-stone-200 transition-all duration-300" />
            </motion.div>
          </Link>
        </div>

        <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-xl">
          {priority ? project.description : project.oneLiner}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="text-xs font-mono font-medium text-stone-500 dark:text-stone-500 bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700/50 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;