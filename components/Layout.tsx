import React, { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-brand-purple-dark via-brand-purple to-brand-bg">
      <Header />
      {children}
    </div>
  );
};

export default Layout;