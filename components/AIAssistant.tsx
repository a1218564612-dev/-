
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '您好，我是您的智能办公助手。关于工具推荐或效率建议，您可以随时问我。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userText);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* 悬浮按钮 */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 z-50 ${isOpen ? 'bg-slate-900 rotate-90 scale-90' : 'bg-slate-900 hover:scale-110 hover:shadow-slate-300'}`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-wand-magic-sparkles'} text-white text-xl`}></i>
      </button>

      {/* 聊天窗口 */}
      <div className={`
        fixed bottom-28 right-8 w-[calc(100vw-4rem)] md:w-[400px] glass rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-50 flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right
        ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}
      `}>
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <i className="fa-solid fa-brain text-sm"></i>
            </div>
            <div>
              <p className="font-bold text-sm">智能助手</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">在线</span>
              </div>
            </div>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 p-6 h-[400px] overflow-y-auto space-y-6 bg-[#fbfcfd]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-[14px] leading-relaxed ${msg.role === 'user' ? 'bg-slate-900 text-white rounded-tr-none shadow-lg' : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-sm'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-white border-t border-slate-50">
          <div className="relative">
            <input 
              type="text" 
              placeholder="请描述您的办公场景或需求..." 
              className="w-full pl-5 pr-14 py-4 bg-slate-50 border-none rounded-2xl text-[14px] focus:ring-4 focus:ring-slate-100 outline-none transition-all placeholder:text-slate-300"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:opacity-90 disabled:opacity-20 transition-all"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-200 mt-4 font-bold tracking-[0.2em] uppercase">智能驱动系统</p>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
