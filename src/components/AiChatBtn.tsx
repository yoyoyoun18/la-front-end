import React from "react";

interface AiChatBtnProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const AiChatBtn: React.FC<AiChatBtnProps> = ({
  onClick,
  children,
  className = "",
}) => {
  return (
    <div>
      <div className="fixed bottom-24 right-10 w-[300px] h-[480px] border border-gray-400 bg-gray-900 p-4"></div>
      <button
        onClick={onClick}
        className={`fixed bottom-5 right-5 w-16 h-16 text-3xl bg-yellow-300 text-white rounded-full shadow-lg hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200 ${className}`}
      >
        💬
      </button>
    </div>
  );
};

export default AiChatBtn;
