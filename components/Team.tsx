import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Team: React.FC = () => {
  return (
    <section id="equipo" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-brand-purple-light mb-12 font-serif">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center bg-brand-purple-dark bg-opacity-50 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  placeholder="blur"
                  blurDataURL={`${member.image}-blur.webp`}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-accent font-sans">{member.name}</h3>
              <p className="text-brand-purple-light font-serif mb-4">{member.role}</p>
              <p className="text-brand-purple-light font-serif text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const teamMembers = [
  {
    name: "Jorge Daniel Carreón Guzmán",
    role: "Director Ejecutivo",
    image: "/images/juan-perez.jpg",
    bio: "Con más de 2 años de experiencia en IA y análisis de datos, Daniel lidera nuestra visión estratégica."
  },
  {
    name: "Rodrigo De La Torre Sánchez",
    role: "Directora general CognitiveDS",
    image: "/images/maria-garcia.jpg",
    bio: "Con mas de un año de experiencia en IA."
  },
  {
    name: "Alex Seis Espinoza",
    role: "Desarrollador Principal",
    image: "/images/carlos-rodriguez.jpg",
    bio: "Especialista en big data y modelado predictivo, Carlos impulsa nuestras soluciones más innovadoras."
  },
  {
    name: "Alex Seis Espinoza",
    role: "Desarrollador Principal",
    image: "/images/carlos-rodriguez.jpg",
    bio: "Especialista en big data y modelado predictivo, Carlos impulsa nuestras soluciones más innovadoras."
  },
  {
    name: "Alex Seis Espinoza",
    role: "Desarrollador Principal",
    image: "/images/carlos-rodriguez.jpg",
    bio: "Especialista en big data y modelado predictivo, Carlos impulsa nuestras soluciones más innovadoras."
  },
  {
    name: "Alex Seis Espinoza",
    role: "Desarrollador Principal",
    image: "/images/carlos-rodriguez.jpg",
    bio: "Especialista en big data y modelado predictivo, Carlos impulsa nuestras soluciones más innovadoras."
  },

];

export default Team;