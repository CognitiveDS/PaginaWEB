// components/ai_agent/ChatBotInfo.tsx
import Image from 'next/image';
import React from 'react';

const ChatBotInfo: React.FC = () => {
  return (
    <div className="text-center my-4">
      <Image src="/images/ai-bot-icon.png" alt="Levy" className="w-24 h-24 mx-auto rounded-full" width={50} height={50} layout="responsive" />
      <span className="block text-lg font-bold mt-2 text-white">Hola, Soy Levy! 👋</span>
      <span className="block text-sm text-gray-300">Asistente de IA</span>
    </div>
  );
};

export default ChatBotInfo;


