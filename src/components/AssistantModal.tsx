import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, ArrowRight } from 'lucide-react';
import { portfolioProfile, assistantPredefinedAnswers } from '../data/portfolioData';

interface AssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  time: string;
}

export const AssistantModal: React.FC<AssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I'm Ruchita's AI Portfolio Assistant. Ask me anything about her skills, education at SVKM College of Engineering, projects, or how to get in touch!`,
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What are Ruchita's technical skills?",
    "Tell me about her education & college",
    "What projects has she worked on?",
    "How can I contact Ruchita?"
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Generate intelligent contextual response
    setTimeout(() => {
      const lower = text.toLowerCase();
      let matchedAnswer = '';

      for (const entry of assistantPredefinedAnswers) {
        if (entry.keywords.some((k) => lower.includes(k))) {
          matchedAnswer = entry.answer;
          break;
        }
      }

      if (!matchedAnswer) {
        matchedAnswer = `Ruchita Borse is a Computer Science Engineering student at SVKM College of Engineering, Shirpur (Graduation 2027). Her core strengths are in DSA, Web Development (HTML/CSS/Tailwind/React), and DBMS (MySQL). Feel free to ask about her specific projects, skills, or email her directly at ${portfolioProfile.email}!`;
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: matchedAnswer,
        time: 'Just now'
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col h-[580px] overflow-hidden">
        
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-blue-600 to-sky-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base leading-tight">
                Ruchita's Portfolio Assistant
              </h3>
              <p className="text-[11px] text-blue-100 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Online & Ready</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Suggested Questions pill list */}
        <div className="px-4 py-2.5 bg-blue-50/70 border-b border-blue-100 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <span className="text-[11px] font-bold text-blue-800 shrink-0">Ask:</span>
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-2.5 py-1 rounded-full bg-white text-blue-700 hover:bg-blue-100 border border-blue-200/80 text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-xs'
                    : 'bg-white text-slate-800 border border-blue-100/80 rounded-tl-xs whitespace-pre-line'
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-blue-600 italic pl-10">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-150" />
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-300" />
              <span className="text-[11px] text-slate-500 ml-1">Assistant is typing...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-3 bg-white border-t border-slate-100">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about Ruchita's work..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-full bg-slate-100 border border-transparent focus:border-blue-400 focus:bg-white text-xs sm:text-sm outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center disabled:opacity-40 transition-colors shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
