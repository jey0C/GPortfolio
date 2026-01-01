import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { RESUME_URL } from '../constants';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto pt-12 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-stone-900 dark:text-stone-50">About Gio</h1>
        
        <div className="prose prose-stone dark:prose-invert prose-lg max-w-none">
          <p className="lead text-2xl text-stone-900 dark:text-stone-100 font-medium mb-8 leading-snug">
            I design software systems that disappear—because when they work well, users shouldn’t have to think about them.
          </p>

          <p className="text-stone-600 dark:text-stone-300 mb-6">
            I am a software engineer and creative technologist working at the intersection of robust systems and human interaction. My work spans high-throughput backend services and delicate, real-time interactive experiences, guided by the same principle: <strong>complexity belongs in the system, not the user.</strong>
          </p>

          <p className="text-stone-600 dark:text-stone-300 mb-12">
            My interest in technology began with a fascination for how digital tools shape human creativity. I don’t just write code; I design systems that feel inevitable. Whether optimizing a distributed service or refining an XR interaction, I bring the same level of care to architectural integrity as I do to user experience.
          </p>

          <h3 className="text-3xl font-bold mt-16 mb-6 text-stone-900 dark:text-stone-50">Philosophy</h3>
          <p className="text-stone-600 dark:text-stone-300 mb-8">
            I believe the best engineering is invisible—not because it is simple, but because its complexity has been carefully absorbed by the system. To achieve this, I consistently lean on:
          </p>
          
          <div className="space-y-8 not-prose mt-8">
            <div>
              <h4 className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-2">Systems Thinking</h4>
              <p className="text-stone-600 dark:text-stone-400">
                Designing components with awareness of emergent behavior, knowing that real systems fail in unexpected ways.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-2">Human-Centered Interaction</h4>
              <p className="text-stone-600 dark:text-stone-400">
                Respecting user agency and cognitive load by shaping interactions that feel responsive, legible, and intentional.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-2">Iterative Polish</h4>
              <p className="text-stone-600 dark:text-stone-400">
                Treating software as something grown over time—refined through use, feedback, and continuous adjustment rather than rushed completion.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-stone-200 dark:border-stone-800 pt-8">
           <h3 className="text-xl font-bold mb-6 text-stone-900 dark:text-stone-50">Let's connect</h3>
           <div className="flex flex-col gap-6">
             <div className="flex gap-4">
               <Button href="https://mail.google.com/mail/?view=cm&fs=1&to=cruzgiovanni90@gmail.com" external>Email Me</Button>
               <Button variant="secondary" href={RESUME_URL} external>Resume</Button>
             </div>
             
             <div className="flex gap-6 text-stone-600 dark:text-stone-400">
                <a href="https://github.com/jey0C" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/giovanni-cruz-a06852278/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/jeyo.cruz/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
                  <Instagram size={24} />
                </a>
                 <a href="https://www.facebook.com/giovanni.cruz.5477272" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
                  <Facebook size={24} />
                </a>
             </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;