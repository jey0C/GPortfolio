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

  const hasNewLayout = !!project.content?.people;

  return (
    <article className="max-w-5xl mx-auto pt-12 md:pt-20 pb-24">
      <Link 
        to="/" 
        className="inline-flex items-center text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Projects
      </Link>

      {/* 1. HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-center"
      >
         {/* Text Side - Reduced from col-span-6 to col-span-5 */}
         <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-300 bg-stone-200 dark:bg-stone-800 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Conditionally render Logo or Title */}
            {project.logo ? (
              <img src={project.logo} alt={project.title} className="h-16 md:h-24 w-auto object-contain mb-6 origin-left self-center lg:self-start" />
            ) : (
              <h1 className="text-4xl md:text-6xl font-bold text-stone-900 dark:text-stone-50 mb-6">{project.title}</h1>
            )}

            <h2 className="text-xl md:text-2xl font-medium text-stone-500 dark:text-stone-400 mb-6">{project.oneLiner}</h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-8 max-w-xl">
              {project.description}
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
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
         </div>
         
         {/* Image Side - Increased from col-span-6 to col-span-7 */}
         <div className="lg:col-span-7">
            <div className="rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-800 aspect-video shadow-2xl relative">
               <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10" />
               <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
               />
               {project.gif && (
                  <img 
                    src={project.gif} 
                    alt="Animated preview" 
                    className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500 z-20"
                  />
               )}
            </div>
         </div>
      </motion.div>

      {/* 2. PEOPLE SECTION (Modified for flexible layout) */}
      {project.content?.people && (
        <section className="mb-24 bg-stone-100 dark:bg-stone-900/50 rounded-2xl p-6 md:p-12 relative overflow-hidden">
           {project.content.people.featureBox ? (
             /* New Layout: Text Left, Feature Box Right, Images Below */
             <>
               <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-[1px] bg-stone-400"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-stone-500">{project.content.people.subtitle}</span>
                    </div>
                    
                    <div className="flex items-start justify-between gap-4 mb-6">
                       <h3 className="text-3xl font-bold text-stone-900 dark:text-stone-50">{project.content.people.title}</h3>
                       {project.content.people.logo && (
                          <img src={project.content.people.logo} alt="Project Logo" className="h-20 w-auto object-contain" />
                       )}
                    </div>

                    <div className="text-stone-700 dark:text-stone-300 w-full">
                      {project.content.people.content}
                    </div>
                  </div>
                  
                  {/* Feature Box (Right Column) */}
                  <div className="mt-4 lg:mt-0 w-full">
                     {project.content.people.featureBox}
                  </div>
               </div>

               {/* Images (Full Width Below) */}
               {project.content.people.images && project.content.people.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {project.content.people.images.map((item, i) => {
                        const src = typeof item === 'string' ? item : item.src;
                        const caption = typeof item === 'string' ? null : item.caption;
                        return (
                          <div key={i} className="relative group rounded-lg overflow-hidden shadow-lg aspect-video bg-stone-200 dark:bg-stone-800">
                             <img src={src} alt={`Detail ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                             {caption && (
                               <div className="absolute bottom-0 left-0 right-0 bg-stone-900/80 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                  <p className="text-white text-xs font-medium text-center">{caption}</p>
                               </div>
                             )}
                          </div>
                        );
                     })}
                  </div>
               )}
             </>
           ) : (
             /* Legacy Layout: Text Left, Images Right Grid */
             <div className={`relative z-10 grid grid-cols-1 ${project.content.people.images?.length ? 'lg:grid-cols-2' : ''} gap-12 items-start`}>
                <div className={!project.content.people.images?.length ? "w-full" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[1px] bg-stone-400"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-500">{project.content.people.subtitle}</span>
                  </div>
                  
                  <div className="flex items-start justify-between gap-4 mb-6">
                     <h3 className="text-3xl font-bold text-stone-900 dark:text-stone-50">{project.content.people.title}</h3>
                     {project.content.people.logo && (
                        <img src={project.content.people.logo} alt="Project Logo" className="h-20 w-auto object-contain" />
                     )}
                  </div>

                  <div className="text-stone-700 dark:text-stone-300 w-full">
                    {project.content.people.content}
                  </div>
                </div>
                
                {project.content.people.images && project.content.people.images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {project.content.people.images.map((item, i) => {
                        const src = typeof item === 'string' ? item : item.src;
                        const caption = typeof item === 'string' ? null : item.caption;
                        return (
                          <div key={i} className={`relative group rounded-lg overflow-hidden shadow-lg ${i % 2 === 1 ? 'sm:translate-y-8' : ''}`}>
                             <img src={src} alt={`Process ${i + 1}`} className="w-full h-full object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-500" />
                             {caption && (
                               <div className="absolute inset-0 bg-stone-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                  <p className="text-white text-sm font-bold text-center border-b-2 border-white/30 pb-1">{caption}</p>
                               </div>
                             )}
                          </div>
                        );
                     })}
                  </div>
                )}
             </div>
           )}
        </section>
      )}

      {/* 2.5 PROCESS (New Comparison Section) */}
      {project.content?.process && (
        <section className="mb-24">
           <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-8">{project.content.process.title}</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.content.process.items.map((item, i) => (
                 <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg bg-stone-900 border border-stone-800">
                    <img src={item.image} alt={item.caption} className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 left-4">
                       <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-md ${i === 0 ? 'bg-red-500/90 text-white' : 'bg-emerald-500/90 text-white'}`}>
                          {item.tag}
                       </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                       <p className="text-white font-medium text-lg">{item.caption}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>
      )}

      {/* 3. CHALLENGE */}
      {project.content?.problem && (
         <section className="mb-24 max-w-3xl mx-auto">
            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-8">The Challenge</h3>
            <div>
               {project.content.problem}
            </div>
         </section>
      )}

      {/* 4. SYSTEM (New Flow) */}
      {project.content?.system && (
         <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div className="order-2 md:order-1">
                  {/* Handle multiple images */}
                  {project.content.system.images ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {project.content.system.images.map((img, idx) => (
                              <div key={idx} className={`rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-800 shadow-xl ${idx === 0 ? 'border-2 border-blue-500' : idx === 1 ? 'border-2 border-pink-500' : 'border border-stone-200 dark:border-stone-700'}`}>
                                  <img src={img} alt={`System view ${idx + 1}`} className="w-full h-full object-cover aspect-[4/5]" />
                              </div>
                          ))}
                      </div>
                  ) : project.content.system.image ? (
                     <div className="bg-white dark:bg-stone-800 p-2 rounded-xl border border-stone-200 dark:border-stone-700 shadow-xl">
                        <img src={project.content.system.image} alt="System Diagram" className="w-full h-auto rounded-lg" />
                     </div>
                  ) : null}
               </div>
               <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-6">{project.content.system.title}</h3>
                  <div className="text-lg text-stone-600 dark:text-stone-300">
                     {project.content.system.description}
                  </div>
               </div>
            </div>
         </section>
      )}

      {/* 5. MODES (Grid Layout) */}
      {project.content?.modes && (
         <section className="mb-24">
            <div className="flex items-center gap-4 mb-12 justify-center">
               <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50">{project.content.modes.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {project.content.modes.items.map((mode, i) => (
                  <div key={i} className="bg-stone-50 dark:bg-stone-900 p-8 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-600 transition-colors">
                     <h4 className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-2">{mode.title}</h4>
                     <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">{mode.subtitle}</p>
                     <p className="text-stone-600 dark:text-stone-400">{mode.description}</p>
                  </div>
               ))}
            </div>
         </section>
      )}

      {/* 6. TECH (Standard) */}
      <section className="mb-24">
         <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-8">System Design</h3>
         <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
               {/* Use dynamic title based on project, fallback if missing */}
               <h3 className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-6">{project.content?.techTitle || "System Architecture"}</h3>
               <div className="flex flex-wrap gap-2">
                  {project.content?.techStack.map(tech => (
                     <span key={tech} className="px-3 py-1 bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded text-sm font-medium">{tech}</span>
                  ))}
               </div>
            </div>
            <div className="md:col-span-8 prose prose-stone dark:prose-invert prose-lg">
                {project.content?.solution}
            </div>
         </div>
      </section>

      {/* 7. PROOF (Results) */}
      {project.content?.results && (
         <section className="mb-24 pt-12">
            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-8">{project.content.results.title}</h3>
            {project.content.results.content}
         </section>
      )}

      {/* 8. IMPACT (Why It Matters) */}
      {project.content?.impact && (
         <section className="mb-24">
            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-8">Reflection</h3>
            <div className="bg-stone-50 dark:bg-stone-900/50 p-8 md:p-12 rounded-xl border-l-4 border-stone-400 dark:border-stone-600 shadow-sm">
               {project.content.impact}
            </div>
         </section>
      )}

      {/* Fallback for projects without new layout (Legacy Support) */}
      {!hasNewLayout && project.content && (
         <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
             <div className="md:col-span-4 space-y-8">
               <div>
                 <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-3">Tech Stack</h3>
                 <ul className="space-y-2">
                   {project.content.techStack.map(tech => (
                     <li key={tech} className="text-stone-800 dark:text-stone-200 font-medium pb-2 border-b border-stone-200 dark:border-stone-800 last:border-0">{tech}</li>
                   ))}
                 </ul>
               </div>
             </div>
             <div className="md:col-span-8 prose prose-stone dark:prose-invert prose-lg max-w-none">
                 <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-4">Context</h3>
                 <div className="text-stone-600 dark:text-stone-300 leading-relaxed mb-12">{project.content.context}</div>

                 <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-4">The Challenge</h3>
                 <div className="text-stone-600 dark:text-stone-300 leading-relaxed mb-12">{project.content.problem}</div>

                 <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-4">The Solution</h3>
                 <div className="text-stone-600 dark:text-stone-300 leading-relaxed mb-12">{project.content.solution}</div>
                 
                 {project.content.learnings && (
                    <div className="bg-stone-100 dark:bg-stone-900 p-8 rounded-xl border-l-4 border-stone-900 dark:border-stone-100">
                       <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-4">Key Learnings</h3>
                       <div className="text-stone-600 dark:text-stone-300 leading-relaxed">{project.content.learnings}</div>
                    </div>
                 )}
             </div>
         </div>
      )}

    </article>
  );
};

export default ProjectDetail;