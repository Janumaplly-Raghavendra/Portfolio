import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Terminal from './components/Terminal';
import FloatingAssistant from './components/FloatingAssistant';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Easter egg
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Shift + J to open terminal
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        setIsTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center text-white font-orbitron">
        <div className="w-24 h-24 relative mb-8">
          <div className="absolute inset-0 border-4 border-t-neon-blue border-r-neon-purple border-b-neon-pink border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-t-transparent border-r-neon-blue border-b-neon-purple border-l-neon-pink rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <h1 className="text-2xl font-bold tracking-widest animate-pulse">INITIALIZING SYSTEM...</h1>
        <div className="mt-4 w-64 h-1 bg-glass-border rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-[loading_2s_ease-in-out_forwards]" style={{ width: '0%' }}></div>
        </div>
        <style>{`
          @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-neon-purple/30 selection:text-white">
      <CustomCursor />
      <BackgroundParticles />
      
      <Navbar toggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)} />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-8 text-center border-t border-glass-border bg-dark-bg/50 backdrop-blur-md">
        <p className="text-gray-500 font-mono text-sm">
          &copy; {new Date().getFullYear()} J Raghavendra. All systems operational.
        </p>
      </footer>

      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      <FloatingAssistant />
    </div>
  );
}
