import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, onClick, className }) => {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <motion.span
        className="absolute inset-0 bg-brand-accent opacity-0"
        whileHover={{ opacity: 0.2 }}
      />
      {children}
    </motion.button>
  );
};

export default AnimatedButton;