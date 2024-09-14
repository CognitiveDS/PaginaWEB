// components/ai_agent/ChatBubble.tsx


import React, { useEffect, useState } from 'react';


interface ChatBubbleProps {
  onClick: () => void;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ onClick }) => {

  const [isShining, setIsShining] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShining(false);
    }, 3000); // Duración del brillo en milisegundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      className={`fixed bottom-5 right-5 w-20 h-20 bg-[#121212] rounded-full flex items-center justify-center z-50 hover:bg-gray-800 transition-colors ${
        isShining ? 'shine-effect' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative">
        <img src="/images/ai-bot-icon.png" alt="Chat" className="w-16 h-16" />
        {isShining && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shine rounded-full"></div>
        )}
      </div>

    </button>
  );
};

export default ChatBubble;
