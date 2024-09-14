// components/ai_agent/ChatBotInfo.tsx

import React from 'react';

const ChatBotInfo: React.FC = () => {
  return (
    <div className="text-center my-4">

      <div className="w-24 h-24 mx-auto rounded-full bg-[#121212] flex items-center justify-center">
        <img src="/images/ai-bot-icon.png" alt="Levy" className="w-20 h-20" />
      </div>
      <span className="block text-lg font-bold mt-2 text-white">Hola, Soy Levy! 👋</span>
      <span className="block text-sm text-gray-300">Agente de IA</span>
      <div className="border-b border-gray-700 mx-4 my-2"></div>

    </div>
  );
};

export default ChatBotInfo;
