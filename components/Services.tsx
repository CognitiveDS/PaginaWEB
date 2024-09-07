import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChartBar, FaBrain, FaLightbulb } from 'react-icons/fa';
import ScrollAnimation from './ScrollAnimation';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center text-brand-purple-light mb-12 font-serif">Nuestros Servicios</h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index}>
              <motion.div
                className="bg-brand-purple-dark bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-40 mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    quality={100}
                    placeholder="blur"
                    blurDataURL={`${service.image}-blur.webp`}
                  />
                </div>
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-brand-accent font-sans">{service.title}</h3>
                <p className="text-brand-purple-light font-serif">{service.description}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    icon: <FaChartBar className="text-4xl mb-4 text-brand-accent" />,
    title: "Análisis de Datos",
    description: "Transformamos tus datos brutos en información accionable para impulsar decisiones estratégicas.",
    image: "/images/data-analysis.jpg",
  },
  {
    icon: <FaBrain className="text-4xl mb-4 text-brand-accent" />,
    title: "Aprendizaje Automático",
    description: "Implementamos modelos de ML de vanguardia para optimizar tus procesos y predecir tendencias.",
    image: "/images/machine-learning.jpg",
  },
  {
    icon: <FaLightbulb className="text-4xl mb-4 text-brand-accent" />,
    title: "Consultoría en IA",
    description: "Te guiamos en la integración de IA en tus operaciones para maximizar la eficiencia y la innovación.",
    image: "/images/ai-consulting.jpg",
  },
];

export default Services;