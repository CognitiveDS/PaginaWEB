// components/Layout.tsx

import React, { ReactNode } from 'react';
import Header from './Header';
import ChatWidget from './ai_agent/ChatWidget'; // Importar el componente del chatbot

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-brand-purple-dark via-brand-purple to-brand-bg">
      <Header />
      {children}
      <ChatWidget /> {/* Añadir el componente del chatbot aquí */}
    </div>
  );
};

export default Layout;
