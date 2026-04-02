import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, User, Briefcase, Mail, Award, GraduationCap } from 'lucide-react';

const navItems = [
  { name: 'About', icon: User, href: '#about' },
  { name: 'Education', icon: GraduationCap, href: '#education' },
  { name: 'Skills', icon: Code2, href: '#skills' },
  { name: 'Projects', icon: Briefcase, href: '#projects' },
  { name: 'Certifications', icon: Award, href: '#certifications' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

export default function Navbar({ toggleTerminal }: { toggleTerminal: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/80 backdrop-blur-md border-b border-glass-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-orbitron font-bold neon-text-blue">
          JR<span className="text-white">.</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-neon-blue transition-colors flex items-center gap-2 group"
            >
              <item.icon className="w-4 h-4 group-hover:text-neon-purple transition-colors" />
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleTerminal}
            className="p-2 rounded-full bg-glass border border-glass-border hover:border-neon-blue transition-colors group"
            title="Open Terminal"
          >
            <Terminal className="w-5 h-5 group-hover:text-neon-blue" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
