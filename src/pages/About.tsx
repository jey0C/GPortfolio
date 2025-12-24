import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { RESUME_URL } from '../constants';

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
          <p className="lead text-2xl text-stone-600 dark:text-stone-300 font-medium mb-8">
            I am a software engineer and creative technologist interested in the intersection of robust systems and human interaction.
          </p>

          <p className="text-stone-600 dark:text-stone-300">
            My journey began with a fascination for how digital tools shape human creativity. I don't just write code; I design systems that feel inevitable. Whether it's a high-throughput backend service or a delicate XR interaction, I bring the same level of care to the architecture as I do to the user experience.
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-4 text-stone-900 dark:text-stone-50">Philosophy</h3>
          <p className="text-stone-600 dark:text-stone-300">
            I believe that the best engineering is invisible. It works so well that the user forgets it's there. To achieve this, I lean heavily on:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-stone-600 dark:text-stone-300">
            <li><strong>Systems Thinking:</strong> Understanding how individual components affect the whole.</li>
            <li><strong>HCI Principles:</strong> Respecting user agency and cognitive load.</li>
            <li><strong>Iterative Polish:</strong> Great software is grown, not just built.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-12 mb-4 text-stone-900 dark:text-stone-50">Beyond the Code</h3>
          <p className="text-stone-600 dark:text-stone-300">
            When I'm not in a terminal, I'm likely exploring rhythm and sound. Music deeply informs my coding style—I look for flow, repetition, and structure in software architecture just as I do in a composition.
          </p>
        </div>

        <div className="mt-16 border-t border-stone-200 dark:border-stone-800 pt-8">
           <h3 className="text-xl font-bold mb-6 text-stone-900 dark:text-stone-50">Let's connect</h3>
           <div className="flex gap-4">
             <Button href="mailto:hello@giocruz.dev">Email Me</Button>
             <Button variant="secondary" href={RESUME_URL} external>Resume</Button>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;