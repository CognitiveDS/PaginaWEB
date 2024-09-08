import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        'service_ytyftfn', // Reemplaza con tu Service ID de Email.js
        'template_6ompb74', // Reemplaza con tu Template ID de Email.js
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        'hcdGnWvTUDhrIZprA' // Reemplaza con tu User ID de Email.js
      );

      setIsSent(true);
      setName('');
      setEmail('');
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
        <h2 className="text-4xl font-bold text-center text-brand-purple-light mb-12 font-serif">Contáctanos</h2>
        <motion.div
          className="max-w-lg mx-auto bg-gradient-to-br from-brand-purple via-brand-purple-dark to-brand-bg p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isSent ? (
            <div className="text-center text-brand-purple-light">
              <p className="text-2xl font-bold mb-4">¡Mensaje enviado!</p>
              <p>Gracias por contactarnos. Te responderemos pronto.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-brand-purple-light mb-2 font-sans">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded bg-brand-bg bg-opacity-50 text-brand-purple-light border border-brand-purple-light focus:outline-none focus:ring-2 focus:ring-brand-accent transition duration-300" 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-brand-purple-light mb-2 font-sans">Email</label>
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
                <label htmlFor="message" className="block text-brand-purple-light mb-2 font-sans">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded bg-brand-bg bg-opacity-50 text-brand-purple-light border border-brand-purple-light focus:outline-none focus:ring-2 focus:ring-brand-accent transition duration-300"
                  required
                ></textarea>
              </div>
              <AnimatedButton 
                className="w-full bg-gradient-to-r from-brand-accent to-brand-purple text-brand-bg font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                disabled={isSending}
              >
                {isSending ? 'Enviando...' : 'Enviar Mensaje'}
              </AnimatedButton>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;