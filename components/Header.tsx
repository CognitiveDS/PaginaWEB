import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `fixed w-full z-10 transition-all duration-300 ${
    isScrolled ? 'bg-brand-purple-dark shadow-lg py-2' : 'bg-brand-purple py-4'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="CognitiveDS Logo" width={40} height={40} />
            <span className="text-xl md:text-2xl font-bold ml-2 text-brand-silver">Cognitive Data Solutions</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {['INICIO', 'SERVICIOS', 'EQUIPO', 'TESTIMONIOS', 'CONTACTO'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-brand-lavender transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/comunidad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-brand-lavender transition-colors"
                >
                  COMUNIDAD
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="md:hidden mt-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col space-y-2">
                {['INICIO', 'SERVICIOS', 'EQUIPO', 'TESTIMONIOS', 'CONTACTO'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="block py-2 px-4 hover:bg-brand-light-purple rounded transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="/comunidad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 px-4 hover:bg-brand-light-purple rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    COMUNIDAD
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;