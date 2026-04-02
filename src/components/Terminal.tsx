import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'input' | 'output', text: string }[]>([
    { type: 'output', text: 'Welcome to JR_OS v1.0.0' },
    { type: 'output', text: 'Type "help" for a list of available commands.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    setHistory(prev => [...prev, { type: 'input', text: `guest@jr-os:~$ ${cmd}` }]);
    
    let output = '';
    switch (trimmedCmd) {
      case 'help':
        output = 'Available commands:\n  about    - Display information about me\n  skills   - List my technical skills\n  projects - Show featured projects\n  clear    - Clear terminal output\n  exit     - Close terminal\n  sudo     - ???';
        break;
      case 'about':
        output = 'J Raghavendra\nRole: Computer Science Student | Aspiring Software Developer | ML Enthusiast\nCGPA: 7.93\nPassionate about building scalable and intelligent systems.';
        break;
      case 'skills':
        output = 'Languages: Python, Java, JavaScript, HTML, CSS\nFrameworks: React.js, Flask\nDatabases: MySQL, Firebase\nTools: Git, GitHub, VS Code';
        break;
      case 'projects':
        output = '1. Fake News Detector (Python, Flask, ML)\n2. E-Commerce Website (HTML, CSS, JS)\n3. Smart Retail AI Alert System (Gen AI)';
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        onClose();
        return;
      case 'sudo':
        output = 'Nice try. This incident will be reported.';
        break;
      case '':
        return;
      default:
        output = `Command not found: ${trimmedCmd}. Type "help" for available commands.`;
    }

    setHistory(prev => [...prev, { type: 'output', text: output }]);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 right-6 w-[400px] h-[500px] max-w-[calc(100vw-3rem)] z-[100] glass-panel flex flex-col overflow-hidden border-neon-blue/50"
        >
          {/* Terminal Header */}
          <div className="bg-dark-bg/80 border-b border-glass-border p-3 flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400">
              <TerminalIcon className="w-4 h-4" />
              <span className="font-mono text-xs">guest@jr-os: ~</span>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-neon-pink transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Body */}
          <div className="flex-grow bg-[#0a0a0a]/90 p-4 font-mono text-sm overflow-y-auto" onClick={() => inputRef.current?.focus()}>
            {history.map((line, i) => (
              <div key={i} className={`mb-2 whitespace-pre-wrap ${line.type === 'input' ? 'text-neon-blue' : 'text-gray-300'}`}>
                {line.text}
              </div>
            ))}
            
            <div className="flex items-center text-neon-blue mt-2">
              <span className="mr-2">guest@jr-os:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none flex-grow text-white"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
