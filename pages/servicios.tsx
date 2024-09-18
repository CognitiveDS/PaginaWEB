import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Link from 'next/link'; // Importar el componente Link

const serviceDetails = [
  {
    title: "Asistentes Virtuales de Voz y Texto con Inteligencia Artificial",
    description: "Nuestros asistentes de IA especializados en texto se integran fácilmente con redes sociales y sitios web para proporcionar respuestas rápidas y coherentes a las consultas de los usuarios. Estos asistentes están diseñados para ofrecer un soporte personalizado y eficiente, gestionando desde preguntas frecuentes hasta interacciones más complejas. Además, aprenden continuamente de las interacciones previas, optimizando la experiencia del usuario con cada respuesta. Simplifica la gestión de la comunicación digital de tu negocio mientras mantienes una presencia en línea activa y confiable.",
    image: "/images/AI.webp"
  },
  {
    title: "Asistentes de voz",
    description: "Los asistentes de IA de voz están diseñados para gestionar de manera autónoma interacciones telefónicas, ofreciendo respuestas en tiempo real y brindando información precisa a los usuarios. Estos asistentes pueden automatizar tareas repetitivas, como la toma de citas, procesamiento de solicitudes o activación de servicios. Además, durante las llamadas, son capaces de segmentar clientes en función de sus respuestas y comportamientos, adaptando la conversación para proporcionar una experiencia más personalizada y eficiente. Con capacidades avanzadas de reconocimiento de voz y procesamiento del lenguaje natural, estos asistentes optimizan la comunicación empresarial, mejorando tanto la atención al cliente como los procesos internos.",
    image: "/images/Voice.webp"
  },
  {
    title: "Servicio de Marketing Digital Automatizado",
    description: "Transforma tu marketing con campañas automatizadas impulsadas por IA, diseñadas para captar la atención de tu público objetivo de manera eficiente. Nuestro servicio incluye la creación de contenido visual personalizado, utilizando imágenes generadas por IA para reflejar la identidad única de tu marca. Desde la planificación estratégica hasta la ejecución de campañas, optimizamos cada paso del proceso para aumentar tu alcance y maximizar los resultados. Asegura una presencia visual impactante y constante sin esfuerzo manual.",
    image: "/images/Marketing.webp"
  },
  {
    title: "Servicio de Análisis de Datos",
    description: "Descubre el valor de la información detrás de cada interacción con tu cliente. Nuestro servicio de análisis de datos utiliza IA para segmentar, clasificar y extraer patrones clave de todas las conversaciones, proporcionando una visión profunda de las preferencias y comportamientos de tus clientes. Con este análisis, puedes tomar decisiones más informadas, ajustar estrategias comerciales y mejorar la satisfacción del cliente. Conoce mejor a tu audiencia y optimiza cada aspecto de tu negocio con datos en tiempo real.",
    image: "/images/Analisis.webp"
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

          {/* Botón para volver a la sección de servicios */}
          <div className="text-center mt-8">
            <Link href="/" className="bg-brand-purple light hover:bg-brand-accent-dark text-white font-semibold py-2 px-6 rounded-lg shadow-lg">
              Regresar a página principal
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiciosPage;
