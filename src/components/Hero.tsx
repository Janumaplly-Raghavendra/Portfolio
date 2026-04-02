import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-neon-purple/50 bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">
            System Initialized // Status: Online
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="neon-text-blue">Raghavendra</span> <span className="inline-block animate-bounce">👋</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-400 font-mono h-8">
            <span className="text-neon-pink">&gt;</span>{' '}
            <Typewriter
              words={['Software Developer', 'ML Engineer', 'Problem Solver']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          
          <p className="text-gray-400 max-w-lg leading-relaxed">
            Computer Science student passionate about building scalable, intelligent systems and crafting futuristic digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 rounded-md bg-neon-blue/10 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg transition-all duration-300 font-medium neon-border-blue">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 rounded-md bg-glass border border-glass-border hover:border-neon-purple hover:text-neon-purple transition-all duration-300 font-medium">
              Contact Me
            </a>
          </div>

          <div className="flex gap-4 pt-6">
            <a href="https://github.com/Janumally-Raghavendra" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-glass border border-glass-border hover:border-neon-blue hover:text-neon-blue transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/janumpally-raghavendra" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-glass border border-glass-border hover:border-neon-blue hover:text-neon-blue transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:248r5a0517@gmail.com" className="p-3 rounded-full bg-glass border border-glass-border hover:border-neon-blue hover:text-neon-blue transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Holographic Avatar Container */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-neon-blue/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-neon-purple/40"
            />
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-8 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 backdrop-blur-sm border border-glass-border flex items-center justify-center overflow-hidden neon-border-blue"
            >
              {/* Placeholder for Avatar - using a stylized icon for now */}
              <div className="text-6xl font-orbitron font-bold text-white/80">JR</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <a href="#about">
          <ChevronDown className="w-8 h-8 hover:text-neon-blue transition-colors" />
        </a>
      </motion.div>
    </section>
  );
}
