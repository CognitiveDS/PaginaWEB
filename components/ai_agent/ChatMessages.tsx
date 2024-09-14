// components/ai_agent/ChatMessages.tsx

import React from 'react';
import MessageBubble from './MessageBubble';
import { Message } from './types';

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}
import { useEffect, useRef } from 'react';

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isTyping }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);
  
    return (
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
        {isTyping && (
          <div className="flex mb-2">
            <div className="max-w-xs px-3 py-2 rounded-lg text-sm bg-gray-800 text-white">
              Escribiendo...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    );
  };
  
  export default ChatMessages;
