import React from 'react';
import { motion, Variants } from 'framer-motion';

type ScribbleType = 'underline' | 'circle' | 'sparkle' | 'squiggle';

interface ScribbleProps {
  type: ScribbleType;
  className?: string;
  color?: string;
  delay?: number;
}

const Scribble: React.FC<ScribbleProps> = ({ type, className = '', color = 'currentColor', delay = 0 }) => {
  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 0.9, 
        ease: "easeInOut" as const,
        delay: delay 
      }
    }
  };

  const renderPath = () => {
    switch (type) {
      case 'underline':
        return (
          <motion.path
            d="M 10 10 C 60 25 140 25 190 10"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            variants={pathVariants}
          />
        );
      case 'circle':
        return (
          <motion.path
             d="M30 15c-15 10-20 40 5 55s60 10 75-15c10-20-5-50-35-50-25 0-45 25-35 55"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            variants={pathVariants}
          />
        );
      case 'squiggle':
         return (
          <motion.path
            d="M5 15c10-10 20 10 30 0s20-10 30 0 20 10 30 0"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            variants={pathVariants}
          />
         );
      case 'sparkle':
        return (
          <>
             <motion.path d="M15 0 L15 30 M0 15 L30 15" stroke={color} strokeWidth="2" strokeLinecap="round" variants={pathVariants} />
             <motion.path d="M5 5 L25 25 M5 25 L25 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" variants={pathVariants} />
          </>
        );
      default:
        return null;
    }
  };

  const getSvgSize = () => {
     switch(type) {
        case 'underline': return { viewBox: "0 0 200 30", className: "w-full h-auto" };
        case 'circle': return { viewBox: "0 0 120 80", className: "w-[120%] h-[140%] -top-[20%] -left-[10%]" };
        case 'squiggle': return { viewBox: "0 0 100 30", className: "w-24 h-8" };
        case 'sparkle': return { viewBox: "0 0 30 30", className: "w-8 h-8" };
        default: return { viewBox: "0 0 100 100", className: "" };
     }
  }

  const { viewBox, className: defaultClass } = getSvgSize();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={`absolute pointer-events-none ${defaultClass} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {renderPath()}
    </motion.svg>
  );
};

export default Scribble;