import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'drawing' | 'filling' | 'exit'>('drawing');

  useEffect(() => {
    // Timeline sequence
    const timer1 = setTimeout(() => setPhase('filling'), 2000); // Start filling faster
    const timer2 = setTimeout(() => setPhase('exit'), 3500);    // Start exit
    const timer3 = setTimeout(onComplete, 4300);                // Unmount

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  // Design Constants
  const strokeWidth = 28; // Thicker as requested
  const radius = 32;      // Consistent radius for curves
  const centerY = 70;     // Optical center Y
  const xHeightTop = centerY - radius; // 38
  const baseline = centerY + radius;   // 102
  
  // X Positions (manually tuned for spacing)
  const g_center_x = 75;
  const i_x = 160;
  const o_center_x = 245;

  // Colors
  const colors = {
    g: '#3b82f6', // blue-500
    i: '#ec4899', // pink-500
    o: '#10b981', // emerald-500
  };

  const drawTransition = { duration: 1.2, ease: "easeInOut" as const };
  const fillTransition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } }}
        >
          <div className="relative w-full max-w-lg aspect-[2/1] p-8">
            {/* Grid Background */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-20 pointer-events-none">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="border-[0.5px] border-stone-500" />
              ))}
            </div>

            <svg viewBox="0 0 320 160" className="w-full h-full overflow-visible">
              {/* LETTER G */}
              <motion.g>
                {/* 1. The Circle Part */}
                <motion.circle
                  cx={g_center_x} cy={centerY} r={radius}
                  fill="transparent"
                  stroke={phase === 'drawing' ? 'white' : colors.g}
                  strokeWidth={strokeWidth}
                  initial={{ pathLength: 0, opacity: 0, rotate: -90 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: 1,
                    stroke: phase === 'filling' ? colors.g : 'white',
                    // During fill phase, we fill the circle
                    fill: phase === 'filling' ? colors.g : 'transparent'
                  }}
                  transition={drawTransition}
                />
                
                {/* 2. The Tail/Descender */}
                {/* Starts at top of x-height, goes down, curves left */}
                <motion.path
                  d={`M ${g_center_x + radius} ${xHeightTop} L ${g_center_x + radius} ${baseline + 10} A ${radius} ${radius} 0 0 1 ${g_center_x} ${baseline + radius + 10}`}
                  fill="transparent"
                  stroke={phase === 'drawing' ? 'white' : colors.g}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: 1,
                    stroke: phase === 'filling' ? colors.g : 'white'
                  }}
                  transition={{ ...drawTransition, delay: 0.2 }}
                />
              </motion.g>

              {/* LETTER I */}
              <motion.g>
                {/* Stem */}
                <motion.line
                  x1={i_x} y1={xHeightTop} x2={i_x} y2={baseline}
                  stroke={phase === 'drawing' ? 'white' : colors.i}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: 1,
                    stroke: phase === 'filling' ? colors.i : 'white'
                  }}
                  transition={{ ...drawTransition, delay: 0.4 }}
                />
                {/* Dot */}
                 <motion.circle
                  cx={i_x} cy={xHeightTop - radius} r={strokeWidth / 2}
                  fill={phase === 'drawing' ? 'white' : colors.i}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    fill: phase === 'filling' ? colors.i : 'white'
                  }}
                  transition={{ ...drawTransition, delay: 0.6 }}
                />
              </motion.g>

              {/* LETTER O */}
              <motion.g>
                <motion.circle
                  cx={o_center_x} cy={centerY} r={radius}
                  fill="transparent"
                  stroke={phase === 'drawing' ? 'white' : colors.o}
                  strokeWidth={strokeWidth}
                  initial={{ pathLength: 0, opacity: 0, rotate: -90 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: 1,
                    stroke: phase === 'filling' ? colors.o : 'white',
                    fill: phase === 'filling' ? colors.o : 'transparent'
                  }}
                  transition={{ ...drawTransition, delay: 0.5 }}
                />
                 {/* Inner hole for O to look like a donut (optional, makes it distinct from dot) */}
                 {phase === 'filling' && (
                   <motion.circle 
                     cx={o_center_x} cy={centerY} r={10} 
                     fill="#000" 
                     initial={{ scale: 0 }} 
                     animate={{ scale: 1 }} 
                     transition={fillTransition} 
                   />
                )}
              </motion.g>

            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;