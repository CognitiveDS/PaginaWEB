// components/ai_agent/MessageBubble.tsx

import React from 'react';
import { Message } from './types';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex mb-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
          isUser
            ? 'bg-blue-200 text-black rounded-br-none'
            : 'bg-gray-800 text-white rounded-bl-none'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default MessageBubble;
