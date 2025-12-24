import React from 'react';
import { motion } from 'framer-motion';
import { PLAY_ITEMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Play: React.FC = () => {
  return (
    <div className="pt-12 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-stone-900 dark:text-stone-50">Play & Laboratory</h1>
        <p className="text-xl text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
          A collection of experiments, musical sketches, and visual studies. This is where I explore ideas without the constraints of production code.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {PLAY_ITEMS.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-xl bg-stone-200 dark:bg-stone-800 aspect-square mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 dark:group-hover:bg-stone-900/30 transition-colors duration-300" />
              
              <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-stone-900 dark:text-stone-50" />
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50 group-hover:underline decoration-stone-300 dark:decoration-stone-600 underline-offset-4 decoration-2">
                  {item.title}
                </h3>
                <span className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      
      <div className="bg-stone-100 dark:bg-stone-900 rounded-2xl p-8 md:p-12 text-center transition-colors">
        <h3 className="text-2xl font-bold mb-4 text-stone-900 dark:text-stone-50">More on the way</h3>
        <p className="text-stone-600 dark:text-stone-300 mb-0">
          I'm constantly tinkering. Check back for new shaders, sound design experiments, and photo journals.
        </p>
      </div>
    </div>
  );
};

export default Play;