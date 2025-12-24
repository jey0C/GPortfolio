import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'drawing' | 'filling' | 'exit'>('drawing');

  useEffect(() => {
    // Timeline sequence
    const timer1 = setTimeout(() => setPhase('filling'), 1800); // Start filling
    const timer2 = setTimeout(() => setPhase('exit'), 3500);    // Start exit
    const timer3 = setTimeout(onComplete, 4300);                // Unmount

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  // Design Constants
  const strokeWidth = 38; // Thicker bold strokes
  const radius = 32;      // Radius for curves
  const centerY = 75;     // Optical center Y
  const xHeightTop = centerY - radius; // 43
  const baseline = centerY + radius;   // 107
  
  // X Positions
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
  const colorTransition = { duration: 1.0, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  // Helper to render paths (White Base + Colored Overlay)
  const RenderPath = ({ 
    d, 
    color, 
    isDot = false, 
    cx, cy, r, // for circles/dots
    customDelay = 0 
  }: { 
    d?: string, 
    color: string, 
    isDot?: boolean, 
    cx?: number, cy?: number, r?: number,
    customDelay?: number 
  }) => {
    return (
      <>
        {/* Base Layer (White) */}
        {isDot ? (
           <motion.circle
             cx={cx} cy={cy} r={r}
             fill="white"
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={drawTransition}
           />
        ) : d ? (
          <motion.path
            d={d}
            stroke="white"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={drawTransition}
          />
        ) : (
           <motion.circle
             cx={cx} cy={cy} r={r}
             stroke="white"
             strokeWidth={strokeWidth}
             fill="transparent"
             initial={{ pathLength: 0, rotate: -90 }}
             animate={{ pathLength: 1 }}
             transition={drawTransition}
           />
        )}

        {/* Color Layer (Overlay) - Only renders during/after filling phase */}
        {phase !== 'drawing' && (
          isDot ? (
             <motion.circle
               cx={cx} cy={cy} r={r}
               fill={color}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ ...colorTransition, delay: customDelay }}
             />
          ) : d ? (
            <motion.path
              d={d}
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ ...colorTransition, delay: customDelay }}
            />
          ) : (
             <motion.circle
               cx={cx} cy={cy} r={r}
               stroke={color}
               strokeWidth={strokeWidth}
               fill="transparent"
               initial={{ pathLength: 0, rotate: -90 }}
               animate={{ pathLength: 1 }}
               transition={{ ...colorTransition, delay: customDelay }}
             />
          )
        )}
      </>
    );
  };

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
                {/* 1. Circle Part */}
                <RenderPath 
                   cx={g_center_x} cy={centerY} r={radius} 
                   color={colors.g} 
                   customDelay={0}
                />
                
                {/* 2. Tail Part */}
                <RenderPath 
                  d={`M ${g_center_x + radius} ${xHeightTop} L ${g_center_x + radius} ${baseline + 10} A ${radius} ${radius} 0 0 1 ${g_center_x} ${baseline + radius + 10}`}
                  color={colors.g}
                  customDelay={0.1}
                />
              </motion.g>

              {/* LETTER I */}
              <motion.g>
                {/* Stem */}
                <RenderPath 
                  d={`M ${i_x} ${xHeightTop} L ${i_x} ${baseline}`}
                  color={colors.i}
                  customDelay={0.2}
                />
                {/* Dot (using circle radius = strokeWidth/2 roughly to match width) */}
                <RenderPath 
                  isDot
                  cx={i_x} cy={xHeightTop - radius} r={strokeWidth / 2}
                  color={colors.i}
                  customDelay={0.3}
                />
              </motion.g>

              {/* LETTER O */}
              <motion.g>
                 <RenderPath 
                   cx={o_center_x} cy={centerY} r={radius} 
                   color={colors.o}
                   customDelay={0.3}
                />
              </motion.g>

            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;