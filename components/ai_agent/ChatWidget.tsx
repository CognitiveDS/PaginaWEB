// components/ai_agent/ChatWidget.tsx

import React, { useState } from 'react';
import ChatBubble from './ChatBubble';
import ChatContainer from './ChatContainer';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatBubble onClick={handleToggleChat} />
      {isOpen && <ChatContainer onClose={handleToggleChat} />}
    </>
  );
};

export default ChatWidget;
