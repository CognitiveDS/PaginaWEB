import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  onClick, 
  className, 
  disabled 
}) => {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
    >
      <motion.span
        className="absolute inset-0 bg-brand-accent opacity-0"
        whileHover={{ opacity: disabled ? 0 : 0.2 }}
      />
      {children}
    </motion.button>
  );
};

export default AnimatedButton;