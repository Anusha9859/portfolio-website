import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Cpu } from 'lucide-react';
import { sendChatMessage } from '../utils/api';

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm Veera's AI assistant. Ask me about skills, projects, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await sendChatMessage(userMessage, sessionId);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: response.data.message 
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      
      // Fallback responses
      const fallbackResponses = {
        skills: 'I specialize in MERN Stack (MongoDB, Express, React, Node.js), Python, MySQL, and AI automation tools like Make.com and n8n. I also work with Excel, Power BI, and have built real-time AI chatbots!',
        projects: 'My key projects include: Real-time AI Chatbot with Gemini API, AI Agent Automation workflows, MERN Chat Application, and Business Analytics Dashboard.',
        experience: 'Fresh graduate with 9.2 CGPA from RGUKT. Strong foundation in full-stack development with hands-on projects in MERN stack, AI chatbots, and automation workflows.',
        contact: 'You can reach me at marisearuna@gmail.com or connect on LinkedIn. I\'m available for internships and full-time positions!'
      };

      let botResponse = 'I can help you learn about my skills, projects, experience, and how to contact me. What would you like to know?';
      
      const lowerInput = userMessage.toLowerCase();
      if (lowerInput.includes('skill')) botResponse = fallbackResponses.skills;
      else if (lowerInput.includes('project')) botResponse = fallbackResponses.projects;
      else if (lowerInput.includes('experience') || lowerInput.includes('education')) botResponse = fallbackResponses.experience;
      else if (lowerInput.includes('contact') || lowerInput.includes('email')) botResponse = fallbackResponses.contact;

      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all hover:scale-110 z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] backdrop-blur-xl bg-slate-950/90 border border-purple-500/30 rounded-2xl shadow-2xl z-50 flex flex-col max-h-[600px]">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">AI Assistant</h3>
                <p className="text-xs text-gray-400">Powered by Gemini</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'backdrop-blur-sm bg-white/10 border border-purple-500/30 text-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="backdrop-blur-sm bg-white/10 border border-purple-500/30 px-4 py-2 rounded-2xl">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-purple-500/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                className="flex-1 px-4 py-2 backdrop-blur-sm bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button
                type="submit"
                disabled={isTyping}
                className="p-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;