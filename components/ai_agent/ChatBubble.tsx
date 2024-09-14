// components/ai_agent/ChatBubble.tsx

import React from 'react';

interface ChatBubbleProps {
  onClick: () => void;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ onClick }) => {
  return (
    <button
      className="fixed bottom-5 right-5 w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-purple-800 transition-colors"
      onClick={onClick}
    >
      <img src="/images/ai-bot-icon.png" alt="Chat" className="w-16 h-16" />
    </button>
  );
};

export default ChatBubble;
