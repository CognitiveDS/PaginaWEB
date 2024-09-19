import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Jorge Aremko SPA",
    role: "Dueño Aremko SPA",
    image: "/images/LOGOAREMKO1.webp",
    testimonial: "CognitiveDS transformó nuestra forma de analizar datos. Su equipo es excepcional."
  },
  {
    name: "Gestionista Italia",
    role: "Dueño de Gestionista Italia",
    image: "/images/Italia.webp",
    testimonial: "Las soluciones de IA que nos proporcionaron han sido un cambio de juego para nuestro negocio."
  },
  // Puedes agregar más testimonios aquí
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonios" className="py-20 mt-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-brand-purple-light mb-12">Testimonios</h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="bg-brand-purple-dark p-6 md:p-8 rounded-lg shadow-xl"
            >
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg text-brand-purple-light mb-4">&ldquo;{testimonials[currentIndex].testimonial}&rdquo;</p>
                  <h3 className="text-xl font-semibold text-brand-accent">{testimonials[currentIndex].name}</h3>
                  <p className="text-brand-purple-light">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;