import React from 'react';
import { useTheme } from 'next-themes';

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-brand-purple-dark dark:bg-brand-purple-light text-brand-purple-light dark:text-brand-purple-dark"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;