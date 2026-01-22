import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'مرحباً! أنا مساعد فينتك الذكي. كيف يمكنني مساعدتك اليوم بخصوص المسابقة؟', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input);
      const botMsg: Message = { id: (Date.now() + 1).toString(), text: responseText, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-dark-800 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up" style={{ height: '500px' }}>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-white" />
              <div>
                <h3 className="text-white font-bold text-sm">مساعد VenTech</h3>
                <span className="flex items-center gap-1 text-[10px] text-white/80">
                  <span className="block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  {' '}متصل الآن
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-900/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white rounded-tl-none'
                      : 'bg-dark-700 text-gray-200 rounded-tr-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-dark-700 p-3 rounded-2xl rounded-tr-none flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-dark-800 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="اكتب استفسارك هنا..."
                className="flex-1 bg-dark-900 text-white text-sm rounded-lg px-3 py-2 border border-white/10 focus:outline-none focus:border-primary"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-primary hover:bg-primary-dark disabled:opacity-50 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-5 w-5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-105"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default AIChat;