// components/ai_agent/ChatInput.tsx

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex p-2 border-t">
      <input
        type="text"
        className="flex-1 p-2 border rounded-l-lg focus:outline-none"
        placeholder="Escribe un mensaje..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
        <Button variant="default" onClick={handleSendMessage}
        className="p-2 bg-purple-700 text-white rounded-r-lg hover:bg-purple-800"
      >
        Enviar
        </Button>
    </div>
  );
};

export default ChatInput;
