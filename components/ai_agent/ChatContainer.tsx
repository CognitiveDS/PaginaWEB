import React, { useState, useEffect } from 'react';
import ChatBotInfo from './ChatBotInfo';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { Message } from './types';
import { X } from 'lucide-react';
import TypingIndicator from './TypingIndicator';

interface ChatContainerProps {
  onClose: () => void;
  isOpen: boolean;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ onClose, isOpen }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [threadID, setThreadID] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://levy-back.replit.app';
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'mi_API_key';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSendMessage = async (messageContent: string) => {
    const userMessage: Message = { sender: 'user', content: messageContent };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      let currentThreadID = threadID || await getThreadID();
      const chatData = await sendChatMessage(currentThreadID, messageContent);

      const assistantMessage: Message = {
        sender: 'assistant',
        content: chatData.response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      const errorMessage: Message = {
        sender: 'assistant',
        content: 'Ocurrió un error al procesar tu mensaje. Por favor, intenta de nuevo más tarde.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const getThreadID = async (): Promise<string> => {
    const startResponse = await fetch(`${backendURL}/start?platform=Web`, {
      method: 'GET',
      headers: { 'X-API-KEY': apiKey },
    });
    if (!startResponse.ok) throw new Error('Error al obtener el thread_id');
    const startData = await startResponse.json();
    setThreadID(startData.thread_id);
    return startData.thread_id;
  };

  const sendChatMessage = async (threadId: string, message: string) => {
    const chatResponse = await fetch(`${backendURL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
      },
      body: JSON.stringify({ thread_id: threadId, message }),
    });
    if (!chatResponse.ok) throw new Error('Error al enviar el mensaje');
    return chatResponse.json();
  };

  return (
    <div
      className={`
        fixed inset-0 bg-gradient-to-b from-[#212121] to-[#121212]
        flex flex-col z-50 transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        sm:bottom-5 sm:right-5 sm:inset-auto sm:w-[90vw] sm:h-[80vh] sm:max-w-[500px] sm:max-h-[600px] sm:rounded-lg
        md:w-[60vw] md:h-[70vh]
        lg:w-[40vw] lg:h-[80vh]
        xl:w-[30vw] xl:h-[90vh]
      `}
    >
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 z-10"
        onClick={onClose}
        aria-label="Cerrar chat"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="flex flex-col h-full overflow-hidden">
        <ChatBotInfo />
        <ChatMessages messages={messages} isTyping={isTyping} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatContainer;