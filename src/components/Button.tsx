import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  external?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href,
  external,
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-200",
    secondary: "bg-stone-200 text-stone-800 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700",
    ghost: "bg-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100 dark:text-stone-400 dark:hover:text-stone-100 dark:hover:bg-stone-800 px-4",
  };

  const finalClassName = `${baseStyle} ${variants[variant]} ${className}`;

  // Spring animation config
  const hoverAnim = { scale: 1.05 };
  const tapAnim = { scale: 0.95 };
  const transition = { type: "spring" as const, stiffness: 400, damping: 17 };

  if (href) {
    return (
      <motion.a
        href={href}
        className={finalClassName}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        whileHover={hoverAnim}
        whileTap={tapAnim}
        transition={transition}
        {...(props as any)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={finalClassName}
      whileHover={hoverAnim}
      whileTap={tapAnim}
      transition={transition}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;