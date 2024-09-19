import React from 'react';
import { motion } from 'framer-motion';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

const Contact: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#6366f1"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-brand-purple via-brand-purple-dark to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-brand-purple-light mb-12 font-serif">¿Listo para Transformar tu Negocio?</h2>
        <p className="text-center text-brand-purple-light mb-8">
          Embárcate en un viaje transformador de IA adaptado a tus necesidades únicas. Contáctanos ahora y construyamos el futuro juntos.
        </p>
        <motion.div
          className="max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cal
            calLink="levy-ai/meeting"
            style={{
              width: "100%",
              height: "700px",
              overflow: "hidden"
            }}
            config={{
              layout: 'month_view',
              theme: 'dark',
            }}
          />
        </motion.div>
      </div>
      <style jsx global>{`
        @media (max-width: 768px) {
          /* Estilos para móviles */
          [data-cal-namespace] .Cal__Embedded {
            width: 100% !important;
            height: 600px !important;
          }
        }
        @media (min-width: 769px) {
          /* Estilos para PC */
          [data-cal-namespace] .Cal__Embedded {
            width: 100% !important;
            min-height: 700px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;