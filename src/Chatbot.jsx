// Chatbot.jsx
import React, { useState } from 'react';
import { LuMessageCircle } from "react-icons/lu";
import { RiSendPlaneFill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-13 h-13 bg-black dark:bg-white dark:text-black flex items-center justify-center rounded-full shadow-lg text-white text-2xl cursor-pointer"
        >
          <LuMessageCircle />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white border border-gray-300 dark:border-gray-600 rounded-xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-gray-200 dark:bg-gray-100 border-gray-300 p-3 border-b rounded-t-xl flex justify-between items-center">
            <span className="text-black font-medium">Mark</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-black text-xl cursor-pointer"
            >
              <CgClose />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 ${msg.sender === "user" ? "text-right" : ""}`}>
                <span className={`inline-block p-2 rounded-lg ${
                  msg.sender === "user" 
                    ? "bg-black text-black" 
                    : "bg-gray-200 text-black"
                }`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-300">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 rounded border border-gray-300 text-black"
              />
              <button className="px-4 py-2 bg-black text-white rounded border border-gray-300 hover:bg-white hover:text-black cursor-pointer">
                <RiSendPlaneFill />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;