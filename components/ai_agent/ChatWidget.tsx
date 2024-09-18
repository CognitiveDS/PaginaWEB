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
      {!isOpen && <ChatBubble onClick={handleToggleChat} />}
      <ChatContainer onClose={handleToggleChat} isOpen={isOpen} />
    </>
  );
};

export default ChatWidget;