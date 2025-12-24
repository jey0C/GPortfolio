import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="max-w-4xl mx-auto pt-12 md:pt-20">
      <Link 
        to="/" 
        className="inline-flex items-center text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-300 bg-stone-200 dark:bg-stone-800 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-stone-900 dark:text-stone-50 mb-6">{project.title}</h1>
        <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 leading-relaxed mb-10 max-w-3xl">
          {project.description}
        </p>

        <div className="flex gap-4 mb-16">
          {project.links?.demo && (
            <Button href={project.links.demo} external className="gap-2">
              <Globe className="w-4 h-4" /> Live Demo
            </Button>
          )}
          {project.links?.github && (
            <Button variant="secondary" href={project.links.github} external className="gap-2">
              <Github className="w-4 h-4" /> View Code
            </Button>
          )}
        </div>

        <div className="rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-800 aspect-video mb-16 shadow-lg">
           <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sidebar Info */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-3">Tech Stack</h3>
              <ul className="space-y-2">
                {project.content?.techStack.map(tech => (
                  <li key={tech} className="text-stone-800 dark:text-stone-200 font-medium pb-2 border-b border-stone-200 dark:border-stone-800 last:border-0">{tech}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 prose prose-stone dark:prose-invert prose-lg max-w-none">
            {project.content ? (
              <>
                <section className="mb-12">
                  <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-4">Context</h3>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{project.content.context}</p>
                </section>

                <section className="mb-12">
                  <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-4">The Challenge</h3>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{project.content.problem}</p>
                </section>

                <section className="mb-12">
                  <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-4">The Solution</h3>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{project.content.solution}</p>
                </section>

                <section className="mb-12 bg-stone-100 dark:bg-stone-900 p-8 rounded-xl border-l-4 border-stone-900 dark:border-stone-100">
                   <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-3">Key Learnings</h3>
                   <p className="text-stone-600 dark:text-stone-300 italic">{project.content.learnings}</p>
                </section>
              </>
            ) : (
              <p>Case study content coming soon.</p>
            )}
          </div>
        </div>
      </motion.div>
    </article>
  );
};

export default ProjectDetail;