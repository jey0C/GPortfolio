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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`group relative flex flex-col ${priority ? 'md:flex-row gap-8 md:items-center mb-24' : 'mb-16'}`}
    >
      {/* Image Section */}
      <Link 
        to={`/project/${project.id}`} 
        className={`block overflow-hidden rounded-lg bg-stone-200 dark:bg-stone-800 ${priority ? 'w-full md:w-3/5 aspect-video' : 'w-full aspect-[4/3]'}`}
      >
        <div className="w-full h-full relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 dark:group-hover:bg-stone-900/20 transition-colors duration-300" />
        </div>
      </Link>

      {/* Content Section */}
      <div className={`${priority ? 'w-full md:w-2/5 pt-6 md:pt-0' : 'pt-6'}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700 px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Link to={`/project/${project.id}`} className="group/link block">
          <h3 className="text-2xl md:text-3xl font-semibold text-stone-900 dark:text-stone-50 mb-3 group-hover/link:underline decoration-stone-400 decoration-1 underline-offset-4">
            {project.title}
            <ArrowUpRight className="inline-block ml-2 w-5 h-5 text-stone-400 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0" />
          </h3>
          <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
            {project.oneLiner}
          </p>
        </Link>
        
        {priority && (
          <p className="text-sm text-stone-500 dark:text-stone-400 mb-6 hidden md:block">
            {project.description}
          </p>
        )}

        <Link 
          to={`/project/${project.id}`}
          className="text-stone-900 dark:text-stone-50 font-medium text-sm border-b border-stone-900 dark:border-stone-50 pb-0.5 hover:text-stone-600 dark:hover:text-stone-300 hover:border-stone-600 dark:hover:border-stone-300 transition-colors"
        >
          View Case Study
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;