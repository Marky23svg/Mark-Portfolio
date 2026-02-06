// src/components/FloatingChatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  Bot,
  Minimize2,
  Maximize2
} from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! 😊 I'm Ren. Thanks for checking out my website! Feel free to ask about my projects, the tools I use, or how Muay Thai keeps me disciplined. How can I help you today?",
      sender: 'bot',
      time: 'Now'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize Gemini
  const API_KEY = 'YOUR_API_KEY_HERE';
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  // System prompt
  const systemPrompt = `You are Ren, a web developer and Muay Thai enthusiast. You're friendly, professional, and passionate about coding. Key points:
  - You specialize in React, JavaScript, TypeScript, Tailwind CSS, Node.js
  - You practice Muay Thai which helps with discipline and focus
  - You enjoy building modern web applications
  - You're always learning new technologies
  - Keep responses concise and friendly
  - Use emojis occasionally 😊`;

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Send message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { 
      text: input, 
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const prompt = `${systemPrompt}\n\nUser: ${input}\nRen:`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      
      const botMessage = { 
        text: response.text(), 
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        text: 'Oops! Something went wrong. Please try again.', 
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true 
      }]);
    } finally {
      setLoading(false);
    }
  };

  // Quick replies
  const quickReplies = [
    "What projects have you built?",
    "What tech stack do you use?",
    "Tell me about Muay Thai",
    "How can I contact you?"
  ];

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 left-6 z-50 transition-all duration-300 ${
          isMinimized ? 'w-80' : 'w-96'
        }`}>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full absolute -right-0.5 -bottom-0.5 border-2 border-white"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white">Chat with Ren</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-white/90">ONLINE</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4 text-white" />
                  ) : (
                    <Minimize2 className="w-4 h-4 text-white" />
                  )}
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsMinimized(false);
                  }}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Chat Body - Hidden when minimized */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 bg-gray-50">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
                    >
                      <div className={`inline-block max-w-[80%] rounded-2xl p-3 ${
                        msg.sender === 'user'
                          ? 'bg-blue-500 text-white rounded-tr-none'
                          : 'bg-white border border-gray-200 rounded-tl-none'
                      }`}>
                        <div className="flex items-center mb-1">
                          {msg.sender === 'bot' ? (
                            <Bot className="w-3 h-3 mr-2 text-purple-500" />
                          ) : (
                            <User className="w-3 h-3 mr-2 text-blue-500" />
                          )}
                          <span className="text-xs font-medium opacity-75">
                            {msg.sender === 'user' ? 'You' : 'Ren'}
                          </span>
                        </div>
                        <div className="text-sm">
                          {msg.sender === 'bot' ? (
                            <ReactMarkdown
                              components={{
                                p: ({ node, ...props }) => <p className="mb-1" {...props} />,
                                ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-1" {...props} />,
                              }}
                            >
                              {msg.text}
                            </ReactMarkdown>
                          ) : (
                            <p>{msg.text}</p>
                          )}
                        </div>
                        <div className="text-xs opacity-60 mt-1 text-right">{msg.time}</div>
                      </div>
                    </div>
                  ))}
                  
                  {loading && (
                    <div className="flex items-center space-x-2 text-gray-500">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      <span className="text-sm">Ren is typing...</span>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => setInput(reply)}
                        className="text-xs px-3 py-1.5 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type a message..."
                      disabled={loading}
                      className="flex-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          handleSendMessage(e);
                        }
                      }}
                    />
                    <button
                      type="submit"
                      disabled={loading || !input.trim()}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Minimized View */}
            {isMinimized && (
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">R</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Chat with Ren</h4>
                      <p className="text-sm text-gray-500">
                        {messages[messages.length - 1]?.text.substring(0, 30)}...
                      </p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;