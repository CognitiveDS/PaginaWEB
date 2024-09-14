// components/Layout.tsx

import React, { ReactNode } from 'react';
import Header from './Header';
import ChatWidget from './ai_agent/ChatWidget'; 
import BotTooltip from './ai_agent/BotTooltip';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-brand-purple-dark via-brand-purple to-brand-bg">
      <Header />
      {children}
      <ChatWidget />
      <BotTooltip />
    </div>
  );
};

export default Layout;
