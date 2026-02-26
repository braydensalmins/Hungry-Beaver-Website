import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Chat } from '@google/genai';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const BeaverBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hey there! I'm Chomp. Got a tough stump? Ask me anything about grinding or pricing!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      try {
        chatSessionRef.current = createChatSession();
      } catch (e) {
        console.error("Failed to init chat", e);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSessionRef.current) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(chatSessionRef.current, userMsg.text);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm stuck in a root. Try again later.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Chomp chat assistant"
          className="bg-beaver-orange hover:bg-orange-600 text-beaver-dark p-4 shadow-2xl rounded-full border-4 border-beaver-dark transition-transform hover:scale-110 flex items-center justify-center group"
        >
          <Bot className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white border-4 border-beaver-dark w-80 md:w-96 shadow-2xl flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-beaver-dark p-4 flex justify-between items-center border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="bg-beaver-orange p-1 rounded-full">
                <Bot className="w-5 h-5 text-beaver-dark" />
              </div>
              <h3 className="font-display font-bold text-white tracking-wide">ASK CHOMP</h3>
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 text-sm font-medium ${
                    msg.role === 'user' 
                      ? 'bg-beaver-dark text-white' 
                      : 'bg-beaver-cream border-2 border-gray-200 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 p-3 rounded-lg text-xs animate-pulse">
                  Chewing on that thought...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about pricing..."
                className="flex-1 bg-gray-100 border-2 border-gray-200 p-2 text-sm focus:outline-none focus:border-beaver-orange text-beaver-dark font-bold"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                aria-label="Send message"
                className="bg-beaver-orange text-beaver-dark p-2 hover:bg-orange-600 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
