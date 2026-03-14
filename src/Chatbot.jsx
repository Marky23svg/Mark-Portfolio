// Chatbot.jsx
import React, { useState } from 'react';
import { LuMessageCircle } from "react-icons/lu";
import { RiSendPlaneFill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { GoogleGenerativeAI } from "@google/generative-ai";

// ============================================
// GEMINI SETUP
// ============================================

// Initialize Gemini AI with your API key
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// Use Gemini 2.5 Flash (works with your account based on the model list)
const MODEL_NAME = "models/gemini-2.5-flash";
console.log("Using model:", MODEL_NAME);

const model = genAI.getGenerativeModel({ model: MODEL_NAME });

// ============================================
// CHATBOT COMPONENT
// ============================================

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Mark. How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to get response from Gemini
  const getGeminiResponse = async (userMessage) => {
    try {
      const prompt = `You are Mark Justin Canuel, a 3rd year BSIT student and frontend developer. 
You're responding to someone visiting your portfolio website. Talk in FIRST PERSON as if you're Mark yourself.

Your background:
- 3rd year BSIT student at ICCT Colleges
- Frontend developer with skills in React, Tailwind, Spring Boot, and MySQL
- CCNA certified in networking fundamentals
- Created the eGuide ICCT Centralized School Requirements Guide System (your capstone project)
- Passionate about UI/UX design and building clean, user-friendly interfaces

IMPORTANT RULES:
1. Always respond as YOURSELF (Mark) - use "I", "me", "my"
2. Be friendly, conversational, and professional
3. Keep responses concise (2-3 sentences max)
4. Sound like a real person, not a robot
5. If asked about something not in your background, politely say you're still learning that

Examples of how to respond:
- Instead of "Mark has skills in React" say "I work with React and really enjoy it!"
- Instead of "Mark is a student" say "I'm currently in my 3rd year of BSIT"
- Instead of "The eGuide system was created" say "I built the eGuide system for my capstone project"

User question: ${userMessage}

Your response (as Mark, first person, conversational):`
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Sorry, I'm having trouble connecting. Please try again later.";
    }
  };

  // Handle sending messages
  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (input.trim() === "") return;
    
    // Add user message
    const userMessage = {
      text: input,
      sender: "user"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Get AI response
    const aiResponse = await getGeminiResponse(input);
    
    // Add AI response
    const botMessage = {
      text: aiResponse,
      sender: "bot"
    };
    
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-black dark:bg-white dark:text-black flex items-center justify-center rounded-full shadow-lg text-white text-2xl cursor-pointer"
        >
          <LuMessageCircle />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white border border-gray-300 dark:border-gray-600 rounded-xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-gray-200 dark:bg-gray-100 border-gray-300 p-3 border-b rounded-t-xl flex justify-between items-center">
            <div>
              <span className="text-black font-medium">Mark</span>
              
            </div>
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
                <span className={`inline-block p-2 rounded-xl ${
                  msg.sender === "user" 
                    ? "bg-black text-white text-sm" 
                    : "bg-gray-200 text-black text-sm"
                }`}>
                  {msg.text}
                </span>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start mb-2">
                <span className="inline-block p-2 rounded-lg bg-gray-200 text-black">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-300">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me about Mark..."
                className="flex-1 px-3 py-2 text-sm rounded border border-gray-300 text-black"
                disabled={isLoading}
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-black text-white rounded border border-gray-300 hover:bg-white hover:text-black cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RiSendPlaneFill />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;