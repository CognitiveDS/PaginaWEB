// components/ai_agent/ChatContainer.tsx

import React, { useState } from 'react';
import ChatBotInfo from './ChatBotInfo';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { Message } from './types';
import { X } from 'lucide-react';
import TypingIndicator from './TypingIndicator';


interface ChatContainerProps {
  onClose: () => void;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [threadID, setThreadID] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const backendURL = 'https://levy-back.replit.app'; // Asegúrate de que esta URL sea correcta

  const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'mi_API_key'; // Define NEXT_PUBLIC_API_KEY en tu entorno

  const handleSendMessage = async (messageContent: string) => {
    const userMessage: Message = { sender: 'user', content: messageContent };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    try {
      let currentThreadID = threadID;

      if (!currentThreadID) {
        const startResponse = await fetch(`${backendURL}/start?platform=Web`, {
          method: 'GET',
          headers: {
            'X-API-KEY': apiKey,
          },
        });

        if (!startResponse.ok) throw new Error('Error al obtener el thread_id');
        const startData = await startResponse.json();
        currentThreadID = startData.thread_id;
        setThreadID(currentThreadID);
      }

      const chatResponse = await fetch(`${backendURL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': apiKey,
        },
        body: JSON.stringify({
          thread_id: currentThreadID,
          message: messageContent,
        }),
      });

      if (!chatResponse.ok) throw new Error('Error al enviar el mensaje');
      const chatData = await chatResponse.json();

      const assistantMessage: Message = {
        sender: 'assistant',
        content: chatData.response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      const errorMessage: Message = {
        sender: 'assistant',
        content:
          'Ocurrió un error al procesar tu mensaje. Por favor, intenta de nuevo más tarde.',
      };
      setMessages((prev) => [...prev, errorMessage]);

    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div
      className="
        fixed 
        bottom-5 
        right-5 
        w-120 
        h-[750px] 
        bg-gradient-to-b from-[#212121] to-[#121212] 
        rounded-lg 
        shadow-xl 
        flex 
        flex-col 
        z-50 
        border 
        border-[#121212] 
        sm:w-96 sm:h-[600px]
        md:w-96 md:h-[600px]
        lg:w-[25rem] lg:h-[700px]
        xl:w-[25rem] xl:h-[800px]
        xs:w-full xs:h-full xs:bottom-0 xs:right-0 xs:rounded-none
      "
    >

      {/* Botón de cerrar */}
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
        onClick={onClose}
        aria-label="Cerrar chat"
      >
        <X className="w-6 h-6" />
      </button>
      <ChatBotInfo />
      <ChatMessages messages={messages} isTyping={isTyping} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
