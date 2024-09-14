// components/ai_agent/TypingIndicator.tsx

import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center justify-start mb-2">
      <div className="flex space-x-1">
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
      </div>
    </div>
  );
};

export default TypingIndicator;
