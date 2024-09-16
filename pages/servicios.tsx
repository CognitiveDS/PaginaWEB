import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const serviceDetails = [
  {
    title: "Asistentes Virtuales de Voz y Texto con Inteligencia Artificial",
    description: "Nuestros asistentes de IA se integran a tu página web, redes sociales y teléfono móvil, ofreciendo atención 24/7 con conocimientos personalizados sobre tu negocio. Gestionan consultas, acceden a bases de datos y automatizan tareas repetitivas.",
    image: "/images/ai-assistant-detailed.jpg"
  },
  {
    title: "Asistentes de voz",
    description: "Un equipo de IA colaborativo que incluye roles como 'Director General', 'Especialista en Marketing', 'Desarrollador Principal' y 'Revisor'. Trabajan juntos para crear campañas, evaluar estrategias y desarrollar software de forma autónoma.",
    image: "/images/multi-agent-system.jpg"
  },
  {
    title: "Servicio de Marketing Digital Automatizado",
    description: "Creamos campañas efectivas y contenido personalizado, incluyendo imágenes únicas generadas por IA de tus productos en entornos creativos. Destacamos tu marca con originalidad e impacto visual.",
    image: "/images/ai-marketing.jpg"
  },
  {
    title: "Servicio de Análisis de Datos",
    description: "Recopilamos y analizamos información valiosa sobre el comportamiento de tus clientes, permitiéndote tomar decisiones estratégicas basadas en datos reales. Optimiza tus campañas y anticípate a las demandas del mercado.",
    image: "/images/data-analysis-detailed.jpg"
  }
];

const ServiciosPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Nuestros Servicios | CognitiveDS</title>
        <meta name="description" content="Descubre nuestros servicios avanzados de inteligencia artificial para transformar tu negocio." />
      </Head>
      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl font-bold text-center text-brand-purple-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nuestros Servicios de Inteligencia Artificial
          </motion.h1>
          <p className="text-center text-brand-purple-light mb-12">
            Ofrecemos soluciones avanzadas de IA que transformarán tu negocio, optimizando procesos y mejorando la experiencia de tus clientes.
          </p>
          {serviceDetails.map((service, index) => (
            <motion.div
              key={index}
              className="mb-8 bg-brand-purple-dark p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <Image src={service.image} alt={service.title} width={500} height={300} className="rounded-lg"/>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-semibold text-brand-accent mb-4">{service.title}</h2>
                  <p className="text-brand-purple-light">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ServiciosPage;