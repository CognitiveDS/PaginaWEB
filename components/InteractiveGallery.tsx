import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  // Añade tus items aquí
];

const InteractiveGallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {galleryItems.map((item) => (
        <motion.div
          key={item.id}
          layoutId={`container-${item.id}`}
          onClick={() => setSelectedId(item.id)}
          className="cursor-pointer"
        >
          <motion.div className="relative h-64">
            <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
          </motion.div>
          <motion.h5 className="text-xl mt-2">{item.title}</motion.h5>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={`container-${selectedId}`}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-lg max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h5>{galleryItems.find(item => item.id === selectedId)?.title}</h5>
              <p>{galleryItems.find(item => item.id === selectedId)?.description}</p>
              <motion.button
                onClick={() => setSelectedId(null)}
                className="mt-4 bg-brand-accent text-white px-4 py-2 rounded"
              >
                Cerrar
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveGallery;