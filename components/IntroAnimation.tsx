import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'idle' | 'filling' | 'exit'>('idle');

  useEffect(() => {
    // Timeline sequence
    const timer1 = setTimeout(() => setPhase('filling'), 200); // Start filling quickly after mount
    const timer2 = setTimeout(() => setPhase('exit'), 4200);   // Allow enough time for long animation
    const timer3 = setTimeout(onComplete, 5000);

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
  const g_center_x = 95;
  const i_x = 160;
  const o_center_x = 225;

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
  const gTailPath = `M ${g_center_x + radius} ${xHeightTop} L ${g_center_x + radius} ${baseline + 10} A ${radius} ${radius} 0 0 1 ${g_center_x} ${baseline + radius + 10}`;
  const iStemPath = `M ${i_x} ${xHeightTop} L ${i_x} ${baseline}`;
  const oCirclePath = getCirclePath(o_center_x, centerY, radius);

  // Transitions
  const baseTransition = { duration: 0.8, ease: "easeOut" as const };
  const traceTransition = { duration: 2.0, ease: "easeInOut" as const }; // Prolonged

  /**
   * TraceablePath Component
   * Renders the dim white base track and the colored tracer overlay.
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
        {/* 1. Base Layer (White Track) - Fades in, no path drawing */}
        <motion.path
          d={d}
          stroke="white"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={baseTransition}
        />

        {/* 2. Color Layer (Overlay) - Follows the tracer */}
        {phase === 'filling' && (
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
        {phase === 'filling' && (
          <motion.circle
            r={6} 
            fill="white"
            initial={{ offsetDistance: "0%", opacity: 1 }}
            animate={{ offsetDistance: "100%", opacity: 0 }}
            transition={{ 
              offsetDistance: { ...traceTransition, delay: customDelay },
              opacity: { duration: 0.3, delay: customDelay + traceTransition.duration - 0.1 } 
            }}
            style={{
              offsetPath: `path("${d}")`,
              // @ts-ignore
              offsetRotate: "0deg",
            }}
          />
        )}
      </>
    );
  };

  /**
   * Dot Component
   */
  const Dot = ({ cx, cy, color, customDelay }: { cx: number, cy: number, color: string, customDelay: number }) => (
    <>
      <motion.circle
        cx={cx} cy={cy} r={strokeWidth / 2}
        fill="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={baseTransition}
      />
      {phase === 'filling' && (
        <motion.circle
          cx={cx} cy={cy} r={strokeWidth / 2}
          fill={color}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: customDelay, type: "spring" }}
        />
      )}
    </>
  );

  // Use Portal to escape local stacking context of <main>
  return createPortal(
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } }}
        >
          <div className="relative w-full max-w-lg aspect-[2/1] p-8">
            <svg viewBox="0 0 320 160" className="w-full h-full overflow-visible">
              
              {/* LETTER G */}
              <motion.g>
                <TraceablePath d={gCirclePath} color={colors.g} customDelay={0} />
                <TraceablePath d={gTailPath} color={colors.g} customDelay={0.6} />
              </motion.g>

              {/* LETTER I */}
              <motion.g>
                <TraceablePath d={iStemPath} color={colors.i} customDelay={1.0} />
                <Dot cx={i_x} cy={xHeightTop - radius} color={colors.i} customDelay={1.6} />
              </motion.g>

              {/* LETTER O */}
              <motion.g>
                 <TraceablePath d={oCirclePath} color={colors.o} customDelay={1.4} />
              </motion.g>

            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default IntroAnimation;