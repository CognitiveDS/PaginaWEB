// components/ai_agent/BotTooltip.tsx

import React from 'react';

const BotTooltip: React.FC = () => {
  return (
    <div className="fixed bottom-28 right-20 z-50">
      <div className="relative">
        <div className="bg-purple-700 text-white text-sm py-2 px-4 rounded-lg shadow-lg">
          ¡Responde tus preguntas con nuestro agente!
        </div>
        <div className="absolute top-full right-1/2 transform translate-x-1/2">
          <svg
            className="text-purple-700 h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <polygon points="10,0 0,10 20,10" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BotTooltip;
