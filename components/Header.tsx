import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `fixed w-full z-10 transition-all duration-300 ${
    isScrolled ? 'bg-brand-purple-dark py-2' : 'bg-brand-purple py-4'
  }`;

  const navItems = [
    { name: 'INICIO', id: 'inicio' },
    { name: 'SERVICIOS', id: 'servicios' },
    { name: 'EQUIPO', id: 'equipo' },
    { name: 'TESTIMONIOS', id: 'testimonios' },
    { name: 'CONTACTO', id: 'contacto' }
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="CognitiveDS Logo" width={40} height={40} />
          <span className="text-xl md:text-2xl font-bold ml-2 text-brand-silver">Cognitive Data Solutions</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 justify-end">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="text-brand-silver focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0',
                    fontWeight: 'normal'
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
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
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      handleScroll(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 px-4 text-brand-silver focus:outline-none"
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 'normal'
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;