import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  onClick, 
  className, 
  disabled, 
  ...props 
}) => {
  const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    onClick,
    className: `relative overflow-hidden ${className || ''}`,
    disabled,
    ...props
  };

  const motionProps: HTMLMotionProps<"div"> = {
    whileHover: { scale: disabled ? 1 : 1.05 },
    whileTap: { scale: disabled ? 1 : 0.95 },
  };

  return (
    <motion.div {...motionProps}>
      <button {...buttonProps}>
        <motion.span
          className="absolute inset-0 bg-brand-accent opacity-0"
          whileHover={{ opacity: disabled ? 0 : 0.2 }}
        />
        {children}
      </button>
    </motion.div>
  );
};

export default AnimatedButton;