
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { startChatSession } from '../services/geminiService';

const AIAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'assistant', content: "Hello! I'm Nexa, your NexaForge concierge. How can I help you elevate your tech today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!chatRef.current) {
      chatRef.current = startChatSession();
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      if (!chatRef.current) chatRef.current = startChatSession();
      const result = await chatRef.current.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'assistant', content: result.text }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having a little trouble connecting. Please try again or contact us directly!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-[380px] h-[500px] bg-slate-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="p-4 bg-sky-500 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-sky-500" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Nexa AI</h4>
                <div className="flex items-center gap-1 text-[10px] text-white/80">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div> Online
                </div>
              </div>
            </div>
            <button onClick={toggleChat} className="p-1 text-white hover:bg-white/20 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-sky-500 text-white rounded-br-none' 
                    : 'bg-slate-800 text-slate-200 rounded-bl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none">
                  <Loader2 className="w-4 h-4 animate-spin text-sky-500" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-white/5 bg-slate-900">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Nexa anything..."
                className="w-full bg-slate-950 border border-white/10 rounded-full py-2 px-4 pr-12 text-sm focus:outline-none focus:border-sky-500"
              />
              <button
                disabled={!input.trim() || loading}
                type="submit"
                className="absolute right-2 top-1.5 p-1 bg-sky-500 rounded-full text-white disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="w-16 h-16 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-sky-400 transition-all group relative"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-950"></div>
          <MessageSquare className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default AIAgent;
