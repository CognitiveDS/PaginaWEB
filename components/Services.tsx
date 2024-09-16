import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const serviceItems = [
  {
    title: "Asistentes Virtuales de IA de texto",
    description: "Asistentes de IA especializados en texto integrados en redes sociales y sitios web para respuestas rápidas y coherentes a las consultas de los usuarios 24/7.",
    icon: "/images/AI.webp"
  },
  {
    title: "Asistentes Virtuales de IA de voz",
    description: "Asistentes 24/7 integrados en números de teléfono para atender llamadas, con conocimiento personalizado de tu negocio.",
    icon: "/images/Voice.webp"
  },
  {
    title: "Marketing Digital Automatizado",
    description: "Campañas personalizadas y contenido visual único generado por IA para destacar tu marca.",
    icon: "/images/Marketing.webp"
  },
  {
    title: "Análisis de Datos",
    description: "Insights valiosos sobre el comportamiento de tus clientes para decisiones estratégicas informadas.",
    icon: "/images/Analisis.webp"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-1">
        <motion.h2 
          className="text-4xl font-bold text-center text-brand-purple-light mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              className="bg-brand-purple-dark p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={service.icon} alt={service.title} width={500} height={600} className="mb-4"/>
              <h3 className="text-xl font-semibold text-brand-accent mb-2">{service.title}</h3>
              <p className="text-brand-purple-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/servicios"  target="_blank" rel="noopener noreferrer" className="bg-brand-accent text-brand-bg px-6 py-3 rounded-full font-bold hover:bg-brand-purple-light hover:text-brand-purple-dark transition duration-300">
            Ver más
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;