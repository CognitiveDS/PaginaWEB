import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        'service_ytyftfn',
        'template_6ompb74',
        {
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          budget: budget,
          message: message,
        },
        'hcdGnWvTUDhrIZprA'
      );

      setIsSent(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setBudget('');
      setMessage('');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-brand-purple-light mb-12 font-serif">¿Listo para Transformar tu Negocio?</h2>
        <p className="text-center text-brand-purple-light mb-8">
          Embárcate en un viaje transformador de IA adaptado a tus necesidades únicas. Contáctanos ahora y construyamos el futuro juntos.
        </p>
        <motion.div
          className="max-w-lg mx-auto bg-gradient-to-br from-brand-purple via-brand-purple-dark to-brand-bg p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isSent ? (
            <div className="text-center text-brand-purple-light">
              <p className="text-2xl font-bold mb-4">¡Mensaje enviado!</p>
              <p>Gracias por contactarnos. Te responderemos en 1-2 días hábiles.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-brand-purple-light mb-2 font-sans">Nombre *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-3 rounded bg-brand-bg bg-opacity-50 text-brand-purple-light border border-brand-purple-light focus:outline-none focus:ring-2 focus:ring-brand-accent transition duration-300" 
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-brand-purple-light mb-2 font-sans">Apellido *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-3 rounded bg-brand-bg bg-opacity-50 text-brand-purple-light border border-brand-purple-light focus:outline-none focus:ring-2 focus:ring-brand-accent transition duration-300" 
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-brand-purple-light mb-2 font-sans">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded bg-brand-bg bg-opacity-50 text-brand-purple-light border border-brand-purple-light focus:outline-none focus:ring-2 focus:ring-brand-accent transition duration-300" 
                  required
                />
              </div>
              <div>
              <label htmlFor="budget" className="block text-brand-purple-light mb-2 font-sans">Presupuesto del Proyecto</label>
            <select 
              id="budget" 
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-3 rounded text-white bg-brand-bg bg-opacity-50 border border-brand-purple-light focus:outline-none focus:ring-2 focus:ring-brand-accent transition duration-300 custom-select"
            >
              <option value="">Selecciona un rango</option>
              <option value="Menos de 500 USD">Menos de 500 USD</option>
              <option value="Entre 500 y 1000 USD">Entre 500 y 1000 USD</option>
              <option value="Más de 1500 USD">Más de 1500 USD</option>
            </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-brand-purple-light mb-2 font-sans">Cuéntanos sobre tu proyecto (opcional)</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded bg-brand-bg bg-opacity-50 text-brand-purple-light border border-brand-purple-light focus:outline-none focus:ring-2 focus:ring-brand-accent transition duration-300"
                ></textarea>
              </div>
              <AnimatedButton 
                className="w-full bg-gradient-to-r from-brand-accent to-brand-purple text-brand-bg font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                disabled={isSending}
              >
                {isSending ? 'Enviando...' : 'Enviar Solicitud'}
              </AnimatedButton>
            </form>
          )}
        </motion.div>
      </div>
      <style jsx>{`
      .custom-select {
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E"),
                          linear-gradient(to bottom right, var(--brand-bg), var(--brand-bg), var(--brand-bg));
        background-repeat: no-repeat, repeat;
        background-position: right 0.7rem top 50%, 0 0;
        background-size: 1.5rem auto, 100%;
      }

      .custom-select option {
        background: var(--brand-bg);
        color: white;
      }

      .custom-select option:checked,
      .custom-select option:hover {
        background: var(--brand-purple-dark);
      }
    `}</style>
    </section>
  );
};

export default Contact;