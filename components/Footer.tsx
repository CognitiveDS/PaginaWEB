import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-purple-dark text-brand-purple-light py-4">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="text-sm">
          <span className="mr-4">&copy; 2024 Cognitive Data Solutions. Todos los derechos reservados.</span>
          <Link href="/privacidad" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-brand-accent transition-colors duration-300">
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;