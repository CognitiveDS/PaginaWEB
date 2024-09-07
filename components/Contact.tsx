import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-brand-purple-light mb-12 font-serif">Contáctanos</h2>
        <motion.div
          className="max-w-lg mx-auto bg-gradient-to-br from-brand-purple via-brand-purple-dark to-brand-bg p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-brand-purple-light mb-2 font-sans">Nombre</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-3 rounded bg-brand-bg bg-opacity-50 text-brand-purple-light border border-brand-purple-light focus:outline-none focus:ring-2 focus:ring-brand-accent transition duration-300" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-brand-purple-light mb-2 font-sans">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-3 rounded bg-brand-bg bg-opacity-50 text-brand-purple-light border border-brand-purple-light focus:outline-none focus:ring-2 focus:ring-brand-accent transition duration-300" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-brand-purple-light mb-2 font-sans">Mensaje</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full p-3 rounded bg-brand-bg bg-opacity-50 text-brand-purple-light border border-brand-purple-light focus:outline-none focus:ring-2 focus:ring-brand-accent transition duration-300"
              ></textarea>
            </div>
            <AnimatedButton className="w-full bg-gradient-to-r from-brand-accent to-brand-purple text-brand-bg font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              Enviar Mensaje
            </AnimatedButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;