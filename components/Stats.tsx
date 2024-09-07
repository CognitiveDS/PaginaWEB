import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { number: 30, label: 'Proyectos Completados' },
  { number: 15, label: 'Clientes Satisfechos' },
  { number: 95, label: 'Tasa de Éxito', suffix: '%' },
  { number: 2, label: 'Años de Trayectoria' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Nuestros Logros</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CountUp
                end={stat.number}
                duration={2.5}
                suffix={stat.suffix}
                className="text-4xl font-bold text-brand-accent"
              />
              <p className="text-lg text-white mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;