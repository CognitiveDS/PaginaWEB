import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Parallax } from 'react-parallax';
import AnimatedButton from './AnimatedButton';

const Hero: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <Parallax
      bgImage="/images/hero-background.jpg"
      strength={500}
      bgImageStyle={{opacity: '0.3'}}
    >
      <section ref={ref} id="inicio" className="py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-brand-purple-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Transformando <span className="text-brand-accent">Datos</span> en 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-accent to-brand-purple-light"> Soluciones Inteligentes</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-6 text-brand-purple-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                En CognitiveDS, impulsamos tu negocio con análisis de datos avanzados e inteligencia artificial de vanguardia.
                Te brindamos asesoría personalizada de la mano de expertos en IA que te ayudarán a llevar tu negocio al siguiente nivel.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <AnimatedButton className="bg-brand-accent text-brand-bg px-6 py-2 rounded-full hover:bg-brand-purple-light hover:text-brand-purple-dark transition duration-300 shadow-lg">
                  Comienza ahora
                </AnimatedButton>
                <AnimatedButton className="border-2 border-brand-accent text-brand-accent px-6 py-2 rounded-full hover:bg-brand-accent hover:text-brand-bg transition duration-300">
                  Agenda ahora
                </AnimatedButton>
              </motion.div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src="/images/Imagen2.webp"
                  alt="Visualización de Datos"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  placeholder="blur"
                  blurDataURL="/images/Imagen2-blur.webp"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Hero;