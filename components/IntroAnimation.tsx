import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'drawing' | 'filling' | 'exit'>('drawing');

  useEffect(() => {
    // Timeline sequence
    const timer1 = setTimeout(() => setPhase('filling'), 1500); // Start filling
    const timer2 = setTimeout(() => setPhase('exit'), 3800);    // Start exit
    const timer3 = setTimeout(onComplete, 4600);                // Unmount

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  // Design Constants
  const strokeWidth = 38; 
  const radius = 32;      
  const centerY = 75;     
  const xHeightTop = centerY - radius; 
  const baseline = centerY + radius;   
  
  // Positions
  const g_center_x = 75;
  const i_x = 160;
  const o_center_x = 245;

  // Colors
  const colors = {
    g: '#3b82f6', // blue-500
    i: '#ec4899', // pink-500
    o: '#10b981', // emerald-500
  };

  // Helper to generate circle path data (starts top, goes clockwise)
  const getCirclePath = (cx: number, cy: number, r: number) => {
    return `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx} ${cy + r} A ${r} ${r} 0 1 1 ${cx} ${cy - r}`;
  };

  // Path Definitions
  const gCirclePath = getCirclePath(g_center_x, centerY, radius);
  // Tail: Starts top of x-height, goes down, curves left
  const gTailPath = `M ${g_center_x + radius} ${xHeightTop} L ${g_center_x + radius} ${baseline + 10} A ${radius} ${radius} 0 0 1 ${g_center_x} ${baseline + radius + 10}`;
  const iStemPath = `M ${i_x} ${xHeightTop} L ${i_x} ${baseline}`;
  const oCirclePath = getCirclePath(o_center_x, centerY, radius);

  // Transitions
  const drawTransition = { duration: 1.0, ease: "easeInOut" as const };
  const traceTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  /**
   * TraceablePath Component
   * Renders the white base, the colored stroke, and the "bead" tracer.
   */
  const TraceablePath = ({ 
    d, 
    color, 
    customDelay = 0 
  }: { 
    d: string, 
    color: string, 
    customDelay?: number 
  }) => {
    return (
      <>
        {/* 1. Base Layer (White) - Draws first */}
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

        {/* 2. Color Layer (Overlay) - Follows the tracer */}
        {phase !== 'drawing' && (
          <motion.path
            d={d}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ...traceTransition, delay: customDelay }}
          />
        )}

        {/* 3. The Tracer Bead - Moves along the path */}
        {phase !== 'drawing' && (
          <motion.circle
            r={6} // Bead size
            fill="white"
            initial={{ offsetDistance: "0%", opacity: 1 }}
            animate={{ offsetDistance: "100%", opacity: 0 }}
            transition={{ 
              offsetDistance: { ...traceTransition, delay: customDelay },
              opacity: { duration: 0.2, delay: customDelay + traceTransition.duration - 0.2 } // Fade out at end
            }}
            style={{
              offsetPath: `path("${d}")`,
              // @ts-ignore - offsetPath type defs can be tricky in some react versions
              offsetRotate: "0deg",
            }}
          />
        )}
      </>
    );
  };

  /**
   * Simple Dot Component (Tracer doesn't look good on a dot, just pop it)
   */
  const Dot = ({ cx, cy, color, customDelay }: { cx: number, cy: number, color: string, customDelay: number }) => (
    <>
      <motion.circle
        cx={cx} cy={cy} r={strokeWidth / 2}
        fill="white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={drawTransition}
      />
      {phase !== 'drawing' && (
        <motion.circle
          cx={cx} cy={cy} r={strokeWidth / 2}
          fill={color}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ...traceTransition, delay: customDelay, type: "spring" }}
        />
      )}
    </>
  );

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
                <TraceablePath d={gCirclePath} color={colors.g} customDelay={0} />
                <TraceablePath d={gTailPath} color={colors.g} customDelay={0.4} />
              </motion.g>

              {/* LETTER I */}
              <motion.g>
                <TraceablePath d={iStemPath} color={colors.i} customDelay={0.6} />
                <Dot cx={i_x} cy={xHeightTop - radius} color={colors.i} customDelay={0.7} />
              </motion.g>

              {/* LETTER O */}
              <motion.g>
                 <TraceablePath d={oCirclePath} color={colors.o} customDelay={0.8} />
              </motion.g>

            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;