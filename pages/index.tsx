import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Testimonios from '../components/Testimonios';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import Stats from '@/components/Stats';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-brand-bg min-h-screen relative">
      <Layout>
        <Header />
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <Services />
        </FadeInSection>
        <FadeInSection>
          <Team />
        </FadeInSection>
        <FadeInSection>
        <Testimonios />
        </FadeInSection>
        <FadeInSection>
        <Stats />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
        <Footer />
      </Layout>


      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-brand-purple text-brand-purple-light p-3 rounded-full shadow-lg hover:bg-brand-purple-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-light z-50"
          aria-label="Volver arriba"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Home;