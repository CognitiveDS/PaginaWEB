import React from 'react';
import { Message } from './types';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isTyping }) => {
  return (
    <div className="flex-grow overflow-y-auto p-4">
      {messages.map((message, index) => (
        <MessageBubble key={index} message={message} />
      ))}
      {isTyping && <TypingIndicator />}
    </div>
  );
};

export default ChatMessages;