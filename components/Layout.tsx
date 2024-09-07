import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-brand-purple-dark via-brand-purple to-brand-bg">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;