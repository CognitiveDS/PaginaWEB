import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "Jorge Aremko SPA",
    role: "Dueño Aremko SPA",

    image: "/images/LOGOAREMKO1.png",
    testimonial: "CognitiveDS transformó nuestra forma de analizar datos. Su equipo es excepcional."
  },
  {
    name: "Gestionista Italia",
    role: "Dueño de Gestionista Italia",
    image: "/images/Italia.png",
    testimonial: "Las soluciones de IA que nos proporcionaron han sido un cambio de juego para nuestro negocio."
  },
  
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-brand-purple-light mb-12">Testimonios</h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-brand-purple-dark p-8 rounded-lg shadow-xl"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-lg text-brand-purple-light mb-4">&ldquo;{testimonials[currentIndex].testimonial}&rdquo;</p>
                  <h3 className="text-xl font-semibold text-brand-accent">{testimonials[currentIndex].name}</h3>
                  <p className="text-brand-purple-light">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-brand-accent text-white p-2 rounded-full"
            aria-label="Testimonio anterior"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-brand-accent text-white p-2 rounded-full"
            aria-label="Siguiente testimonio"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;