import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X } from 'lucide-react';

export default function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! I am JR-AI. How can I help you navigate this portfolio?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: input }]);
    
    // Simple simulated response
    setTimeout(() => {
      let response = "I'm a simulated AI assistant. To see real AI projects, check out the Projects section!";
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes('project') || lowerInput.includes('work')) {
        response = "Raghavendra has built some cool projects like a Fake News Detector and a Smart Retail AI Alert System. Check the Projects section!";
      } else if (lowerInput.includes('skill') || lowerInput.includes('tech')) {
        response = "He is skilled in Python, Java, React, and Machine Learning. See the Skills matrix for more details.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('hire')) {
        response = "You can reach him via the Contact form at the bottom of the page, or email him directly at 248r5a0517@gmail.com.";
      }

      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-[90]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 left-0 w-80 glass-panel border-neon-purple/50 overflow-hidden flex flex-col shadow-[0_0_20px_rgba(188,19,254,0.2)]"
            style={{ height: '400px' }}
          >
            {/* Header */}
            <div className="bg-neon-purple/20 border-b border-glass-border p-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-neon-purple" />
                <span className="font-orbitron text-sm font-bold text-white">JR-AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.type === 'user' 
                      ? 'bg-neon-blue/20 text-white border border-neon-blue/30 rounded-tr-none' 
                      : 'bg-dark-bg border border-glass-border text-gray-300 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t border-glass-border bg-dark-bg/50">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full bg-dark-bg border border-glass-border rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-purple transition-colors"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-dark-bg border-2 border-neon-purple flex items-center justify-center text-neon-purple shadow-[0_0_15px_rgba(188,19,254,0.5)] hover:bg-neon-purple hover:text-white transition-colors"
      >
        <Bot className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
