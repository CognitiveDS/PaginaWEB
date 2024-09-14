// components/ai_agent/ChatHeader.tsx

import React from 'react';

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
  return (
    <div className="flex items-center justify-center bg-purple-600 h-12 rounded-t-lg relative">
      <img src="/images/logo.png" alt="Logo" className="h-8" />
      <button
        className="absolute right-4 text-white text-xl focus:outline-none"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
};

export default ChatHeader;
